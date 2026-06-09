# Polla Mundialista - Silver Solutions

Aplicacion web estatica para administrar una polla del Mundial 2026 con:

- login de participantes por usuario y PIN
- panel admin con clave propia
- sincronizacion del fixture y resultados desde FIFA
- pronosticos por partido
- extras por campeon, jugador elegido y equipo favorito
- ranking general con exportacion a Excel
- uso de escudos de federacion en la interfaz

## Estado actual

El proyecto funciona con un **backend Python Flask integrado** que persiste datos en SQLite.

Los datos se guardan en:

- `localStorage` (navegador) para sesiones activas y estado temporal
- `SQLite` (servidor) para persistencia centralizada via `/api/state`
- `sessionStorage` para sesiones de admin, participante y mensajes transitorios

**Característica clave**: Al crear un participante, la sesión se inicia automáticamente sin volver a pedir el PIN en el mismo navegador.

La app ahora funciona bien para uso multiusuario en red local. Cada navegador mantiene su estado sincronizado con el servidor.

## Vistas principales

- `login.html`: acceso de participantes
- `index.html`: panel de participantes
- `admin.html`: panel de administracion

Archivos principales:

- `app-core.js`: logica central de la app
- `shared.css`: estilos compartidos
- `login.js`, `index.js`, `admin.js`: inicializacion por vista
- `login.css`, `index.css`, `admin.css`: estilos por vista

## Funcionalidades incluidas

- Creacion de participantes desde admin
- PIN individual por participante
- Clave admin local
- Puntaje configurable por exacto y por signo
- Sincronizacion del Mundial 2026 desde el feed oficial de FIFA
- Bloqueo automatico de pronosticos cuando arranca el partido
- Pronosticos extra:
  - campeon
  - jugador elegido
  - equipo favorito
- Bonus del jugador:
  - 2 puntos si el jugador elegido ya anoto
  - carga manual general de goleadores
  - carga de goleadores por partido finalizado
- Bonus del equipo:
  - 3 puntos por victoria
  - 1 punto por empate
  - 0 puntos por derrota
- Ranking general
- Exportacion del ranking a archivo Excel `.xlsx`
- Respaldo del estado en JSON

## Como ejecutarla localmente

### Opción 1 (Recomendada): Con backend Flask + SQLite

Persistencia centralizada, ideal para múltiples usuarios en red local.

1. Abre PowerShell en la carpeta del proyecto.
2. Instala dependencias (primera vez):

```powershell
py -m pip install -r requirements.txt
```

3. Inicia el servidor:

```powershell
py server.py
```

4. Abre en el navegador:

- **Participantes**: `http://localhost:8000/login.html`
- **Admin**: `http://localhost:8000/admin.html`

### Opción 2: Modo estático (sin backend)

Datos solo en localStorage del navegador. Útil para pruebas rápidas.

1. Abre PowerShell en la carpeta del proyecto.
2. Inicia un servidor HTTP:

```powershell
py -m http.server 5500
```

3. Abre en el navegador:

- **Participantes**: `http://localhost:5500/login.html`
- **Admin**: `http://localhost:5500/admin.html`

**Nota**: En modo estático, cada navegador/pestaña tiene su propio estado independiente.

## Flujo recomendado de uso

1. Entra a `admin.html`.
2. Crea la clave admin si es la primera vez.
3. Sincroniza FIFA 2026.
4. Agrega los participantes con su PIN.
5. Cada participante entra por `login.html`.
6. Cada participante carga:
   - resultados por partido
   - campeon
   - jugador elegido
   - equipo favorito
7. Desde admin puedes:
   - cargar goleadores manuales
   - cargar goleadores por partido
   - revisar el ranking
   - descargar respaldo JSON
   - descargar el Excel del ranking

## Estructura del estado

El estado principal incluye, entre otros, estos bloques:

- `config`
- `participants`
- `matches`
- `predictions`
- `results`
- `goalScorers`
- `matchScorers`
- `lockedMatches`
- `source`

Cada participante guarda:

- `id`
- `name`
- `pin`
- `championPick`
- `topScorerPick`
- `favoriteTeam`

## Limitaciones actuales

- No hay backend ni base de datos compartida
- Cada navegador mantiene su propia copia de la polla
- Si varias personas abren la app en distintos equipos, no comparten los mismos datos
- La clave admin actual no es un sistema seguro para internet publica
- La sincronizacion depende de que el feed de FIFA este disponible

## Si quieres volverla multiusuario

La siguiente evolucion natural seria mover el estado a una base compartida, por ejemplo:

- Firebase
- Supabase
- backend local con SQLite

Con eso si podrias tener:

- misma data para todos
- acceso compartido en red local o internet privada
- sesiones reales
- administracion mas segura

## Nota

El archivo `Mundialista.html` y sus CSS/JS asociados pueden existir como material previo o variante antigua, pero el flujo activo de esta version esta en:

- `login.html`
- `index.html`
- `admin.html`
