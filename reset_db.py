import sqlite3
import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "polla_state.db"

DEFAULT_STATE = {
    "config": {
        "adminPin": "",
        "exactPoints": 3,
        "outcomePoints": 1
    },
    "participants": [],
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

def reset_database():
    if not DB_PATH.exists():
        print("La base de datos no existe, se creara una nueva al iniciar server.py.")
        return

    with sqlite3.connect(DB_PATH) as conn:
        payload = json.dumps(DEFAULT_STATE, ensure_ascii=False)
        conn.execute("UPDATE app_state SET payload = ? WHERE id = 1", (payload,))
        conn.commit()
    print("¡Exito! La base de datos ha sido limpiada. Ahora puedes crear un nuevo PIN en admin.html")

if __name__ == "__main__":
    reset_database()