import sqlite3
import json

conn = sqlite3.connect('polla_state.db')
cursor = conn.cursor()

# Get the state
cursor.execute('SELECT payload FROM app_state WHERE id = 1')
row = cursor.fetchone()

if row:
    data = json.loads(row[0])
    print('Admin PIN:', data.get('config', {}).get('adminPin', 'vacio'))
    print('Num participantes:', len(data.get('participants', [])))
    if data.get('participants'):
        for p in data['participants']:
            print(f'  - {p.get("name")} (PIN: {p.get("pin")})')
else:
    print('No hay datos en la DB')

conn.close()
