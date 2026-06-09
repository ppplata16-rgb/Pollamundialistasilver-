-- Esquema base para migrar la app "Polla Mundialista - Silver Solutions"
-- desde localStorage a una base de datos SQL.
--
-- Modelo actual del front-end:
-- - config            -> app_settings
-- - participants      -> participants
-- - matches           -> matches
-- - results           -> match_results
-- - predictions       -> participant_predictions
-- - goalScorers       -> manual_goal_scorers
-- - matchScorers      -> match_goal_scorers
-- - lockedMatches     -> matches.is_locked
--
-- Nota:
-- La app actual guarda el PIN y la clave admin en texto plano.
-- Este esquema mantiene ese comportamiento para que el modelo encaje con el front-end,
-- pero si despues lo expones fuera de un entorno local conviene hashear esos datos.

CREATE TABLE IF NOT EXISTS app_settings (
    settings_id INTEGER PRIMARY KEY,
    admin_pin VARCHAR(120) NOT NULL DEFAULT '',
    exact_points INTEGER NOT NULL DEFAULT 3 CHECK (exact_points >= 0),
    outcome_points INTEGER NOT NULL DEFAULT 1 CHECK (outcome_points >= 0),
    player_goal_bonus_points INTEGER NOT NULL DEFAULT 2 CHECK (player_goal_bonus_points >= 0),
    favorite_team_win_points INTEGER NOT NULL DEFAULT 3 CHECK (favorite_team_win_points >= 0),
    favorite_team_draw_points INTEGER NOT NULL DEFAULT 1 CHECK (favorite_team_draw_points >= 0),
    favorite_team_loss_points INTEGER NOT NULL DEFAULT 0 CHECK (favorite_team_loss_points >= 0),
    source_provider VARCHAR(80) NOT NULL DEFAULT 'fifa-api-world-cup-2026',
    source_season_id VARCHAR(40) NOT NULL DEFAULT '285023',
    source_endpoint TEXT NOT NULL DEFAULT 'https://api.fifa.com/api/v3/calendar/matches?language=en&count=200&idSeason=285023',
    last_sync_at TIMESTAMP NULL,
    sync_error TEXT NOT NULL DEFAULT '',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CHECK (settings_id = 1),
    CHECK (exact_points >= outcome_points)
);

INSERT INTO app_settings (
    settings_id,
    admin_pin,
    exact_points,
    outcome_points,
    player_goal_bonus_points,
    favorite_team_win_points,
    favorite_team_draw_points,
    favorite_team_loss_points
)
SELECT
    1,
    '',
    3,
    1,
    2,
    3,
    1,
    0
WHERE NOT EXISTS (
    SELECT 1
    FROM app_settings
    WHERE settings_id = 1
);

