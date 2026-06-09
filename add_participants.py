import sqlite3
import json
import uuid
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "polla_state.db"

PARTICIPANTS_DATA = [
    ("Ivelisse", "0001"), ("Jhair", "0002"), ("Christian", "0003"),
    ("Carolina", "0004"), ("Luys", "0005"), ("Yanellys", "0006"),
    ("Davisela", "0007"), ("Janette", "0008"), ("Papo", "0009"),
    ("Danny", "0010"), ("Ingrid", "0011"), ("Ginger", "0012"),
    ("Raul", "0013"), ("Thayra", "0014"), ("Edgar", "0015"),
    ("Daniela", "0016"), ("Alvaro", "0017"), ("Agustin", "0018"),
    ("Rosemary", "0019"), ("Ricardo", "0020"), ("Ricky", "0021"),
    ("Adrian", "0022"), ("Donaldo", "0023"), ("Gloria Plata", "0024"),
    ("Paul Plata", "0405"), ("Danny Jr", "0025")
]

def add_bulk_participants():
    if not DB_PATH.exists():
        print("Error: La base de datos no existe. Inicia 'python server.py' primero.")
        return

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute("SELECT payload FROM app_state WHERE id = 1")
    row = cursor.fetchone()
    
    if not row:
        print("Error: No se encontró el estado inicial.")
        return

    state = json.loads(row[0])
    
    # Evitar duplicados
    existing_names = {p['name'].lower() for p in state.get('participants', [])}
    
    count = 0
    for name, pin in PARTICIPANTS_DATA:
        if name.lower() not in existing_names:
            new_p = {
                "id": f"participant-{uuid.uuid4().hex[:8]}",
                "name": name,
                "pin": pin,
                "championPick": "", "topScorerPick": "", "favoriteTeam": "",
                "stagePicks": {"semiFinalists": [], "finalists": []},
                "groupAdvancers": {}
            }
            state['participants'].append(new_p)
            count += 1

    cursor.execute("UPDATE app_state SET payload = ? WHERE id = 1", (json.dumps(state, ensure_ascii=False),))
    conn.commit()
    conn.close()
    print(f"¡Éxito! Se agregaron {count} nuevos participantes a la base de datos.")

if __name__ == "__main__":
    add_bulk_participants()
