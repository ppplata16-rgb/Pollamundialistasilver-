from __future__ import annotations
import json
import sqlite3
import os
from pathlib import Path
from flask import Flask, jsonify, request, send_from_directory, abort
from datetime import datetime, timezone

try:
    import psycopg
    from psycopg.rows import dict_row
except ImportError:
    psycopg = None

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = Path(os.environ.get("SQLITE_PATH") or ("/tmp/polla_state.db" if os.environ.get("VERCEL") else BASE_DIR / "polla_state.db"))
SCHEMA_FILE = BASE_DIR / "polla_mundialista_schema.sql"

app = Flask(__name__, static_folder=str(BASE_DIR), static_url_path="")

# Enable CORS for all routes
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    return response

INITIAL_PARTICIPANTS = [
    ("Ivelisse", "0001"), ("Jhair", "0002"), ("Christian", "0003"),
    ("Carolina", "0004"), ("Luys", "0005"), ("Yanellys", "0006"),
    ("Davisela", "0007"), ("Janette", "0008"), ("Papo", "0009"),
    ("Danny", "0010"), ("Ingrid", "0011"), ("Ginger", "0012"),
    ("Raul", "0013"), ("Thayra", "0014"), ("Edgar", "0015"),
    ("Daniela", "0016"), ("Alvaro", "0017"), ("Agustin", "0018"),
    ("Rosemary", "0019"), ("Ricardo", "0020"), ("Ricky", "0021"),
    ("Adrian", "0022"), ("Donaldo", "0023"), ("Gloria Plata", "0024"),
    ("Paul Plata", "0405"), ("Danny Jr", "0025"), ("Joseph Plata", "0396")
]

DEFAULT_STATE = {
    "config": {
        "adminPin": "",
        "exactPoints": 3,
        "outcomePoints": 1
    },
    "participants": [
        {
            "id": f"p-{i+1}", "name": name, "pin": pin,
            "championPick": "", "topScorerPick": "", "favoriteTeam": "",
            "stagePicks": {"semiFinalists": [], "finalists": []},
            "groupAdvancers": {}
        } for i, (name, pin) in enumerate(INITIAL_PARTICIPANTS)
    ],
    "matches": [],
    "predictions": {},
    "results": {},
    "goalScorers": [],
    "matchScorers": {},
    "lockedMatches": {},
    "source": {
        "provider": "fifa-api-world-cup-2026",
        "seasonId": "285023",
        "endpoint": "https://api.fifa.com/api/v3/calendar/matches?language=en&count=200&idSeason=285023",
        "lastSync": "",
        "syncError": ""
    }
}


def get_db_connection():
    # Vercel Marketplace providers can expose different Postgres URL names.
    postgres_url = (
        os.environ.get("POSTGRES_URL")
        or os.environ.get("DATABASE_URL")
        or os.environ.get("POSTGRES_PRISMA_URL")
        or os.environ.get("POSTGRES_URL_NON_POOLING")
    )
    if postgres_url and psycopg:
        if postgres_url.startswith("postgres://"):
            postgres_url = postgres_url.replace("postgres://", "postgresql://", 1)
        conn = psycopg.connect(postgres_url, row_factory=dict_row)
        return conn, "%s"
    
    # Si no, usamos SQLite local
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn, "?"


def init_db() -> None:
    conn, _ = get_db_connection()
    try:
        if not os.environ.get("POSTGRES_URL"):
            DB_PATH.parent.mkdir(parents=True, exist_ok=True)
            
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS app_state (
                id INTEGER PRIMARY KEY,
                payload TEXT NOT NULL
            )
            """
        )
        cursor = conn.execute("SELECT payload FROM app_state WHERE id = 1")
        row = cursor.fetchone()
        if row is None:
            conn.execute(
                "INSERT INTO app_state (id, payload) VALUES (1, %s)" if os.environ.get("POSTGRES_URL") else "INSERT INTO app_state (id, payload) VALUES (1, ?)",
                (json.dumps(DEFAULT_STATE, ensure_ascii=False),)
            )
        conn.commit()
    finally:
        conn.close()


def load_state() -> dict:
    try:
        conn, _ = get_db_connection()
        try:
            cursor = conn.execute("SELECT payload FROM app_state WHERE id = 1")
            row = cursor.fetchone()
            if row is None:
                return DEFAULT_STATE.copy()
            data = json.loads(row["payload"])
            # Aseguramos que la estructura básica exista
            if not isinstance(data, dict) or "config" not in data:
                return DEFAULT_STATE.copy()
            return data
        finally:
            conn.close()
    except (json.JSONDecodeError, sqlite3.Error):
        return DEFAULT_STATE.copy()
    except Exception:
        return DEFAULT_STATE.copy()


def save_state(state: dict) -> dict:
    payload = json.dumps(state, ensure_ascii=False)
    conn, ph = get_db_connection()
    try:
        conn.execute(
            f"INSERT INTO app_state (id, payload) VALUES (1, {ph}) ON CONFLICT(id) DO UPDATE SET payload = EXCLUDED.payload",
            (payload,)
        )
        conn.commit()
    finally:
        conn.close()
    return state


@app.route("/api/state", methods=["GET"])
def api_get_state():
    state = load_state()
    return jsonify(state), 200


@app.route("/api/state", methods=["POST"])
def api_save_state():
    if not request.is_json:
        abort(400, description="JSON body required")

    payload = request.get_json(silent=True)
    if not isinstance(payload, dict):
        abort(400, description="Expected JSON object")

    state = save_state(payload)
    return jsonify(state), 200


@app.route("/api/time", methods=["GET"])
def api_get_time():
    # Proporciona la hora oficial del servidor para evitar trampas con la hora local
    return jsonify({"serverTime": datetime.now(timezone.utc).isoformat()}), 200


@app.route("/api/state", methods=["OPTIONS"])
def api_state_options():
    return "", 204


@app.route("/", defaults={"path": "login.html"})
@app.route("/<path:path>")
def serve_file(path: str):
    file_path = BASE_DIR / path
    if file_path.is_file():
        return send_from_directory(str(BASE_DIR), path)
    if path.endswith(".html"):
        abort(404)
    abort(404)


init_db()


if __name__ == "__main__":
    print(f"Serving Polla Mundialista on http://localhost:8000")
    app.run(host="0.0.0.0", port=8000)