CREATE TABLE IF NOT EXISTS participants (
    participant_id VARCHAR(80) PRIMARY KEY,
    participant_name VARCHAR(120) NOT NULL UNIQUE,
    participant_pin VARCHAR(120) NOT NULL,
    champion_pick VARCHAR(120) NOT NULL DEFAULT '',
    top_scorer_pick VARCHAR(160) NOT NULL DEFAULT '',
    top_scorer_pick_key VARCHAR(160) NOT NULL DEFAULT '',
    favorite_team VARCHAR(120) NOT NULL DEFAULT '',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS matches (
    match_id VARCHAR(80) PRIMARY KEY,
    stage VARCHAR(80) NOT NULL,
    group_code VARCHAR(32) NOT NULL DEFAULT '',
    home_team VARCHAR(120) NOT NULL,
    away_team VARCHAR(120) NOT NULL,
    kickoff_at TIMESTAMP NULL,
    status_code INTEGER NOT NULL DEFAULT 1 CHECK (status_code >= 0),
    match_number INTEGER NOT NULL DEFAULT 0 CHECK (match_number >= 0),
    stadium VARCHAR(160) NOT NULL DEFAULT '',
    city VARCHAR(120) NOT NULL DEFAULT '',
    source VARCHAR(40) NOT NULL DEFAULT 'manual',
    is_locked BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS match_results (
    match_id VARCHAR(80) PRIMARY KEY,
    home_score INTEGER NOT NULL CHECK (home_score >= 0),
    away_score INTEGER NOT NULL CHECK (away_score >= 0),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_match_results_match
        FOREIGN KEY (match_id)
        REFERENCES matches (match_id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS participant_predictions (
    participant_id VARCHAR(80) NOT NULL,
    match_id VARCHAR(80) NOT NULL,
    home_score INTEGER NOT NULL CHECK (home_score >= 0),
    away_score INTEGER NOT NULL CHECK (away_score >= 0),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (participant_id, match_id),
    CONSTRAINT fk_predictions_participant
        FOREIGN KEY (participant_id)
        REFERENCES participants (participant_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_predictions_match
        FOREIGN KEY (match_id)
        REFERENCES matches (match_id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS manual_goal_scorers (
    scorer_key VARCHAR(160) PRIMARY KEY,
    scorer_name VARCHAR(160) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS match_goal_scorers (
    match_id VARCHAR(80) NOT NULL,
    scorer_key VARCHAR(160) NOT NULL,
    scorer_name VARCHAR(160) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (match_id, scorer_key),
    CONSTRAINT fk_match_goal_scorers_match
        FOREIGN KEY (match_id)
        REFERENCES matches (match_id)
        ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_matches_kickoff_at
    ON matches (kickoff_at);

CREATE INDEX IF NOT EXISTS idx_matches_stage
    ON matches (stage);

CREATE INDEX IF NOT EXISTS idx_matches_group_code
    ON matches (group_code);

CREATE INDEX IF NOT EXISTS idx_predictions_match
    ON participant_predictions (match_id);

CREATE INDEX IF NOT EXISTS idx_predictions_participant
    ON participant_predictions (participant_id);

CREATE INDEX IF NOT EXISTS idx_match_goal_scorers_match
    ON match_goal_scorers (match_id);

CREATE INDEX IF NOT EXISTS idx_participants_name
    ON participants (participant_name);

CREATE VIEW IF NOT EXISTS vw_tournament_goal_scorers AS
SELECT DISTINCT
    scorer_key,
    scorer_name
FROM manual_goal_scorers

UNION

SELECT DISTINCT
    scorer_key,
    scorer_name
FROM match_goal_scorers;

CREATE VIEW IF NOT EXISTS vw_participant_leaderboard AS
WITH settings AS (
    SELECT
        exact_points,
        outcome_points,
        player_goal_bonus_points,
        favorite_team_win_points,
        favorite_team_draw_points,
        favorite_team_loss_points
    FROM app_settings
    WHERE settings_id = 1
),
match_points AS (
    SELECT
        p.participant_id,
        p.participant_name,
        SUM(
            CASE
                WHEN pr.match_id IS NULL OR mr.match_id IS NULL THEN 0
                WHEN pr.home_score = mr.home_score AND pr.away_score = mr.away_score THEN s.exact_points
                WHEN (
                    CASE
                        WHEN pr.home_score > pr.away_score THEN 1
                        WHEN pr.home_score < pr.away_score THEN -1
                        ELSE 0
                    END
                ) = (
                    CASE
                        WHEN mr.home_score > mr.away_score THEN 1
                        WHEN mr.home_score < mr.away_score THEN -1
                        ELSE 0
                    END
                ) THEN s.outcome_points
                ELSE 0
            END
        ) AS base_points,
        SUM(
            CASE
                WHEN pr.match_id IS NOT NULL
                    AND mr.match_id IS NOT NULL
                    AND pr.home_score = mr.home_score
                    AND pr.away_score = mr.away_score
                THEN 1
                ELSE 0
            END
        ) AS exact_hits,
        SUM(
            CASE
                WHEN pr.match_id IS NOT NULL
                    AND mr.match_id IS NOT NULL
                    AND NOT (pr.home_score = mr.home_score AND pr.away_score = mr.away_score)
                    AND (
                        CASE
                            WHEN pr.home_score > pr.away_score THEN 1
                            WHEN pr.home_score < pr.away_score THEN -1
                            ELSE 0
                        END
                    ) = (
                        CASE
                            WHEN mr.home_score > mr.away_score THEN 1
                            WHEN mr.home_score < mr.away_score THEN -1
                            ELSE 0
                        END
                    )
                THEN 1
                ELSE 0
            END
        ) AS outcome_hits
    FROM participants p
    CROSS JOIN settings s
    LEFT JOIN participant_predictions pr
        ON pr.participant_id = p.participant_id
    LEFT JOIN match_results mr
        ON mr.match_id = pr.match_id
    GROUP BY
        p.participant_id,
        p.participant_name
),
player_bonus AS (
    SELECT
        p.participant_id,
        CASE
            WHEN p.top_scorer_pick_key <> ''
                AND EXISTS (
                    SELECT 1
                    FROM vw_tournament_goal_scorers gs
                    WHERE gs.scorer_key = p.top_scorer_pick_key
                )
            THEN s.player_goal_bonus_points
            ELSE 0
        END AS player_goal_points
    FROM participants p
    CROSS JOIN settings s
),
favorite_team_bonus AS (
    SELECT
        p.participant_id,
        COALESCE(
            SUM(
                CASE
                    WHEN p.favorite_team = '' OR mr.match_id IS NULL THEN 0
                    WHEN p.favorite_team = m.home_team AND mr.home_score > mr.away_score THEN s.favorite_team_win_points
                    WHEN p.favorite_team = m.away_team AND mr.away_score > mr.home_score THEN s.favorite_team_win_points
                    WHEN (p.favorite_team = m.home_team OR p.favorite_team = m.away_team) AND mr.home_score = mr.away_score THEN s.favorite_team_draw_points
                    WHEN p.favorite_team = m.home_team AND mr.home_score < mr.away_score THEN s.favorite_team_loss_points
                    WHEN p.favorite_team = m.away_team AND mr.away_score < mr.home_score THEN s.favorite_team_loss_points
                    ELSE 0
                END
            ),
            0
        ) AS favorite_team_points
    FROM participants p
    CROSS JOIN settings s
    LEFT JOIN matches m
        ON p.favorite_team <> ''
        AND (m.home_team = p.favorite_team OR m.away_team = p.favorite_team)
    LEFT JOIN match_results mr
        ON mr.match_id = m.match_id
    GROUP BY p.participant_id
)
SELECT
    p.participant_id,
    p.participant_name,
    p.champion_pick,
    p.top_scorer_pick,
    p.favorite_team,
    COALESCE(mp.exact_hits, 0) AS exact_hits,
    COALESCE(mp.outcome_hits, 0) AS outcome_hits,
    COALESCE(pb.player_goal_points, 0) AS player_goal_points,
    COALESCE(ftb.favorite_team_points, 0) AS favorite_team_points,
    COALESCE(mp.base_points, 0)
        + COALESCE(pb.player_goal_points, 0)
        + COALESCE(ftb.favorite_team_points, 0) AS total_points
FROM participants p
LEFT JOIN match_points mp
    ON mp.participant_id = p.participant_id
LEFT JOIN player_bonus pb
    ON pb.participant_id = p.participant_id
LEFT JOIN favorite_team_bonus ftb
    ON ftb.participant_id = p.participant_id;

-- Ejemplos rapidos de uso:
--
-- 1) Ver ranking:
-- SELECT *
-- FROM vw_participant_leaderboard
-- ORDER BY total_points DESC, exact_hits DESC, outcome_hits DESC, participant_name ASC;
--
-- 2) Ver goleadores cargados:
-- SELECT *
-- FROM vw_tournament_goal_scorers
-- ORDER BY scorer_name;
