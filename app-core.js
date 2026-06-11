const STORAGE_KEY = "polla-mundialista-pro-v2";
const ADMIN_SESSION_KEY = "polla-admin-session-v1";
const PARTICIPANT_SESSION_KEY = "polla-participant-session-v1";
const FLASH_NOTICE_KEY = "polla-flash-notice-v1";
const PARTICIPANT_LOGIN_PAGE = "login.html";
const PARTICIPANT_DASHBOARD_PAGE = "index.html";
const FIFA_WORLD_CUP_2026_API = "https://api.fifa.com/api/v3/calendar/matches?language=en&count=200&idSeason=285023";
const FIFA_WORLD_CUP_2026_SEASON_ID = "285023";
const TEAM_FEDERATION_BADGE_MAP = {
    "algeria": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68f9faab052a5af5d7d12e4f_algeria-national-team-footballlogos-org.svg",
    "argentina": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68f9fb335c66a0b1cc03f3e8_argentina-national-team-footballlogos-org.svg",
    "australia": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/69384c87a2e8b2310953f4c3_australia-national-team-footylogos.svg",
    "austria": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68f9fc172630205d3271b9f1_austria-national-team-footballlogos-org.svg",
    "belgium": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68f9fc4c61f58c56e73196cd_belgium-national-team-footballlogos-org.svg",
    "bosnia herzegovina": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fd1a0bb96a229b28eff9ca_bosnia-and-herzegovina-footballlogos-org.svg",
    "bosnia and herzegovina": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fd1a0bb96a229b28eff9ca_bosnia-and-herzegovina-footballlogos-org.svg",
    "brazil": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68f9fc7c8423bad7419ab2d0_brazil-national-team-footballlogos-org.svg",
    "cabo verde": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fd1a816e27f50c145ad13b_cabo-verde-footballlogos-org.svg",
    "cape verde": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fd1a816e27f50c145ad13b_cabo-verde-footballlogos-org.svg",
    "canada": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68f9fcbaf28db9103710fab0_canada-national-team-footballlogos-org.svg",
    "colombia": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68f9fd84ab47946a360b482d_colombia-national-team-footballlogos-org.svg",
    "congo dr": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fd1b5eda26ecde0ae4f1eb_dr-congo-footballlogos-org.svg",
    "dr congo": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fd1b5eda26ecde0ae4f1eb_dr-congo-footballlogos-org.svg",
    "croatia": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68f9fe732030ba1891c2c1e7_croatia-national-team-footballlogos-org.svg",
    "curacao": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/690b5883681603810ed80109_curacao-national-team-footballlogos-org.svg",
    "czechia": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68f9ff02b20e5dc6637d7f2a_czechia-national-team-footballlogos-org.svg",
    "cote d ivoire": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68f9fe1707bb48fc33bb3614_cote-d-ivoire-national-team-footballlogos-org.svg",
    "ivory coast": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68f9fe1707bb48fc33bb3614_cote-d-ivoire-national-team-footballlogos-org.svg",
    "ecuador": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68f9ffc20403a59958f27cbb_ecuador-national-team-footballlogos-org.svg",
    "egypt": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa0009125d5bd39ba3bcd4_egypt-national-team-footballlogos-org.svg",
    "england": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa005b9bad274585f93e78_england-national-team-footballlogos-org.svg",
    "france": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa00bbe4ee34955b5e96e8_france-national-team-footballlogos-org.svg",
    "germany": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa00f7b20e5dc6637e1e2f_germany-national-team-footballlogos-org.svg",
    "ghana": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fd1c4258458969f9581ab8_ghana-footballlogos-org.svg",
    "haiti": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/692869d6e4cee31ebe77ffbd_haiti-national-team-footylogos.svg",
    "ir iran": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa01e42b1770e357d0108b_iran-national-team-footballlogos-org.svg",
    "iran": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa01e42b1770e357d0108b_iran-national-team-footballlogos-org.svg",
    "iraq": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fd1cef5e7819ffaaa18f6e_iraq-footballlogos-org.svg",
    "japan": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa02c7a554a59bedba28a6_japan-national-team-footballlogos-org.svg",
    "jordan": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fd1d598c15e0a1f2e4e004_jordan-footballlogos-org.svg",
    "korea republic": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa085d3ea4e2beff62ebb8_south-korea-national-team-footballlogos-org.svg",
    "south korea": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa085d3ea4e2beff62ebb8_south-korea-national-team-footballlogos-org.svg",
    "republic of korea": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa085d3ea4e2beff62ebb8_south-korea-national-team-footballlogos-org.svg",
    "mexico": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa02f6a8c72b845df64b62_mexico-national-team-footballlogos-org.svg",
    "morocco": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa032a2946e555b67a3f74_morocco-national-team-footballlogos-org.svg",
    "netherlands": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68f9ff9484d7ebc8addd9e0f_netherlands-dutch-national-team-footballlogos-org.svg",
    "new zealand": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa67d7830d6d39f82b4b19_new-zealand-national-team-footballlogos-org.svg",
    "norway": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa03b401a24ac6badeaa5c_norway-national-team-footballlogos-org.svg",
    "panama": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa03e45d0722bd9f321589_panama-national-team-footballlogos-org.svg",
    "paraguay": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa0434063df0cd2c0188cc_paraguay-national-team-footballlogos-org.svg",
    "portugal": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa6b37c4aa77c7209a1f5d_portugal-national-team-footballlogos-org.svg",
    "qatar": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fd1f8e1cc7aebc6fcfff34_qatar-national-team-footballlogos-org.svg",
    "saudi arabia": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fd1fd05277266bdbbef843_saudi-arabia-national-team-footballlogos-org.svg",
    "scotland": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa071b95f27a61e3db966b_scotland-national-team-footballlogos-org.svg",
    "senegal": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa0762520b64d54e393e4b_senegal-national-team-footballlogos-org.svg",
    "south africa": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fd1ffc6091f2021e63886d_south-africa-national-team-footballlogos-org.svg",
    "spain": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa08a222ccfc6f4d10acf4_spain-national-team-footballlogos-org.svg",
    "sweden": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa08d8aa0ef6487c3c6517_sweden-national-team-footballlogos-org.svg",
    "switzerland": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa090b69e0ca018d05c2d6_swiss-national-team-footballlogos-org.svg",
    "tunisia": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa0943c652f72441e658c9_tunisia-national-team-footballlogos-org.svg",
    "turkiye": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa099a21b78d8fb065e2b1_turkey-national-team-footballlogos-org.svg",
    "turkey": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa099a21b78d8fb065e2b1_turkey-national-team-footballlogos-org.svg",
    "usa": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa0a6c7fcdbc3190e1e3de_usa-national-team-footballlogos-org.svg",
    "united states": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa0a6c7fcdbc3190e1e3de_usa-national-team-footballlogos-org.svg",
    "united states of america": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa0a6c7fcdbc3190e1e3de_usa-national-team-footballlogos-org.svg",
    "uruguay": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fa0a1da25a41302d191465_uruguay-national-team-footballlogos-org.svg",
    "uzbekistan": "https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68fd20969a3bb74c3cd61b01_uzbekistan-national-team-footballlogos-org.svg"
};
const PLAYER_GOAL_BONUS_POINTS = 3;
const KNOCKOUT_PHASES = [
    {
        key: "round-of-32",
        label: "Dieciseisavos de final",
        patterns: [/round\s+of\s+32/i, /last\s+32/i, /1\s*\/\s*16/i, /dieciseisavos/i]
    },
    {
        key: "round-of-16",
        label: "Octavos de final",
        patterns: [/round\s+of\s+16/i, /last\s+16/i, /1\s*\/\s*8/i, /octavos/i]
    },
    {
        key: "quarter-finals",
        label: "Cuartos de final",
        patterns: [/quarter/i, /cuartos/i]
    },
    {
        key: "semi-finals",
        label: "Semifinales",
        patterns: [/semi/i, /semifinal/i]
    },
    {
        key: "final",
        label: "Final",
        patterns: [/^final$/i, /world cup final/i, /gran final/i]
    },
    {
        key: "third-place",
        label: "Tercer puesto",
        patterns: [/third/i, /play-?off.*third/i, /bronze/i, /tercer/i]
    }
];
const PROJECTED_KNOCKOUT_MATCHES = [
    ...createProjectedKnockoutRound({
        phaseKey: "round-of-32",
        stage: "Round of 32",
        matchNumberStart: 73,
        kickoffStart: "2026-06-28T17:00:00Z",
        placeholders: [
            ["2A", "2B"],
            ["1C", "2F"],
            ["1E", "3A/B/C/D/F"],
            ["1F", "2C"],
            ["2E", "2I"],
            ["1I", "3C/D/F/G/H"],
            ["1A", "3C/E/F/H/I"],
            ["1L", "3E/H/I/J/K"],
            ["1G", "3A/E/H/I/J"],
            ["1D", "3B/E/F/I/J"],
            ["1H", "2J"],
            ["2K", "2L"],
            ["1B", "3E/F/G/I/J"],
            ["2D", "2G"],
            ["1J", "2H"],
            ["1K", "3D/E/I/J/L"]
        ]
    }),
    ...createProjectedKnockoutRound({
        phaseKey: "round-of-16",
        stage: "Round of 16",
        matchNumberStart: 89,
        kickoffStart: "2026-07-04T17:00:00Z",
        placeholders: [
            ["Ganador 73", "Ganador 75"],
            ["Ganador 74", "Ganador 77"],
            ["Ganador 76", "Ganador 78"],
            ["Ganador 79", "Ganador 80"],
            ["Ganador 83", "Ganador 84"],
            ["Ganador 81", "Ganador 82"],
            ["Ganador 86", "Ganador 88"],
            ["Ganador 85", "Ganador 87"]
        ]
    }),
    ...createProjectedKnockoutRound({
        phaseKey: "quarter-finals",
        stage: "Quarter-finals",
        matchNumberStart: 97,
        kickoffStart: "2026-07-09T19:00:00Z",
        placeholders: [
            ["Ganador 89", "Ganador 90"],
            ["Ganador 93", "Ganador 94"],
            ["Ganador 91", "Ganador 92"],
            ["Ganador 95", "Ganador 96"]
        ]
    }),
    ...createProjectedKnockoutRound({
        phaseKey: "semi-finals",
        stage: "Semi-finals",
        matchNumberStart: 101,
        kickoffStart: "2026-07-14T19:00:00Z",
        placeholders: [
            ["Ganador 97", "Ganador 98"],
            ["Ganador 99", "Ganador 100"]
        ]
    }),
    {
        id: "projected-third-place-103",
        source: "projected",
        stage: "Third-place",
        group: "",
        homeTeam: "Perdedor 101",
        awayTeam: "Perdedor 102",
        kickoff: "2026-07-18T19:00:00Z",
        statusCode: 1,
        matchNumber: 103,
        stadium: "Por definir",
        city: ""
    },
    {
        id: "projected-final-104",
        source: "projected",
        stage: "Final",
        group: "",
        homeTeam: "Ganador 101",
        awayTeam: "Ganador 102",
        kickoff: "2026-07-19T19:00:00Z",
        statusCode: 1,
        matchNumber: 104,
        stadium: "Por definir",
        city: ""
    }
];
const TEAM_FLAG_MAP = {
    "albania": "🇦🇱",
    "algeria": "🇩🇿",
    "angola": "🇦🇴",
    "argentina": "🇦🇷",
    "armenia": "🇦🇲",
    "australia": "🇦🇺",
    "austria": "🇦🇹",
    "azerbaijan": "🇦🇿",
    "bahrain": "🇧🇭",
    "belarus": "🇧🇾",
    "belgium": "🇧🇪",
    "benin": "🇧🇯",
    "bolivia": "🇧🇴",
    "bosnia herzegovina": "🇧🇦",
    "bosnia and herzegovina": "🇧🇦",
    "brazil": "🇧🇷",
    "bulgaria": "🇧🇬",
    "burkina faso": "🇧🇫",
    "cameroon": "🇨🇲",
    "canada": "🇨🇦",
    "cabo verde": "🇨🇻",
    "cape verde": "🇨🇻",
    "chile": "🇨🇱",
    "china": "🇨🇳",
    "china pr": "🇨🇳",
    "colombia": "🇨🇴",
    "congo": "🇨🇬",
    "congo dr": "🇨🇩",
    "costa rica": "🇨🇷",
    "cote d ivoire": "🇨🇮",
    "croatia": "🇭🇷",
    "curacao": "🇨🇼",
    "czech republic": "🇨🇿",
    "czechia": "🇨🇿",
    "denmark": "🇩🇰",
    "dr congo": "🇨🇩",
    "ecuador": "🇪🇨",
    "egypt": "🇪🇬",
    "el salvador": "🇸🇻",
    "england": "🏴",
    "equatorial guinea": "🇬🇶",
    "finland": "🇫🇮",
    "france": "🇫🇷",
    "gabon": "🇬🇦",
    "georgia": "🇬🇪",
    "germany": "🇩🇪",
    "ghana": "🇬🇭",
    "greece": "🇬🇷",
    "guatemala": "🇬🇹",
    "guinea": "🇬🇳",
    "guinea bissau": "🇬🇼",
    "haiti": "🇭🇹",
    "honduras": "🇭🇳",
    "hungary": "🇭🇺",
    "iceland": "🇮🇸",
    "ir iran": "🇮🇷",
    "iran": "🇮🇷",
    "iraq": "🇮🇶",
    "ireland": "🇮🇪",
    "israel": "🇮🇱",
    "italy": "🇮🇹",
    "ivory coast": "🇨🇮",
    "jamaica": "🇯🇲",
    "japan": "🇯🇵",
    "jordan": "🇯🇴",
    "kazakhstan": "🇰🇿",
    "dpr korea": "🇰🇵",
    "korea dpr": "🇰🇵",
    "korea republic": "🇰🇷",
    "kosovo": "🇽🇰",
    "mali": "🇲🇱",
    "mexico": "🇲🇽",
    "montenegro": "🇲🇪",
    "morocco": "🇲🇦",
    "netherlands": "🇳🇱",
    "new zealand": "🇳🇿",
    "nigeria": "🇳🇬",
    "north macedonia": "🇲🇰",
    "norway": "🇳🇴",
    "oman": "🇴🇲",
    "panama": "🇵🇦",
    "palestine": "🇵🇸",
    "paraguay": "🇵🇾",
    "peru": "🇵🇪",
    "poland": "🇵🇱",
    "portugal": "🇵🇹",
    "qatar": "🇶🇦",
    "republic of korea": "🇰🇷",
    "republic of ireland": "🇮🇪",
    "romania": "🇷🇴",
    "russia": "🇷🇺",
    "saudi arabia": "🇸🇦",
    "scotland": "🏴",
    "senegal": "🇸🇳",
    "serbia": "🇷🇸",
    "slovakia": "🇸🇰",
    "slovenia": "🇸🇮",
    "south africa": "🇿🇦",
    "south korea": "🇰🇷",
    "spain": "🇪🇸",
    "sudan": "🇸🇩",
    "sweden": "🇸🇪",
    "switzerland": "🇨🇭",
    "tahiti": "🇵🇫",
    "togo": "🇹🇬",
    "trinidad and tobago": "🇹🇹",
    "tunisia": "🇹🇳",
    "turkey": "🇹🇷",
    "turkiye": "🇹🇷",
    "uae": "🇦🇪",
    "uganda": "🇺🇬",
    "ukraine": "🇺🇦",
    "united arab emirates": "🇦🇪",
    "united states": "🇺🇸",
    "united states of america": "🇺🇸",
    "uruguay": "🇺🇾",
    "usa": "🇺🇸",
    "uzbekistan": "🇺🇿",
    "venezuela": "🇻🇪",
    "wales": "🏴",
    "zambia": "🇿🇲"
};
const TEAM_FLAG_CODE_OVERRIDES = {
    "england": "gb",
    "scotland": "gb",
    "wales": "gb"
};
const SERVER_STATE_ENDPOINT = "/api/state";

let state = createDefaultState();
let hasInitialized = false;
let isRedirecting = false;
let useRemoteState = false;
let remoteStateReady = false;

const uiState = {
    currentView: "participant",
    adminUnlocked: false,
    adminPage: "admin.html",
    activeParticipantId: "",
    participantUnlocked: false,
    syncingFifa: false,
    activeFixtureTab: "",
    activeGoalScorersMatchId: ""
};

const refs = {};
const CRC32_TABLE = createCrc32Table();
const appApi = {
    refs,
    getState: () => state,
    getUiState: () => uiState,
    setNotice,
    render,
    focusElement
};

function initApp() {
    if (hasInitialized) {
        return appApi;
    }

    hasInitialized = true;
    cacheElements();
    state = loadState();
    uiState.currentView = document.body.dataset.appView || "participant";
    restoreSessions();
    bindEvents();
    ensureActiveParticipant();

    if (redirectIfNeeded()) {
        isRedirecting = true;
        return appApi;
    }

    render();
    consumeFlashNotice();

    loadRemoteState().then(() => {
        if (redirectIfNeeded()) return;
        render();
        if (uiState.currentView !== "login") {
            syncFifaMatches({ silent: Boolean(state.source.lastSync) });
        }
        render();
    }).catch(() => {
        // Fallback to localStorage if server is not available
        if (uiState.currentView !== "login") {
            syncFifaMatches({ silent: Boolean(state.source.lastSync) });
        }
        render();
    });

    return appApi;
}

function initPollaPage(options = {}) {
    const api = initApp();

    if (isRedirecting) {
        return api;
    }

    applyPageEnhancements(options, api);
    return api;
}

function applyPageEnhancements(options = {}, api = appApi) {
    if (!document.body) {
        return;
    }

    const readyClass = typeof options.readyClass === "string" ? options.readyClass.trim() : "";
    const focusSelector = typeof options.focusSelector === "string" ? options.focusSelector.trim() : "";

    if (readyClass) {
        document.body.classList.add(readyClass);
    }

    if (focusSelector) {
        requestAnimationFrame(() => {
            focusElement(focusSelector);
        });
    }

    if (typeof options.onReady === "function") {
        options.onReady(api);
    }
}

function restoreSessions() {
    try {
        const adminSession = sessionStorage.getItem(ADMIN_SESSION_KEY);
        uiState.adminUnlocked = adminSession === "true";
    } catch (error) {
        uiState.adminUnlocked = false;
    }

    try {
        const participantSession = sessionStorage.getItem(PARTICIPANT_SESSION_KEY);

        if (participantSession) {
            uiState.activeParticipantId = participantSession;
            uiState.participantUnlocked = state.participants.some((participant) => participant.id === participantSession);

            if (!uiState.participantUnlocked) {
                uiState.activeParticipantId = "";
                persistParticipantSession("");
            }
        } else {
            uiState.participantUnlocked = false;
        }
    } catch (error) {
        uiState.participantUnlocked = false;
    }
}

function createDefaultState() {
    const initialParticipants = [
        ["Ivelisse", "0001"], ["Jhair", "0002"], ["Christian", "0003"],
        ["Carolina", "0004"], ["Luys", "0005"], ["Yanellys", "0006"],
        ["Davisela", "0007"], ["Janette", "0008"], ["Papo", "0009"],
        ["Danny", "0010"], ["Ingrid", "0011"], ["Ginger", "0012"],
        ["Raul", "0013"], ["Thayra", "0014"], ["Edgar", "0015"],
        ["Daniela", "0016"], ["Alvaro", "0017"], ["Agustin", "0018"],
        ["Rosemary", "0019"], ["Ricardo", "0020"], ["Ricky", "0021"],
        ["Adrian", "0022"], ["Donaldo", "0023"], ["Gloria Plata", "0024"],
        ["Paul Plata", "0405"], ["Danny Jr", "0025"], ["Joseph Plata", "0396"]
    ];

    return {
        config: {
            adminPin: "",
            exactPoints: 3,
            outcomePoints: 1
        },
        participants: initialParticipants.map(([name, pin], i) => ({
            id: `p-${i + 1}`,
            name,
            pin,
            championPick: "",
            topScorerPick: "",
            favoriteTeam: "",
            stagePicks: {
                semiFinalists: [],
                finalists: []
            },
            groupAdvancers: {},
            knockoutSelections: {}
        })),
        matches: [],
        predictions: {},
        results: {},
        goalScorers: [],
        matchScorers: {},
        lockedMatches: {},
        source: {
            provider: "fifa-api-world-cup-2026",
            seasonId: FIFA_WORLD_CUP_2026_SEASON_ID,
            endpoint: FIFA_WORLD_CUP_2026_API,
            lastSync: "",
            syncError: ""
        }
    };
}

function normalizeState(parsed, fallback = createDefaultState()) {
    return {
        config: {
            adminPin: typeof parsed?.config?.adminPin === "string" ? parsed.config.adminPin : fallback.config.adminPin,
            exactPoints: toNonNegativeInt(parsed?.config?.exactPoints, fallback.config.exactPoints),
            outcomePoints: toNonNegativeInt(parsed?.config?.outcomePoints, fallback.config.outcomePoints)
        },
        participants: (Array.isArray(parsed?.participants) && parsed.participants.length > 0)
            ? parsed.participants.map(normalizeParticipant).filter(Boolean)
            : fallback.participants,
        matches: ensureProjectedKnockoutMatches(Array.isArray(parsed?.matches)
            ? parsed.matches.map(normalizeMatch).filter(Boolean)
            : fallback.matches),
        predictions: isPlainObject(parsed?.predictions) ? parsed.predictions : {},
        results: isPlainObject(parsed?.results) ? parsed.results : {},
        goalScorers: Array.isArray(parsed?.goalScorers)
            ? normalizeGoalScorers(parsed.goalScorers)
            : fallback.goalScorers,
        matchScorers: normalizeMatchScorers(parsed?.matchScorers),
        lockedMatches: isPlainObject(parsed?.lockedMatches) ? parsed.lockedMatches : {},
        source: {
            provider: typeof parsed?.source?.provider === "string" ? parsed.source.provider : fallback.source.provider,
            seasonId: typeof parsed?.source?.seasonId === "string" ? parsed.source.seasonId : fallback.source.seasonId,
            endpoint: typeof parsed?.source?.endpoint === "string" ? parsed.source.endpoint : fallback.source.endpoint,
            lastSync: typeof parsed?.source?.lastSync === "string" ? parsed.source.lastSync : fallback.source.lastSync,
            syncError: typeof parsed?.source?.syncError === "string" ? parsed.source.syncError : fallback.source.syncError
        }
    };
}

function loadState() {
    const fallback = createDefaultState();

    try {
        const raw = localStorage.getItem(STORAGE_KEY);

        if (!raw) {
            return fallback;
        }

        const parsed = JSON.parse(raw);
        return normalizeState(parsed, fallback);
    } catch (error) {
        return fallback;
    }
}

async function loadRemoteState() {
    if (typeof fetch !== "function") {
        return Promise.resolve();
    }

    try {
        const response = await fetch(SERVER_STATE_ENDPOINT, {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        });

        if (!response.ok) {
            setNotice("Servidor detectado pero respondió con error.", "warning");
            throw new Error("Remote state unavailable");
        }

        const parsed = await response.json();
        const normalizedState = normalizeState(parsed, state);
        console.log("Conectado al servidor Python correctamente");

        // Decide whether to replace local state with remote state.
        // If the remote state contains participants, prefer it.
        // If remote is empty but local already has participants, keep local to avoid
        // accidentally wiping data when the server holds the default state.
        const remoteHasParticipants = Array.isArray(parsed?.participants) && parsed.participants.length > 0;
        const remoteHasPin = Boolean(parsed?.config?.adminPin);
        const localHasParticipants = Array.isArray(state?.participants) && state.participants.length > 0;
        const localHasPin = Boolean(state?.config?.adminPin);

        const remoteHasData = remoteHasParticipants || remoteHasPin;

        // Si el servidor tiene participantes, SIEMPRE los preferimos sobre lo que tenga el navegador
        // Si el servidor NO tiene participantes pero el navegador SÍ, subimos los locales.
        const shouldPushLocal = localHasParticipants && !remoteHasParticipants;
        
        // Solo reemplazamos el estado local si el remoto realmente tiene participantes
        // o si localmente no tenemos nada pero el remoto ya tiene el PIN configurado.
        const remoteIsBetter = remoteHasParticipants || (remoteHasPin && state.participants.length === 0);

        // Preserve active participant session
        const activeParticipantId = uiState.activeParticipantId;
        const adminUnlocked = uiState.adminUnlocked;
        const participantUnlocked = uiState.participantUnlocked;

        useRemoteState = true; 

        if (remoteIsBetter) {
            state = normalizedState;
            persistStateLocally();
        } else if (shouldPushLocal) {
            // Protegemos los datos locales subiéndolos al servidor vacío
            await saveRemoteState();
        }

        // Restore the sessions after possibly loading remote state
        uiState.activeParticipantId = activeParticipantId;
        uiState.adminUnlocked = adminUnlocked;
        uiState.participantUnlocked = participantUnlocked && state.participants.some((participant) => participant.id === activeParticipantId);

        return Promise.resolve();
    } catch (error) {
        // Keep local state if server is not available.
        console.warn("No se pudo conectar con el servidor. Usando modo offline.");
        setNotice("Modo Offline: Los cambios no se guardarán en la base de datos central.", "warning");
        return Promise.resolve();
    }
}

async function saveRemoteState(message, type = "success") {
    if (!useRemoteState) {
        return false;
    }

    try {
        const response = await fetch(SERVER_STATE_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(state)
        });

        if (!response.ok) {
            throw new Error("Could not save remote state");
        }

        // Eliminamos la actualización del estado desde la respuesta para evitar 
        // que peticiones lentas sobrescriban cambios locales nuevos (race conditions).
        // El estado local ya es el correcto antes de enviar.

        if (message) {
            setNotice(message, type);
        }

        return true;
    } catch (error) {
        if (message) {
            setNotice(message, type);
        }
        useRemoteState = false;
        return false;
    }
}

function normalizeParticipant(participant) {
    if (!participant) {
        return null;
    }

    const name = String(participant.name || "").trim();
    const pin = String(participant.pin || "");

    if (!name || !pin) {
        return null;
    }

    return {
        id: String(participant.id || createId("participant")),
        name,
        pin,
        championPick: String(participant.championPick || "").trim(),
        topScorerPick: String(participant.topScorerPick || "").trim(),
        favoriteTeam: String(participant.favoriteTeam || "").trim(),
        stagePicks: normalizeStagePicks(participant.stagePicks),
        groupAdvancers: normalizeGroupAdvancers(participant.groupAdvancers),
        knockoutSelections: normalizeKnockoutSelections(participant.knockoutSelections)
    };
}

function normalizeStagePicks(stagePicks) {
    if (!isPlainObject(stagePicks)) {
        return {
            semiFinalists: [],
            finalists: []
        };
    }

    return {
        semiFinalists: normalizeTeamPickList(stagePicks.semiFinalists, 4),
        finalists: normalizeTeamPickList(stagePicks.finalists, 2)
    };
}

function normalizeTeamPickList(values, limit) {
    if (!Array.isArray(values)) {
        return [];
    }

    const used = new Set();
    const picks = [];

    for (const value of values) {
        const normalized = String(value || "").trim();

        if (!normalized || used.has(normalized)) {
            continue;
        }

        used.add(normalized);
        picks.push(normalized);

        if (picks.length >= limit) {
            break;
        }
    }

    return picks;
}

function normalizeGroupAdvancers(groupAdvancers) {
    const normalized = {};

    if (!isPlainObject(groupAdvancers)) {
        return normalized;
    }

    for (const [groupKey, picks] of Object.entries(groupAdvancers)) {
        const normalizedGroupKey = normalizeGroupPickKey(groupKey);

        if (!normalizedGroupKey || !isPlainObject(picks)) {
            continue;
        }

        const first = String(picks.first || "").trim();
        const second = String(picks.second || "").trim();
        const third = String(picks.third || "").trim();

        if (first || second || third) {
            normalized[normalizedGroupKey] = { first, second, third };
        }
    }

    return normalized;
}

function normalizeKnockoutSelections(knockoutSelections) {
    const normalized = {};

    if (!isPlainObject(knockoutSelections)) {
        return normalized;
    }

    for (const [matchId, picks] of Object.entries(knockoutSelections)) {
        if (!matchId || !isPlainObject(picks)) {
            continue;
        }

        const homeTeam = String(picks.homeTeam || "").trim();
        const awayTeam = String(picks.awayTeam || "").trim();

        if (homeTeam || awayTeam) {
            normalized[matchId] = { homeTeam, awayTeam };
        }
    }

    return normalized;
}

function normalizeMatch(match) {
    if (!match) {
        return null;
    }

    const stage = String(match.stage || "").trim();
    const homeTeam = String(match.homeTeam || "").trim();
    const awayTeam = String(match.awayTeam || "").trim();

    if (!stage || !homeTeam || !awayTeam) {
        return null;
    }

    return {
        id: String(match.id || createId("match")),
        stage,
        homeTeam,
        awayTeam,
        kickoff: String(match.kickoff || ""),
        group: String(match.group || ""),
        statusCode: toNonNegativeInt(match.statusCode, 1),
        matchNumber: toNonNegativeInt(match.matchNumber, 0),
        stadium: String(match.stadium || ""),
        city: String(match.city || ""),
        source: String(match.source || "manual")
    };
}

function createProjectedKnockoutRound({ phaseKey, stage, matchNumberStart, kickoffStart, placeholders }) {
    const kickoffTime = new Date(kickoffStart).getTime();

    return placeholders.map(([homeTeam, awayTeam], index) => ({
        id: `projected-${phaseKey}-${matchNumberStart + index}`,
        source: "projected",
        stage,
        group: "",
        homeTeam,
        awayTeam,
        kickoff: new Date(kickoffTime + (index * 24 * 60 * 60 * 1000)).toISOString(),
        statusCode: 1,
        matchNumber: matchNumberStart + index,
        stadium: "Por definir",
        city: ""
    }));
}

function ensureProjectedKnockoutMatches(matches) {
    const normalizedMatches = Array.isArray(matches) ? matches.filter(Boolean) : [];
    const matchesById = new Map(normalizedMatches.map((match) => [match.id, match]));
    const phasesWithOfficialMatches = new Set(
        normalizedMatches
            .filter((match) => !isProjectedMatch(match) && !match.group)
            .map((match) => getKnockoutPhaseKey(match))
            .filter(Boolean)
    );

    for (const projectedMatch of PROJECTED_KNOCKOUT_MATCHES) {
        const phaseKey = getKnockoutPhaseKey(projectedMatch);

        if (phasesWithOfficialMatches.has(phaseKey) || matchesById.has(projectedMatch.id)) {
            continue;
        }

        matchesById.set(projectedMatch.id, { ...projectedMatch });
    }

    return [...matchesById.values()].sort(compareMatches);
}

function cacheElements() {
    refs.participantAuthGate = document.getElementById("participantAuthGate");
    refs.participantWorkspace = document.getElementById("participantWorkspace");
    refs.adminAuthGate = document.getElementById("adminAuthGate");
    refs.adminWorkspace = document.getElementById("adminWorkspace");
    refs.appNotice = document.getElementById("appNotice");
    refs.participantsCount = document.getElementById("participantsCount");
    refs.matchesCount = document.getElementById("matchesCount");
    refs.predictionsCount = document.getElementById("predictionsCount");
    refs.resultsCount = document.getElementById("resultsCount");
    refs.participantRankValue = document.getElementById("participantRankValue");

    refs.adminAccessForm = document.getElementById("adminAccessForm");
    refs.adminPinInput = document.getElementById("adminPinInput");
    refs.adminAccessButton = document.getElementById("adminAccessButton");
    refs.adminLogoutButton = document.getElementById("adminLogoutButton");
    refs.resetAdminPinButton = document.getElementById("resetAdminPinButton");
    refs.adminStatus = document.getElementById("adminStatus");
    refs.adminIdentity = document.getElementById("adminIdentity");
    refs.saveAllDataButton = document.getElementById("saveAllDataButton");
    refs.scoringForm = document.getElementById("scoringForm");
    refs.exactPointsInput = document.getElementById("exactPointsInput");
    refs.outcomePointsInput = document.getElementById("outcomePointsInput");
    refs.syncFifaButton = document.getElementById("syncFifaButton");
    refs.syncStatus = document.getElementById("syncStatus");
    refs.goalScorersForm = document.getElementById("goalScorersForm");
    refs.goalScorersInput = document.getElementById("goalScorersInput");
    refs.goalScorersButton = document.getElementById("goalScorersButton");
    refs.goalScorersStatus = document.getElementById("goalScorersStatus");
    refs.matchGoalScorersForm = document.getElementById("matchGoalScorersForm");
    refs.goalScorersMatchSelect = document.getElementById("goalScorersMatchSelect");
    refs.matchGoalScorersInput = document.getElementById("matchGoalScorersInput");
    refs.matchGoalScorersButton = document.getElementById("matchGoalScorersButton");
    refs.matchGoalScorersStatus = document.getElementById("matchGoalScorersStatus");

    refs.participantForm = document.getElementById("participantForm");
    refs.participantNameInput = document.getElementById("participantNameInput");
    refs.participantPinCreateInput = document.getElementById("participantPinCreateInput");
    refs.participantAccessForm = document.getElementById("participantAccessForm");
    refs.participantLoginSelect = document.getElementById("participantLoginSelect");
    refs.participantPinInput = document.getElementById("participantPinInput");
    refs.participantUnlockButton = document.getElementById("participantUnlockButton");
    refs.participantLogoutButton = document.getElementById("participantLogoutButton");
    refs.participantStatus = document.getElementById("participantStatus");
    refs.participantIdentity = document.getElementById("participantIdentity");
    refs.specialPredictionsForm = document.getElementById("specialPredictionsForm");
    refs.championPickSelect = document.getElementById("championPickSelect");
    refs.topScorerPickInput = document.getElementById("topScorerPickInput");
    refs.favoriteTeamSelect = document.getElementById("favoriteTeamSelect");
    refs.stagePicksGrid = document.getElementById("stagePicksGrid");
    refs.groupAdvancersGrid = document.getElementById("groupAdvancersGrid");
    refs.specialPredictionsButton = document.getElementById("specialPredictionsButton");
    refs.specialPredictionsStatus = document.getElementById("specialPredictionsStatus");
    refs.participantsTableBody = document.getElementById("participantsTableBody");
    refs.specialPredictionsTableBody = document.getElementById("specialPredictionsTableBody");

    refs.matchesTableBody = document.getElementById("matchesTableBody");
    refs.matchesTabs = document.getElementById("matchesTabs");
    refs.savePredictionsButton = document.getElementById("savePredictionsButton");
    refs.matchesTabSummary = document.getElementById("matchesTabSummary");
    refs.groupsGrid = document.getElementById("groupsGrid");
    refs.knockoutGrid = document.getElementById("knockoutGrid");
    refs.predictionReviewParticipantSelect = document.getElementById("predictionReviewParticipantSelect");
    refs.predictionReviewStatus = document.getElementById("predictionReviewStatus");
    refs.predictionReviewTableBody = document.getElementById("predictionReviewTableBody");
    refs.generalPoolMatchSelect = document.getElementById("generalPoolMatchSelect");
    refs.generalPoolStatus = document.getElementById("generalPoolStatus");
    refs.generalPoolTableBody = document.getElementById("generalPoolTableBody");

    refs.leaderboardTableBody = document.getElementById("leaderboardTableBody");
    refs.leaderboardExportButton = document.getElementById("leaderboardExportButton");
    refs.backupButton = document.getElementById("backupButton");
}

function bindEvents() {
    refs.adminAccessForm?.addEventListener("submit", handleAdminAccess);
    refs.adminLogoutButton?.addEventListener("click", lockAdmin);
    refs.resetAdminPinButton?.addEventListener("click", handleResetAdminPin);
    refs.scoringForm?.addEventListener("submit", handleScoringSave);
    refs.goalScorersForm?.addEventListener("submit", handleGoalScorersSave);
    refs.matchGoalScorersForm?.addEventListener("submit", handleMatchGoalScorersSave);
    refs.goalScorersMatchSelect?.addEventListener("change", handleGoalScorersMatchSelectChange);

    refs.participantForm?.addEventListener("submit", handleParticipantAdd);
    refs.participantAccessForm?.addEventListener("submit", handleParticipantAccess);
    refs.specialPredictionsForm?.addEventListener("submit", handleSpecialPredictionsSave);
    refs.participantLogoutButton?.addEventListener("click", lockParticipant);
    refs.participantsTableBody?.addEventListener("click", handleParticipantTableClick);
    refs.savePredictionsButton?.addEventListener("click", handleSavePredictions);

    refs.groupAdvancersGrid?.addEventListener("change", handleGroupAdvancersPreviewChange);
    refs.matchesTableBody?.addEventListener("change", handleMatchesTableChange);
    refs.matchesTableBody?.addEventListener("click", handleMatchesTableClick);
    refs.matchesTabs?.addEventListener("click", handleFixtureTabClick);
    refs.knockoutGrid?.addEventListener("click", handleMatchesTableClick);
    refs.knockoutGrid?.addEventListener("change", handleKnockoutTeamSelectionChange);
    refs.knockoutGrid?.addEventListener("input", handleKnockoutPredictionInput);
    refs.knockoutGrid?.addEventListener("change", handleMatchesTableChange);
    refs.predictionReviewParticipantSelect?.addEventListener("change", renderPredictionReviewTable);
    refs.generalPoolMatchSelect?.addEventListener("change", renderGeneralPoolTable);
    refs.syncFifaButton?.addEventListener("click", () => {
        syncFifaMatches();
    });

    refs.backupButton?.addEventListener("click", handleBackupDownload);
    refs.leaderboardExportButton?.addEventListener("click", handleLeaderboardExport);
    refs.saveAllDataButton?.addEventListener("click", handleSaveAllData);
}

function render() {
    if (redirectIfNeeded()) return;
    ensureActiveParticipant();
    renderAccessState();
    if (uiState.currentView.startsWith("admin") || refs.adminAccessForm || refs.scoringForm || refs.syncFifaButton) {
        renderAdmin();
    }

    if (refs.syncStatus && !refs.adminAccessForm) {
        renderSourceStatus();
    }

    if (refs.participantAccessForm || refs.participantForm || refs.participantsTableBody || refs.participantIdentity || refs.specialPredictionsForm || refs.specialPredictionsTableBody) {
        renderParticipants();
    }

    if (refs.matchesTableBody) {
        renderMatches();
    }

    if (refs.groupsGrid) {
        renderGroups();
    }

    if (refs.knockoutGrid) {
        renderKnockoutPhases();
    }

    if (refs.leaderboardTableBody) {
        renderLeaderboard();
    }

    if (refs.predictionReviewTableBody || refs.generalPoolTableBody) {
        renderAdminPredictionTables();
    }

    if (refs.participantsCount) {
        renderSummary();
    }
}

function renderAccessState() {
    if (refs.participantAuthGate) {
        refs.participantAuthGate.classList.toggle("is-hidden", uiState.participantUnlocked);
    }

    if (refs.participantWorkspace) {
        refs.participantWorkspace.classList.toggle("is-hidden", !uiState.participantUnlocked);
    }

    if (refs.adminAuthGate) {
        refs.adminAuthGate.classList.toggle("is-hidden", uiState.adminUnlocked);
    }

    if (refs.adminWorkspace) {
        refs.adminWorkspace.classList.toggle("is-hidden", !uiState.adminUnlocked);
    }
}

function renderAdmin() {
    if (!refs.adminAccessButton) {
        return;
    }

    refs.adminAccessButton.textContent = state.config.adminPin ? "Entrar" : "Crear clave";
    refs.adminAccessButton.disabled = false;
    if (refs.syncFifaButton) {
        refs.syncFifaButton.disabled = uiState.syncingFifa;
        refs.syncFifaButton.textContent = uiState.syncingFifa ? "Sincronizando..." : "Sincronizar FIFA 2026";
    }
    if (refs.syncStatus) {
        renderSourceStatus();
    }

    if (refs.exactPointsInput) {
        refs.exactPointsInput.value = state.config.exactPoints;
    }

    if (refs.outcomePointsInput) {
        refs.outcomePointsInput.value = state.config.outcomePoints;
    }

    if (refs.scoringForm) {
        for (const field of refs.scoringForm.querySelectorAll("input, button")) {
            field.disabled = !uiState.adminUnlocked;
        }
    }

    renderGoalScorersManager();

    if (refs.participantForm) {
        for (const field of refs.participantForm.querySelectorAll("input, button")) {
            field.disabled = !uiState.adminUnlocked;
        }
    }

    if (refs.backupButton) {
        refs.backupButton.disabled = !uiState.adminUnlocked;
    }

    if (refs.saveAllDataButton && uiState.currentView === "admin") {
        refs.saveAllDataButton.disabled = !uiState.adminUnlocked;
    }

    if (refs.adminLogoutButton) {
        refs.adminLogoutButton.disabled = !uiState.adminUnlocked;
    }

    if (refs.resetAdminPinButton) {
        refs.resetAdminPinButton.disabled = !uiState.adminUnlocked;
    }

    if (refs.adminIdentity) {
        refs.adminIdentity.textContent = uiState.adminUnlocked ? "Administrador autenticado" : "Administrador bloqueado";
    }

    if (uiState.adminUnlocked) {
        refs.adminStatus.textContent = "Login correcto. El panel admin esta desbloqueado.";
        return;
    }

    if (state.config.adminPin) {
        refs.adminStatus.textContent = "Ingresa la clave admin para acceder al panel.";
        return;
    }

    refs.adminStatus.textContent = "Crea la primera clave admin para proteger el panel.";
}

function renderSourceStatus() {
    if (!refs.syncStatus) {
        return;
    }

    refs.syncStatus.textContent = formatSyncStatus();
}

function renderGoalScorersManager() {
    renderManualGoalScorersForm();
    renderMatchGoalScorersForm();
}

function renderManualGoalScorersForm() {
    const tournamentGoalScorers = getTournamentGoalScorers();
    const matchesWithScorers = Object.values(state.matchScorers).filter((scorers) => Array.isArray(scorers) && scorers.length > 0).length;

    if (refs.goalScorersInput) {
        refs.goalScorersInput.value = state.goalScorers.join("\n");
        refs.goalScorersInput.disabled = !uiState.adminUnlocked;
    }

    if (refs.goalScorersButton) {
        refs.goalScorersButton.disabled = !uiState.adminUnlocked;
    }

    if (refs.goalScorersStatus) {
        refs.goalScorersStatus.textContent = tournamentGoalScorers.length
            ? `${tournamentGoalScorers.length} goles cargados: ${state.goalScorers.length} manuales y ${matchesWithScorers} partidos detallados.`
            : `Carga aqui goleadores confirmados para activar el bonus de ${PLAYER_GOAL_BONUS_POINTS} puntos.`;
    }
}

function renderMatchGoalScorersForm() {
    const completedMatches = getCompletedMatchesForGoalScorers();
    ensureActiveGoalScorersMatch(completedMatches);
    const activeMatch = completedMatches.find((match) => match.id === uiState.activeGoalScorersMatchId) || null;
    const matchScorers = activeMatch ? (state.matchScorers[activeMatch.id] || []) : [];

    if (refs.goalScorersMatchSelect) {
        refs.goalScorersMatchSelect.innerHTML = completedMatches.length
            ? completedMatches.map((match) => `<option value="${match.id}">${escapeHtml(formatGoalScorersMatchOption(match))}</option>`).join("")
            : '<option value="">No hay partidos con resultado oficial</option>';
        refs.goalScorersMatchSelect.disabled = !uiState.adminUnlocked || !completedMatches.length;
        refs.goalScorersMatchSelect.value = activeMatch?.id || "";
    }

    if (refs.matchGoalScorersInput) {
        refs.matchGoalScorersInput.value = matchScorers.join("\n");
        refs.matchGoalScorersInput.disabled = !uiState.adminUnlocked || !activeMatch;
    }

    if (refs.matchGoalScorersButton) {
        refs.matchGoalScorersButton.disabled = !uiState.adminUnlocked || !activeMatch;
    }

    if (refs.matchGoalScorersStatus) {
        if (!completedMatches.length) {
            refs.matchGoalScorersStatus.textContent = "Primero sincroniza resultados oficiales para cargar goleadores por partido.";
        } else if (!activeMatch) {
            refs.matchGoalScorersStatus.textContent = "Selecciona un partido con resultado oficial.";
        } else if (matchScorers.length) {
            refs.matchGoalScorersStatus.textContent = `${formatGoalScorersMatchLabel(activeMatch)}. ${matchScorers.length} anotaciones cargadas para este partido.`;
        } else {
            refs.matchGoalScorersStatus.textContent = `${formatGoalScorersMatchLabel(activeMatch)}. Todavia no cargaste goleadores para este partido.`;
        }
    }
}

function getCompletedMatchesForGoalScorers() {
    return state.matches
        .filter((match) => isCompleteScore(getScore(state.results[match.id])))
        .sort(compareMatches);
}

function ensureActiveGoalScorersMatch(matches) {
    const exists = matches.some((match) => match.id === uiState.activeGoalScorersMatchId);

    if (exists) {
        return;
    }

    uiState.activeGoalScorersMatchId = matches[0]?.id || "";
}

function formatGoalScorersMatchOption(match) {
    const scorersCount = state.matchScorers[match.id]?.length || 0;
    const scorersLabel = scorersCount ? ` | ${scorersCount} jugador${scorersCount === 1 ? "" : "es"}` : "";
    return `${formatGoalScorersMatchLabel(match)} | ${formatKickoff(match.kickoff)}${scorersLabel}`;
}

function formatGoalScorersMatchLabel(match) {
    const officialResult = getScore(state.results[match.id]);
    return `${match.homeTeam} ${formatScoreValue(officialResult.home)}-${formatScoreValue(officialResult.away)} ${match.awayTeam}`;
}

function renderParticipants() {
    const hasParticipants = state.participants.length > 0;
    const teams = getAvailableTeams();

    if (refs.participantPinInput) {
        refs.participantPinInput.disabled = !hasParticipants;
    }

    const activeParticipant = getActiveParticipant();

    // Poblar selectores asegurando que siempre tengan los datos actuales del estado
    if (refs.participantLoginSelect) {
        const currentVal = refs.participantLoginSelect.value;
        const options = state.participants.map(p => `<option value="${escapeHtml(p.name)}">${escapeHtml(p.name)}</option>`);
        refs.participantLoginSelect.innerHTML = '<option value="">Selecciona tu usuario</option>' + options.join("");
        if (currentVal) refs.participantLoginSelect.value = currentVal;
    }

    if (refs.predictionReviewParticipantSelect) {
        const currentVal = refs.predictionReviewParticipantSelect.value;
        const options = state.participants.map(p => `<option value="${p.id}">${escapeHtml(p.name)}</option>`);
        refs.predictionReviewParticipantSelect.innerHTML = '<option value="">Selecciona un participante</option>' + options.join("");
        if (currentVal) refs.predictionReviewParticipantSelect.value = currentVal;
    }

    if (refs.generalPoolMatchSelect) {
        const currentVal = refs.generalPoolMatchSelect.value;
        const options = state.matches.map(m => `<option value="${m.id}">${escapeHtml(m.homeTeam + ' vs ' + m.awayTeam)}</option>`);
        refs.generalPoolMatchSelect.innerHTML = '<option value="">Selecciona un partido</option>' + options.join("");
        if (currentVal) refs.generalPoolMatchSelect.value = currentVal;
    }

    if (refs.participantStatus) {
        if (!hasParticipants) {
            refs.participantStatus.textContent = "No hay participantes cargados. Entra al panel admin y agrega usuarios.";
        } else if (!uiState.participantUnlocked) {
            refs.participantStatus.textContent = "Selecciona tu nombre, escribe tu PIN y presiona Entrar.";
        } else {
            refs.participantStatus.textContent = `${activeParticipant ? activeParticipant.name : "Participante"} inicio sesion correctamente.`;
        }
    }

    if (refs.participantIdentity) {
        refs.participantIdentity.textContent = activeParticipant
            ? activeParticipant.name
            : "Participante autenticado";
    }

    if (refs.participantLogoutButton) {
        refs.participantLogoutButton.disabled = !uiState.participantUnlocked;
    }

    if (refs.saveAllDataButton && uiState.currentView === "participant") {
        refs.saveAllDataButton.disabled = !uiState.participantUnlocked;
    }

    renderSpecialPredictions(getActiveParticipant(), teams);

    if (!refs.participantsTableBody) {
        renderSpecialPredictionsTable();
        return;
    }

    if (!hasParticipants) {
        refs.participantsTableBody.innerHTML = '<tr><td colspan="4" class="empty-state">Todavia no hay participantes creados.</td></tr>';
        return;
    }

    const hasParticipantAccess = Boolean(refs.participantAccessForm);

    refs.participantsTableBody.innerHTML = state.participants.map((participant) => {
        const isActive = hasParticipantAccess && participant.id === uiState.activeParticipantId;
        const submitted = countCompletePredictions(participant.id);
        const totalMatches = state.matches.length;
        const badgeText = hasParticipantAccess
            ? (isActive ? (uiState.participantUnlocked ? "Activo y abierto" : "Activo") : "Listo")
            : "Registrado";
        const badgeClass = hasParticipantAccess && isActive ? "badge-active" : "badge-open";

        return `
            <tr>
                <td>${escapeHtml(participant.name)}</td>
                <td>${submitted}/${totalMatches}</td>
                <td><span class="badge ${badgeClass}">${badgeText}</span></td>
                <td>
                    <button
                        type="button"
                        class="secondary-button row-action"
                        data-action="delete-participant"
                        data-participant-id="${participant.id}"
                        ${!uiState.adminUnlocked ? "disabled" : ""}
                    >
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    }).join("");

    renderSpecialPredictionsTable();
}

function renderMatches() {
    const activeParticipant = getActiveParticipant();
    const fixtureTabs = buildFixtureTabs();

    if (!fixtureTabs.length) {
        if (refs.matchesTabs) {
            refs.matchesTabs.innerHTML = "";
        }

        if (refs.matchesTabSummary) {
            refs.matchesTabSummary.textContent = "Todavia no llegaron partidos desde FIFA.";
        }

        refs.matchesTableBody.innerHTML = '<div class="empty-state">Todavia no hay partidos cargados. El administrador debe sincronizar FIFA desde el panel admin.</div>';
        return;
    }

    ensureActiveFixtureTab(fixtureTabs);
    const activeTab = fixtureTabs.find((tab) => tab.key === uiState.activeFixtureTab) || fixtureTabs[0];

    if (refs.matchesTabs) {
        refs.matchesTabs.innerHTML = fixtureTabs.map((tab) => `
            <button
                type="button"
                class="fixture-tab ${tab.key === activeTab.key ? "active" : ""}"
                data-fixture-tab="${tab.key}"
                role="tab"
                aria-selected="${tab.key === activeTab.key ? "true" : "false"}"
            >
                <span>${escapeHtml(tab.label)}</span>
                <strong>${tab.matches.length}</strong>
            </button>
        `).join("");
    }

    if (refs.matchesTabSummary) {
        refs.matchesTabSummary.textContent = `${activeTab.label}: ${activeTab.matches.length} partido${activeTab.matches.length === 1 ? "" : "s"} cargado${activeTab.matches.length === 1 ? "" : "s"}.`;
    }

        // Poblar el selector de partidos en Admin
        if (refs.generalPoolMatchSelect) {
            const currentVal = refs.generalPoolMatchSelect.value;
            refs.generalPoolMatchSelect.innerHTML = '<option value="">Selecciona un partido</option>' + 
                state.matches.map(m => `<option value="${m.id}">${escapeHtml(m.homeTeam + ' vs ' + m.awayTeam)}</option>`).join("");
            refs.generalPoolMatchSelect.value = currentVal;
        }

    refs.matchesTableBody.innerHTML = `
        <div class="fixture-match-grid">
            ${activeTab.matches.map((match) => {
                const prediction = activeParticipant ? getScore(state.predictions[activeParticipant.id]?.[match.id]) : getScore();
                const officialResult = getScore(state.results[match.id]);
                const isClosed = isMatchLocked(match);
                const canEditPrediction = Boolean(activeParticipant && uiState.participantUnlocked && !isClosed);
                const points = activeParticipant ? getMatchPoints(prediction, officialResult) : null;
                const pointsHtml = points === null
                    ? '<span class="points-pill empty">-</span>'
                    : `<span class="points-pill">${points}</span>`;
                const officialResultHtml = isCompleteScore(officialResult)
                    ? `<span class="result-text">${officialResult.home} - ${officialResult.away}</span>`
                    : '<span class="result-text pending">Pendiente</span>';
                const venueText = formatVenueText(match);

                return `
                    <article class="fixture-match-card">
                        <div class="fixture-match-top">
                            <div class="fixture-match-meta">
                                <span class="fixture-stage">${escapeHtml(formatStage(match))}</span>
                                <span>${escapeHtml(formatKickoff(match.kickoff))}</span>
                            </div>
                            <span class="badge ${isClosed ? "badge-closed" : "badge-open"}">${escapeHtml(formatMatchStatus(match))}</span>
                        </div>

                        <div class="fixture-teams">
                            ${renderTeamLabel(match.homeTeam, "fixture-team-name")}
                            <span class="fixture-versus">vs</span>
                            ${renderTeamLabel(match.awayTeam, "fixture-team-name")}
                        </div>

                        <div class="fixture-score-board">
                            <div class="fixture-score-column">
                                <span class="fixture-score-label">Tu pronostico</span>
                                ${activeParticipant ? `
                                    <div class="inline-score">
                                        ${renderPredictionInput({
                                            matchId: match.id,
                                            side: "home",
                                            value: prediction.home,
                                            disabled: !canEditPrediction
                                        })}
                                        <span class="score-separator">-</span>
                                        ${renderPredictionInput({
                                            matchId: match.id,
                                            side: "away",
                                            value: prediction.away,
                                            disabled: !canEditPrediction
                                        })}
                                    </div>
                                ` : '<span class="mini-status">Selecciona un participante</span>'}
                            </div>
                            <div class="fixture-score-column">
                                <span class="fixture-score-label">Resultado FIFA</span>
                                ${officialResultHtml}
                            </div>
                            <div class="fixture-score-column fixture-score-column-points">
                                <span class="fixture-score-label">Puntos</span>
                                ${pointsHtml}
                            </div>
                        </div>

                        <div class="fixture-footer">
                            <span class="fixture-venue">${escapeHtml(venueText)}</span>
                            ${canEditPrediction ? `
                                <button type="button" class="secondary-button save-match-button" data-match-id="${match.id}">
                                    Guardar Pick
                                </button>
                            ` : ''}
                        </div>
                    </article>
                `;
            }).join("")}
        </div>
    `;
}

function handleFixtureTabClick(event) {
    const button = event.target.closest("button[data-fixture-tab]");

    if (!(button instanceof HTMLButtonElement)) {
        return;
    }

    uiState.activeFixtureTab = button.dataset.fixtureTab || "";
    renderMatches();
}

function buildFixtureTabs() {
    const groupsMap = new Map();
    const knockoutMatches = [];

    for (const match of [...state.matches].sort(compareMatches)) {
        if (match.group) {
            const groupKey = `group:${extractGroupLetter(match.group)}`;
            const groupLabel = formatGroupName(match.group);

            if (!groupsMap.has(groupKey)) {
                groupsMap.set(groupKey, {
                    key: groupKey,
                    label: groupLabel,
                    sortLabel: extractGroupLetter(match.group),
                    matches: []
                });
            }

            groupsMap.get(groupKey).matches.push(match);
            continue;
        }

        knockoutMatches.push(match);
    }

    const groupTabs = [...groupsMap.values()]
        .sort((left, right) => left.sortLabel.localeCompare(right.sortLabel, "en"))
        .map(({ key, label, matches }) => ({ key, label, matches }));

    if (knockoutMatches.length) {
        groupTabs.push({
            key: "knockout",
            label: "Eliminatorias",
            matches: knockoutMatches
        });
    }

    return groupTabs;
}

function ensureActiveFixtureTab(fixtureTabs) {
    const exists = fixtureTabs.some((tab) => tab.key === uiState.activeFixtureTab);

    if (!exists) {
        uiState.activeFixtureTab = fixtureTabs[0]?.key || "";
    }
}

function renderGroups() {
    if (!refs.groupsGrid) {
        return;
    }

    const groups = buildGroupTables();

    if (!groups.length) {
        refs.groupsGrid.innerHTML = '<div class="empty-state">Todavia no hay grupos oficiales disponibles desde FIFA.</div>';
        return;
    }

    refs.groupsGrid.innerHTML = groups.map((group) => `
        <article class="group-card">
            <div class="group-card-header">
                <div>
                    <h3>${escapeHtml(group.name)}</h3>
                    <span class="group-subtitle">${group.teams.length} selecciones</span>
                </div>
                <span class="badge badge-open">FIFA</span>
            </div>
            <div class="table-scroll">
                <table class="group-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Equipo</th>
                            <th>PJ</th>
                            <th>GF</th>
                            <th>GC</th>
                            <th>DG</th>
                            <th>Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${group.teams.map((team, index) => `
                            <tr>
                                <td class="group-rank">${index + 1}</td>
                                <td class="group-team-name">${renderTeamLabel(team.name)}</td>
                                <td>${team.played}</td>
                                <td>${team.goalsFor}</td>
                                <td>${team.goalsAgainst}</td>
                                <td>${team.goalDifference}</td>
                                <td class="group-points">${team.points}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `).join("");
}

function renderKnockoutPhases() {
    if (!refs.knockoutGrid) {
        return;
    }

    const phases = buildKnockoutPhases();
    const activeParticipant = isParticipantPredictionView() ? getActiveParticipant() : null;
    const displayMatchesById = activeParticipant
        ? buildParticipantKnockoutDisplayMatches(activeParticipant)
        : new Map();

    if (!phases.length) {
        refs.knockoutGrid.innerHTML = '<div class="empty-state">Las fases eliminatorias apareceran aqui cuando el fixture oficial incluya cruces directos.</div>';
        return;
    }

    refs.knockoutGrid.innerHTML = phases.map((phase) => {
        const officialMatches = phase.matches.filter((match) => !isProjectedMatch(match)).length;
        const sourceLabel = officialMatches ? "FIFA" : "Proyectado";
        const sourceBadgeClass = officialMatches ? "badge-open" : "badge-projected";
        const matchesByNumber = activeParticipant ? buildKnockoutDisplayMatchesByNumber(displayMatchesById) : new Map();

        return `
        <article class="knockout-card knockout-card-${phase.key}" data-phase="${phase.key}">
            <div class="knockout-card-header">
                <div>
                    <h3>${escapeHtml(phase.label)}</h3>
                    <span class="group-subtitle">${phase.matches.length} partido${phase.matches.length === 1 ? "" : "s"}</span>
                </div>
                <div class="knockout-card-badges">
                    <span class="badge ${sourceBadgeClass}">${sourceLabel}</span>
                    <span class="badge badge-closed">${phase.completedMatches}/${phase.matches.length}</span>
                </div>
            </div>
            <div class="knockout-match-list">
                ${phase.matches.map((match) => {
                    const displayMatch = displayMatchesById.get(match.id) || match;
                    const officialResult = getScore(state.results[match.id]);
                    const hasResult = isCompleteScore(officialResult);
                    const prediction = activeParticipant ? getScore(state.predictions[activeParticipant.id]?.[match.id]) : getScore();
                    const isClosed = isMatchLocked(match);
                    const canEditPrediction = Boolean(activeParticipant && uiState.participantUnlocked && !isClosed);
                    const canEditKnockoutTeams = Boolean(activeParticipant && uiState.participantUnlocked);
                    const points = activeParticipant ? getMatchPoints(prediction, officialResult) : null;
                    const matchLabel = match.matchNumber ? `Partido ${match.matchNumber}` : formatStage(match);
                    const rowClass = activeParticipant ? "knockout-team-row" : "knockout-team-row knockout-team-row-readonly";
                    const matchSourceLabel = isProjectedMatch(match) ? "Proyectado" : "FIFA";
                    const pointsHtml = activeParticipant
                        ? (points === null
                            ? '<span class="points-pill empty">-</span>'
                            : `<span class="points-pill">${points}</span>`)
                        : "";

                    return `
                        <article class="knockout-match">
                            <div class="knockout-match-top">
                                <div class="knockout-match-main">
                                    <strong>${escapeHtml(matchLabel)}</strong>
                                    <span>${escapeHtml(matchSourceLabel)}</span>
                                </div>
                            </div>
                            <div class="knockout-teams">
                                <div class="${rowClass}">
                                    ${renderKnockoutTeamSlot({
                                        match,
                                        side: "home",
                                        participant: activeParticipant,
                                        displayMatch,
                                        matchesByNumber,
                                        disabled: !canEditKnockoutTeams
                                    })}
                                    ${activeParticipant ? renderPredictionInput({
                                        matchId: match.id,
                                        side: "home",
                                        value: prediction.home,
                                        disabled: !canEditPrediction,
                                        extraClass: "knockout-score-input"
                                    }) : ""}
                                    <span class="knockout-official-score ${hasResult ? "" : "pending"}">${formatScoreValue(officialResult.home)}</span>
                                </div>
                                <div class="${rowClass}">
                                    ${renderKnockoutTeamSlot({
                                        match,
                                        side: "away",
                                        participant: activeParticipant,
                                        displayMatch,
                                        matchesByNumber,
                                        disabled: !canEditKnockoutTeams
                                    })}
                                    ${activeParticipant ? renderPredictionInput({
                                        matchId: match.id,
                                        side: "away",
                                        value: prediction.away,
                                        disabled: !canEditPrediction,
                                        extraClass: "knockout-score-input"
                                    }) : ""}
                                    <span class="knockout-official-score ${hasResult ? "" : "pending"}">${formatScoreValue(officialResult.away)}</span>
                                </div>
                            </div>
                            <div class="knockout-match-footer">
                                ${activeParticipant ? `
                                    <div class="knockout-points">
                                        <span class="knockout-match-caption">Puntos</span>
                                        ${pointsHtml}
                                    </div>
                                    ${canEditPrediction ? `
                                        <button type="button" class="secondary-button save-match-button" data-match-id="${match.id}">Guardar</button>
                                    ` : ''}
                                ` : `
                                    <span class="result-text ${hasResult ? "" : "pending"}">${hasResult ? `${officialResult.home} - ${officialResult.away}` : "Pendiente"}</span>
                                `}
                            </div>
                        </article>
                    `;
                }).join("")}
            </div>
        </article>
    `;
    }).join("");
}

function buildKnockoutDisplayMatchesByNumber(displayMatchesById) {
    const matchesByNumber = new Map();

    for (const match of displayMatchesById.values()) {
        if (match.matchNumber) {
            matchesByNumber.set(match.matchNumber, match);
        }
    }

    return matchesByNumber;
}

function buildParticipantKnockoutDisplayMatches(participant) {
    const knockoutMatches = state.matches
        .filter((match) => !match.group)
        .sort(compareMatches);
    const matchesByNumber = new Map();
    const displayMatchesById = new Map();
    const thirdPlaceAssignments = buildParticipantThirdPlaceAssignments(participant);

    for (const match of knockoutMatches) {
        const displayMatch = isProjectedMatch(match)
            ? {
                ...match,
                homeTeam: resolveProjectedTeamLabel(match, "home", participant, matchesByNumber, thirdPlaceAssignments),
                awayTeam: resolveProjectedTeamLabel(match, "away", participant, matchesByNumber, thirdPlaceAssignments)
            }
            : { ...match };

        displayMatchesById.set(match.id, displayMatch);

        if (match.matchNumber) {
            matchesByNumber.set(match.matchNumber, displayMatch);
        }
    }

    return displayMatchesById;
}

function buildParticipantThirdPlaceAssignments(participant) {
    const assignments = new Map();

    if (!participant) {
        return assignments;
    }

    const rankedThirdPlaceTeams = buildParticipantGroupTables(participant)
        .map((group) => {
            const thirdTeam = group.teams[2];

            if (!thirdTeam) {
                return null;
            }

            return {
                ...thirdTeam,
                groupKey: group.key,
                groupLetter: extractGroupLetter(group.name)
            };
        })
        .filter(Boolean)
        .sort(compareThirdPlaceTeams);

    const qualifiedThirdPlaceTeams = rankedThirdPlaceTeams.slice(0, 8);
    const usedGroupLetters = new Set();
    const roundOf32Phase = KNOCKOUT_PHASES.find((phase) => phase.key === "round-of-32");

    if (!roundOf32Phase) {
        return assignments;
    }

    const roundOf32Matches = state.matches
        .filter((match) => !match.group && isKnockoutMatch(match, roundOf32Phase))
        .sort(compareMatches);

    for (const match of roundOf32Matches) {
        for (const side of ["home", "away"]) {
            const label = String(side === "home" ? match.homeTeam : match.awayTeam).trim().toUpperCase();
            const thirdPlaceMatch = /^3([A-L](?:\/[A-L])+)$/.exec(label);

            if (!thirdPlaceMatch) {
                continue;
            }

            const candidateLetters = thirdPlaceMatch[1].split("/");
            const selectedThird = qualifiedThirdPlaceTeams.find((team) => (
                candidateLetters.includes(team.groupLetter)
                && !usedGroupLetters.has(team.groupLetter)
            ));

            if (!selectedThird) {
                continue;
            }

            usedGroupLetters.add(selectedThird.groupLetter);
            assignments.set(`${match.id}:${side}`, selectedThird.name);
        }
    }

    return assignments;
}

function compareThirdPlaceTeams(left, right) {
    return right.points - left.points
        || right.goalDifference - left.goalDifference
        || right.goalsFor - left.goalsFor
        || left.name.localeCompare(right.name, "es")
        || left.groupLetter.localeCompare(right.groupLetter, "en");
}

function buildParticipantGroupTables(participant) {
    const firstStageMatches = state.matches.filter((match) => Boolean(match.group));
    const groupsMap = new Map();
    const predictionsByParticipant = participant ? (state.predictions[participant.id] || {}) : {};

    for (const match of firstStageMatches) {
        if (!groupsMap.has(match.group)) {
            groupsMap.set(match.group, new Map());
        }

        const teamsMap = groupsMap.get(match.group);
        ensureGroupTeam(teamsMap, match.homeTeam);
        ensureGroupTeam(teamsMap, match.awayTeam);

        const predictedResult = getScore(predictionsByParticipant[match.id]);

        if (!isCompleteScore(predictedResult)) {
            continue;
        }

        const homeTeam = teamsMap.get(match.homeTeam);
        const awayTeam = teamsMap.get(match.awayTeam);

        homeTeam.played += 1;
        awayTeam.played += 1;

        homeTeam.goalsFor += predictedResult.home;
        homeTeam.goalsAgainst += predictedResult.away;
        awayTeam.goalsFor += predictedResult.away;
        awayTeam.goalsAgainst += predictedResult.home;

        homeTeam.goalDifference = homeTeam.goalsFor - homeTeam.goalsAgainst;
        awayTeam.goalDifference = awayTeam.goalsFor - awayTeam.goalsAgainst;

        if (predictedResult.home > predictedResult.away) {
            homeTeam.points += 3;
        } else if (predictedResult.home < predictedResult.away) {
            awayTeam.points += 3;
        } else {
            homeTeam.points += 1;
            awayTeam.points += 1;
        }
    }

    return [...groupsMap.entries()]
        .sort(([leftName], [rightName]) => compareGroupNames(leftName, rightName))
        .map(([name, teamsMap]) => ({
            name,
            key: normalizeGroupPickKey(name),
            teams: [...teamsMap.values()].sort(compareGroupTeams)
        }));
}

function resolveProjectedTeamLabel(match, side, participant, matchesByNumber, thirdPlaceAssignments = new Map()) {
    const teamLabel = side === "home" ? match.homeTeam : match.awayTeam;
    const normalized = String(teamLabel || "").trim();
    const override = String(participant?.knockoutSelections?.[match.id]?.[side === "home" ? "homeTeam" : "awayTeam"] || "").trim();

    if (!normalized || !participant) {
        return normalized;
    }

    const candidateOptions = getKnockoutTeamOptions(match, side, participant, matchesByNumber);

    if (override && candidateOptions.includes(override)) {
        return override;
    }

    const winnerMatch = /^Ganador\s+(\d+)$/i.exec(normalized);

    if (winnerMatch) {
        return getProjectedMatchOutcomeLabel(Number(winnerMatch[1]), "winner", participant, matchesByNumber) || normalized;
    }

    const loserMatch = /^Perdedor\s+(\d+)$/i.exec(normalized);

    if (loserMatch) {
        return getProjectedMatchOutcomeLabel(Number(loserMatch[1]), "loser", participant, matchesByNumber) || normalized;
    }

    const automaticThirdPlaceTeam = thirdPlaceAssignments.get(`${match.id}:${side}`);

    if (automaticThirdPlaceTeam) {
        return automaticThirdPlaceTeam;
    }

    return resolveGroupStandingPlaceholder(normalized, participant) || normalized;
}

function renderKnockoutTeamSlot({ match, side, participant, displayMatch, matchesByNumber, disabled }) {
    const teamName = side === "home" ? displayMatch.homeTeam : displayMatch.awayTeam;

    if (!participant || !isProjectedMatch(match)) {
        return renderTeamLabel(teamName, "knockout-team-name");
    }

    const options = getKnockoutTeamOptions(match, side, participant, matchesByNumber);

    if (options.length <= 1) {
        return renderTeamLabel(teamName, "knockout-team-name");
    }

    const selectedValue = String(participant.knockoutSelections?.[match.id]?.[side === "home" ? "homeTeam" : "awayTeam"] || "").trim();

    return `
        <select
            class="knockout-team-select"
            data-scope="knockout-team"
            data-match-id="${match.id}"
            data-side="${side}"
            ${disabled ? "disabled" : ""}
        >
            ${buildSelectOptions(options, selectedValue || teamName, "Selecciona un equipo")}
        </select>
    `.trim();
}

function getKnockoutTeamOptions(match, side, participant, matchesByNumber) {
    const teamLabel = side === "home" ? match.homeTeam : match.awayTeam;
    const normalized = String(teamLabel || "").trim();

    if (!normalized || !participant) {
        return [];
    }

    const winnerMatch = /^Ganador\s+(\d+)$/i.exec(normalized);

    if (winnerMatch) {
        const referencedMatch = matchesByNumber.get(Number(winnerMatch[1]));
        return referencedMatch
            ? [referencedMatch.homeTeam, referencedMatch.awayTeam].filter(Boolean).filter((value, index, array) => array.indexOf(value) === index)
            : [];
    }

    const loserMatch = /^Perdedor\s+(\d+)$/i.exec(normalized);

    if (loserMatch) {
        const referencedMatch = matchesByNumber.get(Number(loserMatch[1]));
        return referencedMatch
            ? [referencedMatch.homeTeam, referencedMatch.awayTeam].filter(Boolean).filter((value, index, array) => array.indexOf(value) === index)
            : [];
    }

    const directMatch = /^([123])([A-L])$/i.exec(normalized);

    if (directMatch) {
        const resolvedTeam = getParticipantGroupStandingTeam(participant, directMatch[2], directMatch[1]);
        return resolvedTeam ? [resolvedTeam] : [];
    }

    const thirdPlaceMatch = /^3([A-L](?:\/[A-L])+)$/.exec(normalized.toUpperCase());

    if (thirdPlaceMatch) {
        const automaticAssignments = buildParticipantThirdPlaceAssignments(participant);
        const automaticTeam = automaticAssignments.get(`${match.id}:${side}`);
        return automaticTeam ? [automaticTeam] : [];
    }

    return normalized ? [normalized] : [];
}

function getProjectedMatchOutcomeLabel(matchNumber, outcomeType, participant, matchesByNumber) {
    const referencedMatch = matchesByNumber.get(matchNumber);

    if (!referencedMatch || !participant) {
        return "";
    }

    const prediction = getScore(state.predictions[participant.id]?.[referencedMatch.id]);
    const officialResult = getScore(state.results[referencedMatch.id]);
    const resolvedScore = isCompleteScore(prediction) ? prediction : officialResult;

    if (!isCompleteScore(resolvedScore) || resolvedScore.home === resolvedScore.away) {
        return "";
    }

    const homeTeam = referencedMatch.homeTeam;
    const awayTeam = referencedMatch.awayTeam;
    const didHomeWin = resolvedScore.home > resolvedScore.away;

    if (outcomeType === "winner") {
        return didHomeWin ? homeTeam : awayTeam;
    }

    return didHomeWin ? awayTeam : homeTeam;
}

function resolveGroupStandingPlaceholder(teamLabel, participant) {
    const normalized = String(teamLabel || "").trim();
    const directMatch = /^([123])([A-L])$/i.exec(normalized);

    if (directMatch) {
        return getParticipantGroupStandingTeam(participant, directMatch[2], directMatch[1]) || normalized;
    }

    const thirdPlaceMatch = /^3([A-L](?:\/[A-L])+)$/.exec(normalized.toUpperCase());

    if (!thirdPlaceMatch) {
        return "";
    }

    const groupLetters = thirdPlaceMatch[1].split("/");
    const candidateTeams = groupLetters
        .map((letter) => getParticipantGroupStandingTeam(participant, letter, "3"))
        .filter(Boolean);

    return candidateTeams.length ? candidateTeams.join(" / ") : normalized;
}

function getParticipantGroupStandingTeam(participant, groupLetter, standing) {
    const predictedGroupTeam = getPredictedParticipantGroupStandingTeam(participant, groupLetter, standing);

    if (predictedGroupTeam) {
        return predictedGroupTeam;
    }

    const groupKey = normalizeGroupPickKey(`Group ${String(groupLetter || "").toUpperCase()}`);
    const picks = participant?.groupAdvancers?.[groupKey];

    if (!picks) {
        return "";
    }

    if (standing === "1") {
        return String(picks.first || "").trim();
    }

    if (standing === "2") {
        return String(picks.second || "").trim();
    }

    if (standing === "3") {
        return String(picks.third || "").trim();
    }

    return "";
}

function getPredictedParticipantGroupStandingTeam(participant, groupLetter, standing) {
    if (!participant) {
        return "";
    }

    const groupKey = normalizeGroupPickKey(`Group ${String(groupLetter || "").toUpperCase()}`);
    const participantGroups = buildParticipantGroupTables(participant);
    const group = participantGroups.find((entry) => entry.key === groupKey);

    if (!group) {
        return "";
    }

    const slotIndex = Number(standing) - 1;
    const team = group.teams[slotIndex];

    if (!team || team.played < 1) {
        return "";
    }

    return String(team.name || "").trim();
}

function renderLeaderboard() {
    const rows = getLeaderboardRows();
    const activeParticipantId = uiState.currentView === "participant" ? uiState.activeParticipantId : "";
    updateLeaderboardExportState(rows.length);

    if (!rows.length) {
        refs.leaderboardTableBody.innerHTML = '<tr><td colspan="10" class="empty-state">El ranking aparecera cuando tengas participantes cargados.</td></tr>';
        return;
    }

    refs.leaderboardTableBody.innerHTML = rows.map((row) => `
        <tr class="${row.participantId === activeParticipantId ? "leaderboard-row-active" : ""}">
            <td>${row.rank}</td>
            <td>${escapeHtml(row.participantName)}</td>
            <td>${escapeHtml(row.playerPick || "-")}</td>
            <td>${row.exactHits}</td>
            <td>${row.outcomeHits}</td>
            <td>${row.championPoints}</td>
            <td>${row.stagePickPoints}</td>
            <td>${row.playerGoalPoints}</td>
            <td>${row.favoriteTeamPoints}</td>
            <td>${row.totalPoints}</td>
        </tr>
    `).join("");
}

function renderAdminPredictionTables() {
    renderPredictionReviewTable();
    renderGeneralPoolTable();
}

function renderPredictionReviewTable() {
    if (!refs.predictionReviewTableBody) {
        return;
    }

    const participantId = String(refs.predictionReviewParticipantSelect?.value || "").trim();
    const participant = state.participants.find((entry) => entry.id === participantId) || null;

    if (!participant) {
        refs.predictionReviewTableBody.innerHTML = '<tr><td colspan="5" class="empty-state">Selecciona un participante para ver sus marcadores.</td></tr>';

        if (refs.predictionReviewStatus) {
            refs.predictionReviewStatus.textContent = "Selecciona un participante para ver sus marcadores guardados.";
        }

        return;
    }

    const predictionsByMatch = state.predictions[participant.id] || {};
    const rows = state.matches
        .filter((match) => isCompleteScore(getScore(predictionsByMatch[match.id])))
        .sort(compareMatches);

    if (!rows.length) {
        refs.predictionReviewTableBody.innerHTML = `<tr><td colspan="5" class="empty-state">${escapeHtml(participant.name)} todav&iacute;a no tiene marcadores guardados.</td></tr>`;

        if (refs.predictionReviewStatus) {
            refs.predictionReviewStatus.textContent = `${participant.name}: 0 marcadores guardados.`;
        }

        return;
    }

    refs.predictionReviewTableBody.innerHTML = rows.map((match) => {
        const prediction = getScore(predictionsByMatch[match.id]);
        const officialResult = getScore(state.results[match.id]);
        const points = getMatchPoints(prediction, officialResult);

        return `
            <tr>
                <td>${renderTeamLabel(match.homeTeam)} vs ${renderTeamLabel(match.awayTeam)}</td>
                <td>${escapeHtml(formatKickoff(match.kickoff))}</td>
                <td>${escapeHtml(formatScorePair(prediction))}</td>
                <td>${escapeHtml(formatScorePair(officialResult, "Pendiente"))}</td>
                <td>${points === null ? "-" : points}</td>
            </tr>
        `;
    }).join("");

    if (refs.predictionReviewStatus) {
        refs.predictionReviewStatus.textContent = `${participant.name}: ${rows.length} marcador${rows.length === 1 ? "" : "es"} guardado${rows.length === 1 ? "" : "s"}.`;
    }
}

function renderGeneralPoolTable() {
    if (!refs.generalPoolTableBody) {
        return;
    }

    const matchId = String(refs.generalPoolMatchSelect?.value || "").trim();
    const match = state.matches.find((entry) => entry.id === matchId) || null;

    if (!match) {
        refs.generalPoolTableBody.innerHTML = '<tr><td colspan="4" class="empty-state">Selecciona un partido para ver todos los pronosticos.</td></tr>';

        if (refs.generalPoolStatus) {
            refs.generalPoolStatus.textContent = "Selecciona un partido para ver todos los pronosticos.";
        }

        return;
    }

    const officialResult = getScore(state.results[match.id]);
    const rows = state.participants
        .map((participant) => ({
            participant,
            prediction: getScore(state.predictions[participant.id]?.[match.id])
        }))
        .filter((row) => isCompleteScore(row.prediction))
        .sort((left, right) => left.participant.name.localeCompare(right.participant.name, "es"));

    if (!rows.length) {
        refs.generalPoolTableBody.innerHTML = '<tr><td colspan="4" class="empty-state">Todavia nadie guardo pronostico para este partido.</td></tr>';

        if (refs.generalPoolStatus) {
            refs.generalPoolStatus.textContent = `${match.homeTeam} vs ${match.awayTeam}: 0 pronosticos guardados.`;
        }

        return;
    }

    refs.generalPoolTableBody.innerHTML = rows.map(({ participant, prediction }) => {
        const points = getMatchPoints(prediction, officialResult);

        return `
            <tr>
                <td>${escapeHtml(participant.name)}</td>
                <td>${escapeHtml(formatScorePair(prediction))}</td>
                <td>${escapeHtml(formatScorePair(officialResult, "Pendiente"))}</td>
                <td>${points === null ? "-" : points}</td>
            </tr>
        `;
    }).join("");

    if (refs.generalPoolStatus) {
        refs.generalPoolStatus.textContent = `${match.homeTeam} vs ${match.awayTeam}: ${rows.length} pronostico${rows.length === 1 ? "" : "s"} guardado${rows.length === 1 ? "" : "s"}.`;
    }
}

function getLeaderboardRows() {
    return state.participants
        .map((participant) => {
            const stats = getParticipantStats(participant.id);

            return {
                participantId: participant.id,
                participantName: participant.name,
                playerPick: participant.topScorerPick,
                predictionsSaved: countCompletePredictions(participant.id),
                exactHits: stats.exactHits,
                outcomeHits: stats.outcomeHits,
                championPoints: stats.championPoints,
                stagePickPoints: stats.stagePickPoints,
                playerGoalPoints: stats.playerGoalPoints,
                favoriteTeamPoints: stats.favoriteTeamPoints,
                totalPoints: stats.totalPoints
            };
        })
        .sort((left, right) => {
            return right.totalPoints - left.totalPoints
                || right.exactHits - left.exactHits
                || right.outcomeHits - left.outcomeHits
                || left.participantName.localeCompare(right.participantName, "es");
        })
        .map((row, index) => ({
            rank: index + 1,
            ...row
        }));
}

function updateLeaderboardExportState(totalRows) {
    if (!refs.leaderboardExportButton) {
        return;
    }

    refs.leaderboardExportButton.disabled = totalRows < 1;
}

function renderSpecialPredictions(activeParticipant, teams) {
    if (!refs.specialPredictionsForm) {
        return;
    }

    const teamsAvailable = teams.length > 0;
    const participant = activeParticipant || null;

    if (refs.championPickSelect && document.activeElement !== refs.championPickSelect) {
        const championOptions = buildSelectOptions(teams, participant?.championPick || "", "Selecciona un campeon");
        refs.championPickSelect.innerHTML = championOptions;
        refs.championPickSelect.disabled = !uiState.participantUnlocked || !teamsAvailable;
        refs.championPickSelect.value = participant?.championPick || "";
    }

    if (refs.favoriteTeamSelect && document.activeElement !== refs.favoriteTeamSelect) {
        const favoriteTeamOptions = buildSelectOptions(teams, participant?.favoriteTeam || "", "Selecciona tu equipo");
        refs.favoriteTeamSelect.innerHTML = favoriteTeamOptions;
        refs.favoriteTeamSelect.disabled = !uiState.participantUnlocked || !teamsAvailable;
        refs.favoriteTeamSelect.value = participant?.favoriteTeam || "";
    }

    if (refs.topScorerPickInput && document.activeElement !== refs.topScorerPickInput) {
        const val = participant?.topScorerPick || "";
        if (refs.topScorerPickInput.value !== val) {
            refs.topScorerPickInput.value = val;
        }
        refs.topScorerPickInput.disabled = !uiState.participantUnlocked;
    }

    renderStagePicksPicker(participant, teams);
    renderGroupAdvancersPicker(participant);

    if (refs.specialPredictionsButton) {
        refs.specialPredictionsButton.disabled = !uiState.participantUnlocked;
    }

    if (refs.specialPredictionsStatus) {
        if (!uiState.participantUnlocked || !participant) {
            refs.specialPredictionsStatus.textContent = "Inicia sesion para guardar tus extras.";
        } else {
            const favoriteTeamPoints = getFavoriteTeamPoints(participant.favoriteTeam);
            const playerGoalPoints = getPlayerGoalPoints(participant.topScorerPick);
            const playerMessage = participant.topScorerPick
                ? (playerGoalPoints > 0
                    ? `Tu jugador suma ${playerGoalPoints} puntos.`
                    : `Tu jugador elegido aun no suma puntos.`)
                : `Tu jugador elegido te puede dar ${PLAYER_GOAL_BONUS_POINTS} puntos.`;
            const teamMessage = teamsAvailable && participant.favoriteTeam
                ? `Tu equipo suma ${favoriteTeamPoints} puntos hasta ahora.`
                : (teamsAvailable
                    ? "Elige tu equipo para activar ese bonus."
                    : "Estamos esperando el fixture para habilitar campeon y equipo.");

            refs.specialPredictionsStatus.textContent = `${playerMessage} ${teamMessage}`;
        }
    }
}

function renderStagePicksPicker(participant, teams) {
    if (!refs.stagePicksGrid) {
        return;
    }

    if (!teams.length) {
        refs.stagePicksGrid.innerHTML = '<div class="empty-state">Los equipos apareceran cuando se sincronice el fixture.</div>';
        return;
    }

    const disabled = !uiState.participantUnlocked || !participant;
    const semiFinalists = participant?.stagePicks?.semiFinalists || [];
    const finalists = participant?.stagePicks?.finalists || [];

    refs.stagePicksGrid.innerHTML = `
        <article class="advancers-card">
            <div class="advancers-card-title">
                <h3>Semifinalistas</h3>
                <span>4 equipos</span>
            </div>
            <div class="advancers-selects">
                ${[0, 1, 2, 3].map((index) => renderStagePickSelect({
                    teams,
                    type: "semiFinalists",
                    index,
                    label: `Semi ${index + 1}`,
                    value: semiFinalists[index] || "",
                    disabled
                })).join("")}
            </div>
        </article>
        <article class="advancers-card">
            <div class="advancers-card-title">
                <h3>Finalistas</h3>
                <span>2 equipos</span>
            </div>
            <div class="advancers-selects">
                ${[0, 1].map((index) => renderStagePickSelect({
                    teams,
                    type: "finalists",
                    index,
                    label: `Final ${index + 1}`,
                    value: finalists[index] || "",
                    disabled
                })).join("")}
            </div>
        </article>
    `;
}

function renderStagePickSelect({ teams, type, index, label, value, disabled }) {
    return `
        <label>
            <span>${escapeHtml(label)}</span>
            <select
                data-scope="stage-pick"
                data-stage-pick-type="${escapeHtml(type)}"
                data-stage-pick-index="${index}"
                ${disabled ? "disabled" : ""}
            >
                ${buildSelectOptions(teams, value, "Por definir")}
            </select>
        </label>
    `.trim();
}

function renderGroupAdvancersPicker(participant) {
    if (!refs.groupAdvancersGrid) {
        return;
    }

    const groups = buildGroupPickOptions();

    if (!groups.length) {
        refs.groupAdvancersGrid.innerHTML = '<div class="empty-state">Los grupos apareceran cuando se sincronice el fixture.</div>';
        return;
    }

    const disabled = !uiState.participantUnlocked || !participant;

    refs.groupAdvancersGrid.innerHTML = groups.map((group) => {
        const picks = participant?.groupAdvancers?.[group.key] || {};

        return `
            <article class="advancers-card">
                <div class="advancers-card-title">
                    <h3>${escapeHtml(group.label)}</h3>
                    <span>${group.teams.length} equipos</span>
                </div>
                <div class="advancers-selects">
                    ${renderAdvancerSelect(group, "first", "1er lugar", picks.first || "", disabled)}
                    ${renderAdvancerSelect(group, "second", "2do lugar", picks.second || "", disabled)}
                    ${renderAdvancerSelect(group, "third", "3er lugar", picks.third || "", disabled)}
                </div>
            </article>
        `;
    }).join("");
}

function renderAdvancerSelect(group, slot, label, value, disabled) {
    return `
        <label>
            <span>${escapeHtml(label)}</span>
            <select
                data-scope="group-advancer"
                data-group-key="${escapeHtml(group.key)}"
                data-slot="${escapeHtml(slot)}"
                ${disabled ? "disabled" : ""}
            >
                ${buildSelectOptions(group.teams, value, "Por definir")}
            </select>
        </label>
    `.trim();
}

function renderSpecialPredictionsTable() {
    if (!refs.specialPredictionsTableBody) {
        return;
    }

    if (!state.participants.length) {
        refs.specialPredictionsTableBody.innerHTML = '<tr><td colspan="8" class="empty-state">Todavia no hay participantes para mostrar picks extra.</td></tr>';
        return;
    }

    refs.specialPredictionsTableBody.innerHTML = state.participants.map((participant) => {
        const stats = getParticipantStats(participant.id);

        return `
        <tr>
            <td>${escapeHtml(participant.name)}</td>
            <td>${renderTeamLabel(participant.championPick || "-")}</td>
            <td>${stats.championPoints}</td>
            <td>${escapeHtml(participant.topScorerPick || "-")}</td>
            <td>${stats.playerGoalPoints}</td>
            <td>${renderTeamLabel(participant.favoriteTeam || "-")}</td>
            <td>${stats.favoriteTeamPoints}</td>
            <td>${escapeHtml(formatGroupAdvancersSummary(participant.groupAdvancers))}</td>
        </tr>
    `;
    }).join("");
}

function formatGroupAdvancersSummary(groupAdvancers) {
    const entries = Object.entries(groupAdvancers || {})
        .sort(([leftKey], [rightKey]) => leftKey.localeCompare(rightKey, "en"));

    if (!entries.length) {
        return "-";
    }

    return entries.map(([groupKey, picks]) => {
        const groupLabel = groupKey.replace(/^group-/i, "Grupo ");
        const teams = [picks.first, picks.second, picks.third].filter(Boolean);
        return teams.length ? `${groupLabel}: ${teams.join(", ")}` : "";
    }).filter(Boolean).join(" | ") || "-";
}

function renderSummary() {
    const completeResults = countOfficialResults();
    const totalPredictionSlots = state.participants.length * state.matches.length;
    const leaderboardRows = getLeaderboardRows();
    const participantRank = uiState.currentView === "participant"
        ? leaderboardRows.find((row) => row.participantId === uiState.activeParticipantId)
        : null;

    refs.participantsCount.textContent = String(state.participants.length);
    refs.matchesCount.textContent = String(state.matches.length);
    refs.predictionsCount.textContent = totalPredictionSlots ? `${countAllPredictions()}/${totalPredictionSlots}` : "0";
    refs.resultsCount.textContent = state.matches.length ? `${completeResults}/${state.matches.length}` : "0";

    if (refs.participantRankValue) {
        refs.participantRankValue.textContent = participantRank ? `#${participantRank.rank}` : "-";
    }
}

async function syncFifaMatches(options = {}) {
    if (uiState.syncingFifa) {
        return;
    }

    uiState.syncingFifa = true;
    render();

    try {
        const response = await fetch(state.source.endpoint, {
            method: "GET",
            headers: {
                Accept: "application/json"
            },
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error(`FIFA respondio con ${response.status}.`);
        }

        const payload = await response.json();
        const fifaMatches = Array.isArray(payload?.Results)
            ? payload.Results.map(mapFifaMatch).filter(Boolean).sort(compareMatches)
            : [];

        if (!fifaMatches.length) {
            throw new Error("FIFA no devolvio partidos del Mundial 2026.");
        }

        const nextMatches = ensureProjectedKnockoutMatches(fifaMatches);
        const allowedMatchIds = new Set(nextMatches.map((match) => match.id));
        const nextResults = pruneResults(state.results, allowedMatchIds);
        const nextLockedMatches = pruneLockedMatches(state.lockedMatches, allowedMatchIds);

        for (const match of nextMatches) {
            const result = getScore({
                home: match.homeScore,
                away: match.awayScore
            });

            if (isCompleteScore(result)) {
                nextResults[match.id] = result;
            }

            if (isMatchLocked(match) || isCompleteScore(result)) {
                nextLockedMatches[match.id] = true;
            }
        }

        state.matches = nextMatches;
        state.results = nextResults;
        state.lockedMatches = nextLockedMatches;
        state.predictions = prunePredictions(state.predictions, allowedMatchIds);
        state.matchScorers = pruneMatchScorers(state.matchScorers, allowedMatchIds);
        state.source.lastSync = new Date().toISOString();
        state.source.syncError = "";

        saveState(options.silent ? "" : `Sincronizacion FIFA lista: ${fifaMatches.length} partidos oficiales y eliminatorias proyectadas cargadas.`);
        render();
    } catch (error) {
        state.source.syncError = error instanceof Error ? error.message : "No se pudo sincronizar con FIFA.";
        setNotice(`No pude sincronizar con FIFA: ${state.source.syncError}`, "danger");
        render();
    } finally {
        uiState.syncingFifa = false;
        render();
    }
}

function mapFifaMatch(match) {
    if (!match?.IdMatch || !match?.Home || !match?.Away) {
        return null;
    }

    const homeTeam = extractLocalizedText(match.Home.TeamName) || match.Home.ShortClubName || match.PlaceHolderA || "Por definir";
    const awayTeam = extractLocalizedText(match.Away.TeamName) || match.Away.ShortClubName || match.PlaceHolderB || "Por definir";

    return {
        id: `fifa-${match.IdMatch}`,
        source: "fifa",
        externalId: String(match.IdMatch),
        stage: extractLocalizedText(match.StageName) || "World Cup 2026",
        group: extractLocalizedText(match.GroupName),
        homeTeam,
        awayTeam,
        kickoff: String(match.Date || ""),
        statusCode: Number(match.MatchStatus ?? 1),
        matchNumber: Number(match.MatchNumber ?? 0),
        stadium: extractLocalizedText(match.Stadium?.Name),
        city: extractLocalizedText(match.Stadium?.CityName),
        homeScore: normalizeScoreValue(match.HomeTeamScore),
        awayScore: normalizeScoreValue(match.AwayTeamScore)
    };
}

async function handleAdminAccess(event) {
    event.preventDefault();

    const pin = refs.adminPinInput.value.trim();

    if (pin.length < 4) {
        setNotice("La clave admin debe tener al menos 4 caracteres.", "warning");
        return;
    }

    if (!state.config.adminPin) {
        state.config.adminPin = pin;
        uiState.adminUnlocked = true;
        persistAdminSession(true);
        refs.adminPinInput.value = "";
        refs.adminPinInput.setCustomValidity("");
        await saveState(); 
        pushFlashNotice("Clave admin creada correctamente.", "success");
        render();
        return;
    }

    if (pin !== state.config.adminPin) {
        setNotice("La clave admin no coincide.", "danger");
        return;
    }

    uiState.adminUnlocked = true;
    persistAdminSession(true);
    refs.adminPinInput.value = "";
    refs.adminPinInput.setCustomValidity("");
    await saveState();
    setNotice("Modo admin desbloqueado correctamente.", "success");
    render();
}

async function handleResetAdminPin() {
    if (!uiState.adminUnlocked) return;

    const confirmed = window.confirm("¿Estás seguro de que quieres borrar el PIN de administrador? Se cerrará la sesión y tendrás que crear uno nuevo.");
    if (!confirmed) return;

    state.config.adminPin = "";
    await saveState("PIN de administrador eliminado. Crea uno nuevo.");
    lockAdmin();
}

function lockAdmin() {
    uiState.adminUnlocked = false;
    persistAdminSession(false);
    refs.adminPinInput.value = "";
    refs.adminPinInput.setCustomValidity("");
    setNotice("Modo admin bloqueado.", "neutral");
    render();
}

function handleScoringSave(event) {
    event.preventDefault();

    if (!uiState.adminUnlocked) {
        setNotice("Solo el admin puede cambiar las reglas de puntaje.", "warning");
        return;
    }

    const exactPoints = parseScoreInput(refs.exactPointsInput.value);
    const outcomePoints = parseScoreInput(refs.outcomePointsInput.value);

    if (exactPoints === null || outcomePoints === null || exactPoints === "" || outcomePoints === "") {
        setNotice("Las reglas deben ser numeros enteros iguales o mayores que cero.", "warning");
        return;
    }

    if (exactPoints < outcomePoints) {
        setNotice("Los puntos por exacto no deberian ser menores que los puntos por signo.", "warning");
        return;
    }

    state.config.exactPoints = exactPoints;
    state.config.outcomePoints = outcomePoints;
    saveState("Reglas de puntaje actualizadas.");
    render();
}

function handleGoalScorersSave(event) {
    event.preventDefault();

    if (!uiState.adminUnlocked) {
        setNotice("Solo el admin puede actualizar los goleadores oficiales.", "warning");
        return;
    }

    state.goalScorers = parseGoalScorersInput(refs.goalScorersInput?.value || "");
    saveState("Lista manual de goleadores actualizada.");
    render();
}

function handleGoalScorersMatchSelectChange(event) {
    const select = event.target;

    if (!(select instanceof HTMLSelectElement)) {
        return;
    }

    uiState.activeGoalScorersMatchId = select.value;
    render();
}

function handleMatchGoalScorersSave(event) {
    event.preventDefault();

    if (!uiState.adminUnlocked) {
        setNotice("Solo el admin puede actualizar goleadores por partido.", "warning");
        return;
    }

    const matches = getCompletedMatchesForGoalScorers();
    const matchId = String(refs.goalScorersMatchSelect?.value || uiState.activeGoalScorersMatchId || "").trim();
    const match = matches.find((entry) => entry.id === matchId);

    if (!match) {
        setNotice("Selecciona un partido con resultado oficial.", "warning");
        return;
    }

    const scorers = parseGoalScorersInput(refs.matchGoalScorersInput?.value || "");
    uiState.activeGoalScorersMatchId = match.id;

    if (scorers.length) {
        state.matchScorers[match.id] = scorers;
        saveState(`Goleadores guardados para ${formatGoalScorersMatchLabel(match)}.`);
    } else {
        delete state.matchScorers[match.id];
        saveState(`Goleadores eliminados para ${formatGoalScorersMatchLabel(match)}.`, "warning");
    }

    render();
}

async function handleParticipantAdd(event) {
    event.preventDefault();

    if (!uiState.adminUnlocked) {
        setNotice("Desbloquea el admin antes de crear participantes.", "warning");
        return;
    }

    const name = refs.participantNameInput.value.trim();
    const pin = refs.participantPinCreateInput.value.trim();

    if (!name) {
        setNotice("Escribe el nombre del participante.", "warning");
        return;
    }

    if (pin.length < 4) {
        setNotice("Cada participante necesita un PIN de minimo 4 caracteres.", "warning");
        return;
    }

    const alreadyExists = state.participants.some((participant) => participant.name.toLowerCase() === name.toLowerCase());

    if (alreadyExists) {
        setNotice("Ese participante ya existe. Usa otro nombre.", "warning");
        return;
    }

    const newParticipant = {
        id: createId("participant"),
        name,
        pin,
        championPick: "",
        topScorerPick: "",
        favoriteTeam: "",
        stagePicks: {
            semiFinalists: [],
            finalists: []
        },
        groupAdvancers: {},
        knockoutSelections: {}
    };

    state.participants = [...state.participants, newParticipant].sort((left, right) => left.name.localeCompare(right.name, "es"));
    uiState.activeParticipantId = newParticipant.id;
    uiState.participantUnlocked = false;

    refs.participantNameInput.value = "";
    refs.participantPinCreateInput.value = "";

    await saveState(`Participante ${name} agregado.`);
    render();
}

function handleSpecialPredictionsSave(event) {
    event.preventDefault();

    if (!uiState.participantUnlocked || !uiState.activeParticipantId) {
        setNotice("Inicia sesion como participante antes de guardar tus picks extra.", "warning");
        render();
        return;
    }

    const participant = getActiveParticipant();

    if (!participant) {
        setNotice("No pude encontrar tu usuario activo.", "danger");
        return;
    }

    participant.championPick = String(refs.championPickSelect?.value || "").trim();
    participant.topScorerPick = String(refs.topScorerPickInput?.value || "").trim();
    participant.favoriteTeam = String(refs.favoriteTeamSelect?.value || "").trim();
    participant.stagePicks = collectStagePicks();
    const groupAdvancerResult = collectGroupAdvancerPicks();
    participant.groupAdvancers = groupAdvancerResult.picks;

    saveState(groupAdvancerResult.hadDuplicates
        ? "Pronosticos guardados. Quite equipos repetidos dentro de un mismo grupo."
        : "Pronosticos extra guardados.");
    render();
}

function collectStagePicks() {
    const picks = {
        semiFinalists: [],
        finalists: []
    };

    if (!refs.stagePicksGrid) {
        return picks;
    }

    const selects = [...refs.stagePicksGrid.querySelectorAll('select[data-scope="stage-pick"]')];
    const usedByType = {
        semiFinalists: new Set(),
        finalists: new Set()
    };

    for (const select of selects) {
        const type = select.dataset.stagePickType || "";
        const value = String(select.value || "").trim();

        if (!["semiFinalists", "finalists"].includes(type) || !value || usedByType[type].has(value)) {
            continue;
        }

        usedByType[type].add(value);
        picks[type].push(value);
    }

    return picks;
}

function collectGroupAdvancerPicks() {
    const picksByGroup = {};
    let hadDuplicates = false;

    if (!refs.groupAdvancersGrid) {
        return { picks: picksByGroup, hadDuplicates };
    }

    const selects = [...refs.groupAdvancersGrid.querySelectorAll('select[data-scope="group-advancer"]')];

    for (const select of selects) {
        const groupKey = normalizeGroupPickKey(select.dataset.groupKey || "");
        const slot = select.dataset.slot || "";
        const value = String(select.value || "").trim();

        if (!groupKey || !["first", "second", "third"].includes(slot)) {
            continue;
        }

        if (!picksByGroup[groupKey]) {
            picksByGroup[groupKey] = { first: "", second: "", third: "" };
        }

        picksByGroup[groupKey][slot] = value;
    }

    for (const [groupKey, picks] of Object.entries(picksByGroup)) {
        const usedTeams = new Set();

        for (const slot of ["first", "second", "third"]) {
            const value = picks[slot];

            if (!value) {
                continue;
            }

            if (usedTeams.has(value)) {
                picks[slot] = "";
                hadDuplicates = true;
                continue;
            }

            usedTeams.add(value);
        }

        if (!picks.first && !picks.second && !picks.third) {
            delete picksByGroup[groupKey];
        }
    }

    return { picks: picksByGroup, hadDuplicates };
}

function handleParticipantAccess(event) {
    event.preventDefault();

    const name = refs.participantLoginSelect.value.trim();
    const participant = state.participants.find((entry) => entry.name.toLowerCase() === name.toLowerCase());
    const pin = refs.participantPinInput.value.trim();

    if (!participant) {
        setNotice("No se encontró ningún usuario con ese nombre.", "warning");
        return;
    }

    if (pin !== participant.pin) {
        setNotice("El PIN del participante no coincide.", "danger");
        return;
    }

    uiState.activeParticipantId = participant.id;
    uiState.participantUnlocked = true;
    persistParticipantSession(participant.id);

    if (refs.participantPinInput) {
        refs.participantPinInput.value = "";
    }

    pushFlashNotice(`${participant.name} inicio sesion correctamente.`, "success");
    redirectToPage(PARTICIPANT_DASHBOARD_PAGE);
}

function lockParticipant() {
    uiState.participantUnlocked = false;
    persistParticipantSession("");

    if (refs.participantPinInput) {
        refs.participantPinInput.value = "";
    }

    pushFlashNotice("Sesion del participante cerrada.", "neutral");
    redirectToPage(PARTICIPANT_LOGIN_PAGE);
}

function handleParticipantTableClick(event) {
    const button = event.target.closest("button[data-action]");

    if (!button) {
        return;
    }

    if (button.dataset.action === "delete-participant") {
        deleteParticipant(button.dataset.participantId || "");
    }
}

function handleMatchesTableClick(event) {
    const button = event.target.closest(".save-match-button");
    if (!button) {
        return;
    }
    // Forzamos el guardado manual cuando se hace clic en el botón de la tarjeta
    handleSaveAllData();
}

function deleteParticipant(participantId) {
    if (!uiState.adminUnlocked) {
        setNotice("Solo el admin puede eliminar participantes.", "warning");
        return;
    }

    const participant = state.participants.find((entry) => entry.id === participantId);

    if (!participant) {
        return;
    }

    const confirmed = window.confirm(`Eliminar a ${participant.name} y todos sus pronosticos?`);

    if (!confirmed) {
        return;
    }

    state.participants = state.participants.filter((entry) => entry.id !== participantId);
    delete state.predictions[participantId];

    if (uiState.activeParticipantId === participantId) {
        uiState.activeParticipantId = "";
        uiState.participantUnlocked = false;
        persistParticipantSession("");
    }

    saveState(`Participante ${participant.name} eliminado.`, "warning");
    render();
}

function handleMatchesTableChange(event) {
    const input = event.target;

    if (!(input instanceof HTMLInputElement)) {
        return;
    }

    const scope = input.dataset.scope;
    const matchId = input.dataset.matchId;
    const side = input.dataset.side;

    if (!scope || !matchId || !side) {
        return;
    }

    const parsedValue = parseScoreInput(input.value);

    if (parsedValue === null) {
        setNotice("Solo se permiten goles enteros iguales o mayores que cero.", "warning");
        render();
        return;
    }

    if (scope === "prediction") {
        updatePrediction(matchId, side, parsedValue);
    }
}

function handleKnockoutTeamSelectionChange(event) {
    const select = event.target;

    if (!(select instanceof HTMLSelectElement)) {
        return;
    }

    if (select.dataset.scope !== "knockout-team") {
        return;
    }

    const participant = getActiveParticipant();
    const matchId = String(select.dataset.matchId || "").trim();
    const side = String(select.dataset.side || "").trim();
    const value = String(select.value || "").trim();

    if (!participant || !matchId || !["home", "away"].includes(side)) {
        return;
    }

    participant.knockoutSelections ||= {};
    participant.knockoutSelections[matchId] ||= { homeTeam: "", awayTeam: "" };
    participant.knockoutSelections[matchId][side === "home" ? "homeTeam" : "awayTeam"] = value;

    persistStateLocallySafely();
    renderKnockoutPhases();
}

function handleKnockoutPredictionInput(event) {
    const input = event.target;

    if (!(input instanceof HTMLInputElement)) {
        return;
    }

    const matchId = input.dataset.matchId;
    const side = input.dataset.side;
    const parsedValue = parseScoreInput(input.value);

    if (!matchId || !side || parsedValue === null) {
        return;
    }

    const updated = updatePrediction(matchId, side, parsedValue, {
        persist: false,
        renderMode: "knockout",
        showNotice: false
    });

    if (!updated) {
        return;
    }

    const replacementInput = refs.knockoutGrid?.querySelector(`input[data-match-id="${matchId}"][data-side="${side}"]`);

    if (replacementInput instanceof HTMLInputElement) {
        replacementInput.focus({ preventScroll: true });
        const inputLength = replacementInput.value.length;
        replacementInput.setSelectionRange(inputLength, inputLength);
    }
}

function handleGroupAdvancersPreviewChange(event) {
    const select = event.target;

    if (!(select instanceof HTMLSelectElement) || !uiState.participantUnlocked) {
        return;
    }

    if (select.dataset.scope !== "group-advancer") {
        return;
    }

    persistActiveParticipantFormValues();
    persistStateLocallySafely();
    renderKnockoutPhases();
}

function updatePrediction(matchId, side, value, options = {}) {
    const {
        persist = true,
        renderMode = "all",
        showNotice = true
    } = options;

    if (!uiState.participantUnlocked || !uiState.activeParticipantId) {
        if (showNotice) {
            setNotice("Primero desbloquea al participante para editar pronosticos.", "warning");
        }
        render();
        return false;
    }

    const match = state.matches.find((entry) => entry.id === matchId);

    if (match && isMatchLocked(match)) {
        if (showNotice) {
            setNotice("Ese partido ya esta cerrado y no admite cambios.", "warning");
        }
        render();
        return false;
    }

    const predictionsByParticipant = state.predictions[uiState.activeParticipantId] || {};
    const prediction = getScore(predictionsByParticipant[matchId]);
    prediction[side] = value;

    if (prediction.home === "" && prediction.away === "") {
        delete predictionsByParticipant[matchId];
    } else {
        predictionsByParticipant[matchId] = prediction;
    }

    if (Object.keys(predictionsByParticipant).length) {
        state.predictions[uiState.activeParticipantId] = predictionsByParticipant;
    } else {
        delete state.predictions[uiState.activeParticipantId];
    }

    if (persist) {
        saveState(showNotice ? "Pronostico guardado." : "", "success");
    } else {
        persistStateLocallySafely();
    }

    if (renderMode === "knockout") {
        renderKnockoutPhases();
    } else {
        render();
    }

    return true;
}

function handleBackupDownload() {
    if (!uiState.adminUnlocked) {
        setNotice("Desbloquea el admin antes de descargar respaldos.", "warning");
        return;
    }

    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    downloadBlobFile(blob, `polla-mundialista-${formatDateForFile(new Date())}.json`);

    setNotice("Respaldo descargado en JSON.", "success");
}

async function handleSavePredictions(event) {
    if (event) event.preventDefault();
    await handleSaveAllData();
}

async function handleSaveAllData() {
    if (uiState.currentView === "admin" && !uiState.adminUnlocked) {
        setNotice("Desbloquea el admin antes de guardar todos los datos.", "warning");
        return;
    }

    if (uiState.currentView === "participant" && !uiState.participantUnlocked) {
        setNotice("Inicia sesion como participante antes de guardar todos los datos.", "warning");
        return;
    }

    if (uiState.currentView === "participant") {
        persistActiveParticipantFormValues();
    }

    try {
        persistStateLocally();
    } catch (error) {
        setNotice("No se pudo guardar en este navegador. Revisa el espacio disponible.", "danger");
        return;
    }

    if (useRemoteState) {
        const savedRemotely = await saveRemoteState("", "");

        if (!savedRemotely) {
            setNotice("Datos guardados en este navegador. No pude confirmar el guardado en el servidor.", "warning");
            return;
        }
    }

    setNotice("Todos los datos quedaron guardados.", "success");
    render();
}

function persistActiveParticipantFormValues() {
    const participant = getActiveParticipant();

    if (!participant || !refs.specialPredictionsForm) {
        return;
    }

    participant.championPick = String(refs.championPickSelect?.value || "").trim();
    participant.topScorerPick = String(refs.topScorerPickInput?.value || "").trim();
    participant.favoriteTeam = String(refs.favoriteTeamSelect?.value || "").trim();
    participant.stagePicks = collectStagePicks();
    participant.groupAdvancers = collectGroupAdvancerPicks().picks;
}

function handleLeaderboardExport() {
    const rows = getLeaderboardRows();

    if (!rows.length) {
        setNotice("Agrega participantes antes de exportar la tabla de posiciones.", "warning");
        return;
    }

    const workbookBlob = buildLeaderboardWorkbookBlob(rows);
    downloadBlobFile(workbookBlob, `tabla-posiciones-${formatDateForFile(new Date())}.xlsx`);
    setNotice("Tabla de posiciones descargada en Excel.", "success");
}

function ensureActiveParticipant() {
    const exists = state.participants.some((participant) => participant.id === uiState.activeParticipantId);

    if (exists) {
        return;
    }

    uiState.activeParticipantId = state.participants[0]?.id || "";
    uiState.participantUnlocked = false;
}

function redirectIfNeeded() {
    if (uiState.currentView === "admin-login" && uiState.adminUnlocked) {
        redirectToPage(uiState.adminPage);
        return true;
    }

    if (uiState.currentView === "login" && uiState.participantUnlocked && getActiveParticipant()) {
        redirectToPage(PARTICIPANT_DASHBOARD_PAGE);
        return true;
    }

    if (uiState.currentView === "participant" && (!uiState.participantUnlocked || !getActiveParticipant())) {
        pushFlashNotice("Inicia sesion para entrar al panel de participantes.", "warning");
        redirectToPage(PARTICIPANT_LOGIN_PAGE);
        return true;
    }

    return false;
}

function getActiveParticipant() {
    return state.participants.find((participant) => participant.id === uiState.activeParticipantId) || null;
}

function getParticipantStats(participantId) {
    let totalPoints = 0;
    let exactHits = 0;
    let outcomeHits = 0;
    const participant = state.participants.find((entry) => entry.id === participantId) || null;
    const championPoints = getChampionPickPoints(participant?.championPick || "");
    const stagePickPoints = getStagePickPoints(participant?.stagePicks);
    const playerGoalPoints = getPlayerGoalPoints(participant?.topScorerPick || "");
    const favoriteTeamPoints = getFavoriteTeamPoints(participant?.favoriteTeam || "");

    for (const match of state.matches) {
        const prediction = getScore(state.predictions[participantId]?.[match.id]);
        const officialResult = getScore(state.results[match.id]);
        const points = getMatchPoints(prediction, officialResult);

        if (points === null) {
            continue;
        }

        totalPoints += points;

        if (prediction.home === officialResult.home && prediction.away === officialResult.away) {
            exactHits += 1;
        } else if (getOutcome(prediction) === getOutcome(officialResult)) {
            outcomeHits += 1;
        }
    }

    totalPoints += championPoints;
    totalPoints += stagePickPoints;
    totalPoints += playerGoalPoints;
    totalPoints += favoriteTeamPoints;

    return { totalPoints, exactHits, outcomeHits, championPoints, stagePickPoints, playerGoalPoints, favoriteTeamPoints };
}

function getMatchPoints(prediction, officialResult) {
    if (!isCompleteScore(prediction) || !isCompleteScore(officialResult)) {
        return null;
    }

    if (prediction.home === officialResult.home && prediction.away === officialResult.away) {
        return state.config.exactPoints;
    }

    if (getOutcome(prediction) === getOutcome(officialResult)) {
        return state.config.outcomePoints;
    }

    return 0;
}

function countCompletePredictions(participantId) {
    return state.matches.filter((match) => isCompleteScore(getScore(state.predictions[participantId]?.[match.id]))).length;
}

function countAllPredictions() {
    return state.participants.reduce((total, participant) => total + countCompletePredictions(participant.id), 0);
}

function countOfficialResults() {
    return state.matches.filter((match) => isCompleteScore(getScore(state.results[match.id]))).length;
}

function buildGroupTables() {
    const firstStageMatches = state.matches.filter((match) => Boolean(match.group));
    const groupsMap = new Map();

    for (const match of firstStageMatches) {
        if (!groupsMap.has(match.group)) {
            groupsMap.set(match.group, new Map());
        }

        const teamsMap = groupsMap.get(match.group);
        ensureGroupTeam(teamsMap, match.homeTeam);
        ensureGroupTeam(teamsMap, match.awayTeam);

        const officialResult = getScore(state.results[match.id]);

        if (!isCompleteScore(officialResult)) {
            continue;
        }

        const homeTeam = teamsMap.get(match.homeTeam);
        const awayTeam = teamsMap.get(match.awayTeam);

        homeTeam.played += 1;
        awayTeam.played += 1;

        homeTeam.goalsFor += officialResult.home;
        homeTeam.goalsAgainst += officialResult.away;
        awayTeam.goalsFor += officialResult.away;
        awayTeam.goalsAgainst += officialResult.home;

        homeTeam.goalDifference = homeTeam.goalsFor - homeTeam.goalsAgainst;
        awayTeam.goalDifference = awayTeam.goalsFor - awayTeam.goalsAgainst;

        if (officialResult.home > officialResult.away) {
            homeTeam.points += 3;
        } else if (officialResult.home < officialResult.away) {
            awayTeam.points += 3;
        } else {
            homeTeam.points += 1;
            awayTeam.points += 1;
        }
    }

    return [...groupsMap.entries()]
        .sort(([leftName], [rightName]) => compareGroupNames(leftName, rightName))
        .map(([name, teamsMap]) => ({
            name: formatGroupName(name),
            teams: [...teamsMap.values()].sort(compareGroupTeams)
        }));
}

function buildKnockoutPhases() {
    return KNOCKOUT_PHASES.map((phase) => {
        const phaseMatches = state.matches
            .filter((match) => !match.group && isKnockoutMatch(match, phase));
        const officialMatches = phaseMatches.filter((match) => !isProjectedMatch(match));
        const matches = (officialMatches.length ? officialMatches : phaseMatches)
            .sort(compareMatches);

        return {
            key: phase.key,
            label: phase.label,
            matches,
            completedMatches: matches.filter((match) => isCompleteScore(getScore(state.results[match.id]))).length
        };
    }).filter((phase) => phase.matches.length > 0);
}

function buildGroupPickOptions() {
    const groupsMap = new Map();

    for (const match of state.matches) {
        if (!match.group) {
            continue;
        }

        const groupKey = normalizeGroupPickKey(match.group);

        if (!groupKey) {
            continue;
        }

        if (!groupsMap.has(groupKey)) {
            groupsMap.set(groupKey, {
                key: groupKey,
                label: formatGroupName(match.group),
                sortLabel: extractGroupLetter(match.group),
                teams: new Set()
            });
        }

        const group = groupsMap.get(groupKey);

        for (const teamName of [match.homeTeam, match.awayTeam]) {
            const normalized = String(teamName || "").trim();

            if (normalized && !isPlaceholderTeamName(normalized)) {
                group.teams.add(normalized);
            }
        }
    }

    return [...groupsMap.values()]
        .sort((left, right) => left.sortLabel.localeCompare(right.sortLabel, "en"))
        .map((group) => ({
            key: group.key,
            label: group.label,
            teams: [...group.teams].sort((left, right) => left.localeCompare(right, "es"))
        }))
        .filter((group) => group.teams.length > 0);
}

function normalizeGroupPickKey(groupName) {
    const normalized = String(groupName || "").trim();
    const existingKeyMatch = /^group-([A-L])$/i.exec(normalized);
    const labelMatch = /(?:Group|Grupo)\s+([A-L])/i.exec(normalized);
    const letter = existingKeyMatch?.[1] || labelMatch?.[1] || (/^[A-L]$/i.test(normalized) ? normalized : "");
    return letter ? `group-${letter.toUpperCase()}` : "";
}

function getAvailableTeams() {
    const teams = new Set();

    for (const match of state.matches) {
        for (const teamName of [match.homeTeam, match.awayTeam]) {
            const normalized = String(teamName || "").trim();

            if (!normalized || isPlaceholderTeamName(normalized)) {
                continue;
            }

            teams.add(normalized);
        }
    }

    return [...teams].sort((left, right) => left.localeCompare(right, "es"));
}

function buildSelectOptions(values, currentValue, placeholder) {
    const options = [`<option value="">${escapeHtml(placeholder)}</option>`];
    const normalizedCurrentValue = String(currentValue || "").trim();

    if (normalizedCurrentValue && !values.includes(normalizedCurrentValue)) {
        options.push(`<option value="${escapeHtml(normalizedCurrentValue)}">${escapeHtml(formatTeamOptionLabel(normalizedCurrentValue))}</option>`);
    }

    for (const value of values) {
        options.push(`<option value="${escapeHtml(value)}">${escapeHtml(formatTeamOptionLabel(value))}</option>`);
    }

    return options.join("");
}

function formatTeamOptionLabel(teamName) {
    const normalized = String(teamName || "").trim();
    return normalized;
}

function renderTeamLabel(teamName, className = "") {
    const normalized = String(teamName || "").trim();

    if (!normalized || normalized === "-") {
        return escapeHtml(normalized || "-");
    }

    if (isPlaceholderTeamName(normalized)) {
        const classAttribute = ["team-label", "team-label-placeholder", className].filter(Boolean).join(" ");
        return `<span class="${classAttribute}"><span class="team-name">${escapeHtml(normalized)}</span></span>`;
    }

    const classAttribute = ["team-label", className].filter(Boolean).join(" ");

    return `
        <span class="${classAttribute}">
            ${renderTeamBadge(normalized)}
            <span class="team-name">${escapeHtml(normalized)}</span>
        </span>
    `.trim();
}

function renderTeamBadge(teamName) {
    const badgeData = getTeamBadgeData(teamName);

    if (!badgeData) {
        return "";
    }

    const fallbackStyle = badgeData.imageUrl ? ' style="display:none"' : "";
    const imageHtml = badgeData.imageUrl
        ? `<img class="team-badge" src="${badgeData.imageUrl}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';">`
        : "";

    return `
        <span class="team-badge-frame" aria-hidden="true">
            ${imageHtml}
            <span class="team-badge-fallback"${fallbackStyle}>${escapeHtml(badgeData.fallbackLabel)}</span>
        </span>
    `.trim();
}

function getFavoriteTeamPoints(teamName) {
    const normalized = String(teamName || "").trim();

    if (!normalized) {
        return 0;
    }

    let total = 0;

    for (const match of state.matches) {
        const officialResult = getScore(state.results[match.id]);

        if (!isCompleteScore(officialResult)) {
            continue;
        }

        if (match.homeTeam !== normalized && match.awayTeam !== normalized) {
            continue;
        }

        if (officialResult.home === officialResult.away) {
            total += 1;
            continue;
        }

        const teamWon = (match.homeTeam === normalized && officialResult.home > officialResult.away)
            || (match.awayTeam === normalized && officialResult.away > officialResult.home);

        if (teamWon) {
            total += 3;
        }
    }

    return total;
}

function getPlayerGoalPoints(playerName) {
    const normalizedPlayerName = normalizePersonName(playerName);

    if (!normalizedPlayerName) {
        return 0;
    }

    return getTournamentGoalScorers()
        .filter((scorerName) => normalizePersonName(scorerName) === normalizedPlayerName)
        .length * PLAYER_GOAL_BONUS_POINTS;
}

function getStagePickPoints(stagePicks) {
    const normalizedStagePicks = normalizeStagePicks(stagePicks);
    const semiFinalTeams = getTeamsInKnockoutPhase("semi-finals");
    const finalTeams = getTeamsInKnockoutPhase("final");
    let total = 0;

    for (const teamName of normalizedStagePicks.semiFinalists) {
        if (semiFinalTeams.has(normalizePersonName(teamName))) {
            total += 2;
        }
    }

    for (const teamName of normalizedStagePicks.finalists) {
        if (finalTeams.has(normalizePersonName(teamName))) {
            total += 2;
        }
    }

    return total;
}

function getTeamsInKnockoutPhase(phaseKey) {
    const phase = KNOCKOUT_PHASES.find((entry) => entry.key === phaseKey);
    const teams = new Set();

    if (!phase) {
        return teams;
    }

    for (const match of state.matches) {
        if (!isKnockoutMatch(match, phase)) {
            continue;
        }

        for (const teamName of [match.homeTeam, match.awayTeam]) {
            if (!isPlaceholderTeamName(teamName)) {
                teams.add(normalizePersonName(teamName));
            }
        }
    }

    return teams;
}

function getChampionTeam() {
    const finalPhase = KNOCKOUT_PHASES.find((phase) => phase.key === "final");

    if (!finalPhase) {
        return "";
    }

    const finalMatch = state.matches
        .filter((match) => isKnockoutMatch(match, finalPhase))
        .find((match) => isCompleteScore(getScore(state.results[match.id])));

    if (!finalMatch) {
        return "";
    }

    const result = getScore(state.results[finalMatch.id]);

    if (!isCompleteScore(result)) {
        return "";
    }

    if (result.home > result.away) {
        return finalMatch.homeTeam;
    }

    if (result.away > result.home) {
        return finalMatch.awayTeam;
    }

    return "";
}

function getChampionPickPoints(teamName) {
    const normalizedTeamName = normalizePersonName(teamName);
    const championTeamName = normalizePersonName(getChampionTeam());

    if (!normalizedTeamName || !championTeamName) {
        return 0;
    }

    return normalizedTeamName === championTeamName ? 5 : 0;
}

function parseGoalScorersInput(value) {
    return normalizeGoalScorers(String(value || "").split(/[\r\n,;]+/));
}

function getTournamentGoalScorers() {
    const matchScorers = Object.values(state.matchScorers || {}).flatMap((scorers) => Array.isArray(scorers) ? scorers : []);
    return normalizeGoalScorers([...state.goalScorers, ...matchScorers]);
}

function normalizeMatchScorers(value) {
    if (!isPlainObject(value)) {
        return {};
    }

    const normalized = {};

    for (const [matchId, scorers] of Object.entries(value)) {
        const normalizedScorers = normalizeGoalScorers(Array.isArray(scorers) ? scorers : String(scorers || "").split(/[\r\n,;]+/));

        if (!normalizedScorers.length) {
            continue;
        }

        normalized[String(matchId)] = normalizedScorers;
    }

    return normalized;
}

function normalizeGoalScorers(values) {
    const normalizedValues = [];

    for (const value of values) {
        const trimmed = String(value || "").trim().replace(/\s+/g, " ");
        const normalizedKey = normalizePersonName(trimmed);

        if (!normalizedKey) {
            continue;
        }

        normalizedValues.push(trimmed);
    }

    return normalizedValues;
}

function pruneMatchScorers(matchScorers, allowedMatchIds) {
    const nextMatchScorers = {};

    for (const [matchId, scorers] of Object.entries(matchScorers || {})) {
        if (!allowedMatchIds.has(matchId)) {
            continue;
        }

        const normalizedScorers = normalizeGoalScorers(Array.isArray(scorers) ? scorers : []);

        if (!normalizedScorers.length) {
            continue;
        }

        nextMatchScorers[matchId] = normalizedScorers;
    }

    return nextMatchScorers;
}

function normalizePersonName(value) {
    return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function isKnockoutMatch(match, phase) {
    return phase.patterns.some((pattern) => pattern.test(match.stage));
}

function getKnockoutPhaseKey(match) {
    return KNOCKOUT_PHASES.find((phase) => isKnockoutMatch(match, phase))?.key || "";
}

function isProjectedMatch(match) {
    return match?.source === "projected" || String(match?.id || "").startsWith("projected-");
}

function isPlaceholderTeamName(teamName) {
    const normalized = String(teamName || "").trim();
    return !normalized
        || /^por definir$/i.test(normalized)
        || /^(ganador|perdedor)\s+\d+$/i.test(normalized)
        || /^\d+[A-L](?:\s*\/\s*\d+[A-L])*$/.test(normalized)
        || /^\d+[A-L](?:\s*\/\s*[A-L])+$/.test(normalized)
        || /^\d+[A-L]\s*\/\s*\d+[A-L]\s*\/\s*\d+[A-L]$/.test(normalized);
}

function isParticipantPredictionView() {
    return uiState.currentView === "participant";
}

function ensureGroupTeam(teamsMap, teamName) {
    if (!teamsMap.has(teamName)) {
        teamsMap.set(teamName, {
            name: teamName,
            played: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            goalDifference: 0,
            points: 0
        });
    }
}

function prunePredictions(predictions, allowedMatchIds) {
    const nextPredictions = {};

    for (const [participantId, participantPredictions] of Object.entries(predictions)) {
        const filteredEntries = Object.entries(participantPredictions || {}).filter(([matchId]) => allowedMatchIds.has(matchId));

        if (filteredEntries.length) {
            nextPredictions[participantId] = Object.fromEntries(filteredEntries);
        }
    }

    return nextPredictions;
}

function pruneResults(results, allowedMatchIds) {
    const nextResults = {};

    for (const [matchId, result] of Object.entries(results || {})) {
        if (!allowedMatchIds.has(matchId)) {
            continue;
        }

        const normalizedResult = getScore(result);

        if (isCompleteScore(normalizedResult)) {
            nextResults[matchId] = normalizedResult;
        }
    }

    return nextResults;
}

function pruneLockedMatches(lockedMatches, allowedMatchIds) {
    const nextLockedMatches = {};

    for (const [matchId, isLocked] of Object.entries(lockedMatches || {})) {
        if (allowedMatchIds.has(matchId) && isLocked) {
            nextLockedMatches[matchId] = true;
        }
    }

    return nextLockedMatches;
}

function getScore(rawScore = {}) {
    return {
        home: normalizeScoreValue(rawScore.home),
        away: normalizeScoreValue(rawScore.away)
    };
}

function normalizeScoreValue(value) {
    if (value === "" || value === null || value === undefined) {
        return "";
    }

    const parsed = Number(value);

    if (!Number.isInteger(parsed) || parsed < 0) {
        return "";
    }

    return parsed;
}

function parseScoreInput(value) {
    if (value === "") {
        return "";
    }

    const parsed = Number(value);

    if (!Number.isInteger(parsed) || parsed < 0) {
        return null;
    }

    return parsed;
}

function isCompleteScore(score) {
    return Number.isInteger(score.home) && score.home >= 0
        && Number.isInteger(score.away) && score.away >= 0;
}

function getOutcome(score) {
    if (score.home === score.away) {
        return "draw";
    }

    return score.home > score.away ? "home" : "away";
}

function compareMatches(left, right) {
    const leftPhaseOrder = getKnockoutPhaseOrder(left);
    const rightPhaseOrder = getKnockoutPhaseOrder(right);
    const hasLeftKnockoutOrder = leftPhaseOrder !== Number.MAX_SAFE_INTEGER;
    const hasRightKnockoutOrder = rightPhaseOrder !== Number.MAX_SAFE_INTEGER;

    if (hasLeftKnockoutOrder && hasRightKnockoutOrder && leftPhaseOrder !== rightPhaseOrder) {
        return leftPhaseOrder - rightPhaseOrder;
    }

    const leftTime = left.kickoff ? new Date(left.kickoff).getTime() : Number.MAX_SAFE_INTEGER;
    const rightTime = right.kickoff ? new Date(right.kickoff).getTime() : Number.MAX_SAFE_INTEGER;

    if (leftTime !== rightTime) {
        return leftTime - rightTime;
    }

    return left.stage.localeCompare(right.stage, "es")
        || left.homeTeam.localeCompare(right.homeTeam, "es");
}

function compareGroupNames(left, right) {
    return extractGroupLetter(left).localeCompare(extractGroupLetter(right), "en");
}

function compareGroupTeams(left, right) {
    return right.points - left.points
        || right.goalDifference - left.goalDifference
        || right.goalsFor - left.goalsFor
        || left.name.localeCompare(right.name, "es");
}

function extractGroupLetter(groupName) {
    const match = /Group\s+([A-L])/i.exec(groupName);
    return match ? match[1].toUpperCase() : groupName;
}

function isMatchLocked(match) {
    if (state.lockedMatches[match.id]) {
        return true;
    }

    if (match.source === "fifa") {
        const kickoffTime = match.kickoff ? new Date(match.kickoff).getTime() : Number.MAX_SAFE_INTEGER;
        return Number(match.statusCode) === 0 || kickoffTime <= Date.now();
    }

    return false;
}

function formatStage(match) {
    if (match.group) {
        return `${formatGroupName(match.group)} / ${formatStageName(match.stage)}`;
    }

    return formatStageName(match.stage);
}

function formatMatchStatus(match) {
    if (match.source !== "fifa") {
        return isMatchLocked(match) ? "Cerrado" : "Abierto";
    }

    switch (Number(match.statusCode)) {
        case 0:
            return "Finalizado";
        case 1:
            return isMatchLocked(match) ? "En juego o bloqueado" : "Programado";
        default:
            return isMatchLocked(match) ? "Bloqueado" : "Programado";
    }
}

function formatVenue(match) {
    const pieces = [match.stadium, match.city].filter(Boolean);

    if (!pieces.length) {
        return '<span class="venue-text empty">Pendiente</span>';
    }

    return `<span class="venue-text">${escapeHtml(pieces.join(", "))}</span>`;
}

function formatVenueText(match) {
    const pieces = [match.stadium, match.city].filter(Boolean);
    return pieces.length ? pieces.join(", ") : "Sede pendiente";
}

function getKnockoutPhaseOrder(match) {
    const phaseIndex = KNOCKOUT_PHASES.findIndex((phase) => isKnockoutMatch(match, phase));
    return phaseIndex === -1 ? Number.MAX_SAFE_INTEGER : phaseIndex;
}

function getTeamBadgeData(teamName) {
    const normalized = normalizeTeamKey(teamName);
    const imageUrl = TEAM_FEDERATION_BADGE_MAP[normalized] || "";
    const emoji = TEAM_FLAG_MAP[normalized] || "";
    const code = TEAM_FLAG_CODE_OVERRIDES[normalized] || emojiFlagToCountryCode(emoji) || buildTeamBadgeFallbackCode(normalized);

    if (!imageUrl && !code) {
        return null;
    }

    return {
        code,
        imageUrl,
        fallbackLabel: code ? code.toUpperCase() : emoji
    };
}

function buildTeamBadgeFallbackCode(normalizedTeamName) {
    const words = String(normalizedTeamName || "").split(" ").filter(Boolean);

    if (!words.length) {
        return "";
    }

    if (words.length === 1) {
        return words[0].slice(0, 3);
    }

    return words.slice(0, 3).map((word) => word[0]).join("");
}

function normalizeTeamKey(value) {
    return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/&/g, " and ")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .trim()
        .replace(/\s+/g, " ");
}

function emojiFlagToCountryCode(flag) {
    const codePoints = Array.from(String(flag || ""));

    if (codePoints.length !== 2) {
        return "";
    }

    const letters = codePoints.map((character) => {
        const point = character.codePointAt(0);

        if (!point || point < 0x1f1e6 || point > 0x1f1ff) {
            return "";
        }

        return String.fromCharCode(65 + point - 0x1f1e6);
    });

    return letters.every(Boolean) ? letters.join("").toLowerCase() : "";
}

function formatStageName(stageName) {
    const normalized = String(stageName || "").trim();

    if (!normalized) {
        return "Etapa por definir";
    }

    if (/group\s+stage/i.test(normalized)) {
        return "Fase de grupos";
    }

    const knockoutPhase = KNOCKOUT_PHASES.find((phase) => phase.patterns.some((pattern) => pattern.test(normalized)));
    return knockoutPhase ? knockoutPhase.label : normalized;
}

function formatGroupName(groupName) {
    const normalized = String(groupName || "").trim();
    const match = /group\s+([a-l])/i.exec(normalized);

    if (!match) {
        return normalized || "Grupo";
    }

    return `Grupo ${match[1].toUpperCase()}`;
}

function formatKickoff(kickoff) {
    if (!kickoff) {
        return "Sin fecha";
    }

    const date = new Date(kickoff);

    if (Number.isNaN(date.getTime())) {
        return "Sin fecha";
    }

    return new Intl.DateTimeFormat("es-PA", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit"
    }).format(date);
}

function renderPredictionInput({ matchId, side, value, disabled = false, extraClass = "" }) {
    const className = ["score-input", extraClass].filter(Boolean).join(" ");

    return `
        <input
            type="number"
            class="${className}"
            min="0"
            step="1"
            data-scope="prediction"
            data-match-id="${matchId}"
            data-side="${side}"
            value="${value === "" ? "" : value}"
            ${disabled ? "disabled" : ""}
        >
    `.trim();
}

function formatScoreValue(value) {
    return Number.isInteger(value) && value >= 0 ? String(value) : "-";
}

function formatScorePair(score, emptyLabel = "-") {
    return isCompleteScore(score)
        ? `${formatScoreValue(score.home)} - ${formatScoreValue(score.away)}`
        : emptyLabel;
}

function formatDateForFile(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}-${hours}${minutes}`;
}

function downloadBlobFile(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
}

function buildLeaderboardWorkbookBlob(rows) {
    const totalParticipants = state.participants.length;
    const totalMatches = state.matches.length;
    const completedMatches = countOfficialResults();
    const totalPredictionsSaved = countAllPredictions();
    const exportedAt = new Date();
    const workbookFiles = [
        {
            name: "[Content_Types].xml",
            content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
    <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
    <Default Extension="xml" ContentType="application/xml"/>
    <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
    <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
    <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
</Types>`
        },
        {
            name: "_rels/.rels",
            content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
    <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`
        },
        {
            name: "xl/workbook.xml",
            content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
    <bookViews>
        <workbookView activeTab="0"/>
    </bookViews>
    <sheets>
        <sheet name="Tabla general" sheetId="1" r:id="rId1"/>
    </sheets>
</workbook>`
        },
        {
            name: "xl/_rels/workbook.xml.rels",
            content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
    <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
    <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`
        },
        {
            name: "xl/styles.xml",
            content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
    <fonts count="4">
        <font>
            <sz val="11"/>
            <name val="Aptos"/>
        </font>
        <font>
            <b/>
            <sz val="11"/>
            <name val="Aptos"/>
        </font>
        <font>
            <b/>
            <sz val="16"/>
            <name val="Aptos Display"/>
        </font>
        <font>
            <sz val="10"/>
            <color rgb="FF5F6B7A"/>
            <name val="Aptos"/>
        </font>
    </fonts>
    <fills count="7">
        <fill>
            <patternFill patternType="none"/>
        </fill>
        <fill>
            <patternFill patternType="gray125"/>
        </fill>
        <fill>
            <patternFill patternType="solid">
                <fgColor rgb="FFDCEBFA"/>
                <bgColor indexed="64"/>
            </patternFill>
        </fill>
        <fill>
            <patternFill patternType="solid">
                <fgColor rgb="FFF4F7FB"/>
                <bgColor indexed="64"/>
            </patternFill>
        </fill>
        <fill>
            <patternFill patternType="solid">
                <fgColor rgb="FF1F4E78"/>
                <bgColor indexed="64"/>
            </patternFill>
        </fill>
        <fill>
            <patternFill patternType="solid">
                <fgColor rgb="FFEAF2FF"/>
                <bgColor indexed="64"/>
            </patternFill>
        </fill>
        <fill>
            <patternFill patternType="solid">
                <fgColor rgb="FFF9FBFD"/>
                <bgColor indexed="64"/>
            </patternFill>
        </fill>
    </fills>
    <borders count="2">
        <border>
            <left/>
            <right/>
            <top/>
            <bottom/>
            <diagonal/>
        </border>
        <border>
            <left style="thin"/>
            <right style="thin"/>
            <top style="thin"/>
            <bottom style="thin"/>
            <diagonal/>
        </border>
    </borders>
    <cellStyleXfs count="1">
        <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
    </cellStyleXfs>
    <cellXfs count="10">
        <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
        <xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
            <alignment horizontal="center"/>
        </xf>
        <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1">
            <alignment horizontal="left" vertical="center"/>
        </xf>
        <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1">
            <alignment horizontal="left" vertical="center"/>
        </xf>
        <xf numFmtId="0" fontId="1" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
            <alignment horizontal="center" vertical="center"/>
        </xf>
        <xf numFmtId="0" fontId="1" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
            <alignment horizontal="center" vertical="center"/>
        </xf>
        <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1">
            <alignment horizontal="left" vertical="center"/>
        </xf>
        <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFill="1" applyBorder="1" applyAlignment="1">
            <alignment horizontal="left" vertical="center"/>
        </xf>
        <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1">
            <alignment horizontal="center" vertical="center"/>
        </xf>
        <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFill="1" applyBorder="1" applyAlignment="1">
            <alignment horizontal="center" vertical="center"/>
        </xf>
    </cellXfs>
    <cellStyles count="1">
        <cellStyle name="Normal" xfId="0" builtinId="0"/>
    </cellStyles>
</styleSheet>`
        },
        {
            name: "xl/worksheets/sheet1.xml",
            content: buildLeaderboardWorksheetXml(rows, {
                totalParticipants,
                totalMatches,
                completedMatches,
                totalPredictionsSaved,
                exportedAt
            })
        }
    ];

    return createZipBlob(workbookFiles, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
}

function buildLeaderboardWorksheetXml(rows, summary) {
    const tableHeaderRowNumber = 7;
    const headerCells = [
        "Pos.",
        "Participante",
        "Pronosticos guardados",
        "Exactos",
        "Signos",
        "Bonus campeon",
        "Bonus fases",
        "Bonus goleador",
        "Bonus equipo",
        "Bonus total",
        "Puntos totales",
        "Jugador elegido"
    ];
    const exportDateLabel = formatExcelExportDate(summary.exportedAt);
    const sheetRows = [
        ["Polla Mundialista - Tabla de posiciones"],
        [`Generado el ${exportDateLabel}`],
        [],
        ["Participantes", "Partidos con resultado", "Pronosticos guardados"],
        [
            summary.totalParticipants,
            `${summary.completedMatches}/${summary.totalMatches}`,
            summary.totalPredictionsSaved
        ],
        [],
        headerCells,
        ...rows.map((row) => [
            row.rank,
            row.participantName,
            row.predictionsSaved,
            row.exactHits,
            row.outcomeHits,
            row.championPoints,
            row.stagePickPoints,
            row.playerGoalPoints,
            row.favoriteTeamPoints,
            row.championPoints + row.stagePickPoints + row.playerGoalPoints + row.favoriteTeamPoints,
            row.totalPoints,
            row.playerPick || "-"
        ])
    ];
    const lastColumn = columnIndexToName(headerCells.length - 1);
    const lastRowNumber = sheetRows.length;
    const rowsXml = sheetRows.map((cells, rowIndex) => {
        const rowNumber = rowIndex + 1;
        const cellsXml = cells.map((value, cellIndex) => buildWorksheetCellXml({
            rowNumber,
            columnIndex: cellIndex,
            value,
            styleId: getLeaderboardCellStyleId(rowNumber, cellIndex)
        })).join("");

        const customHeight = rowNumber === 1 ? ' ht="24" customHeight="1"' : "";
        return `<row r="${rowNumber}"${customHeight}>${cellsXml}</row>`;
    }).join("");
    const tableStartCell = `A${tableHeaderRowNumber}`;
    const tableEndCell = `${lastColumn}${lastRowNumber}`;

    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
    <dimension ref="A1:${lastColumn}${lastRowNumber}"/>
    <sheetViews>
        <sheetView workbookViewId="0">
            <pane ySplit="${tableHeaderRowNumber}" topLeftCell="A${tableHeaderRowNumber + 1}" activePane="bottomLeft" state="frozen"/>
        </sheetView>
    </sheetViews>
    <sheetFormatPr defaultRowHeight="15"/>
    <cols>
        <col min="1" max="1" width="8" customWidth="1"/>
        <col min="2" max="2" width="26" customWidth="1"/>
        <col min="3" max="3" width="18" customWidth="1"/>
        <col min="4" max="11" width="14" customWidth="1"/>
        <col min="12" max="12" width="24" customWidth="1"/>
    </cols>
    <sheetData>${rowsXml}</sheetData>
    <mergeCells count="2">
        <mergeCell ref="A1:${lastColumn}1"/>
        <mergeCell ref="A2:${lastColumn}2"/>
    </mergeCells>
    <autoFilter ref="${tableStartCell}:${tableEndCell}"/>
</worksheet>`;
}

function getLeaderboardCellStyleId(rowNumber, columnIndex) {
    if (rowNumber === 1) {
        return 2;
    }

    if (rowNumber === 2) {
        return 3;
    }

    if (rowNumber === 4) {
        return 4;
    }

    if (rowNumber === 5) {
        return 5;
    }

    if (rowNumber === 7) {
        return 1;
    }

    if (rowNumber > 7) {
        const isStripedRow = rowNumber % 2 === 1;
        const isTextColumn = columnIndex === 1 || columnIndex === 11;

        if (isTextColumn) {
            return isStripedRow ? 7 : 6;
        }

        return isStripedRow ? 9 : 8;
    }

    return 0;
}

function formatExcelExportDate(date) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
        return "-";
    }

    return date.toLocaleString("es-PA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    });
}

function buildWorksheetCellXml({ rowNumber, columnIndex, value, styleId = 0 }) {
    const cellReference = `${columnIndexToName(columnIndex)}${rowNumber}`;
    const styleAttribute = styleId > 0 ? ` s="${styleId}"` : "";

    if (typeof value === "number" && Number.isFinite(value)) {
        return `<c r="${cellReference}"${styleAttribute}><v>${value}</v></c>`;
    }

    return `<c r="${cellReference}" t="inlineStr"${styleAttribute}><is><t xml:space="preserve">${escapeXml(value)}</t></is></c>`;
}

function columnIndexToName(columnIndex) {
    let current = columnIndex + 1;
    let label = "";

    while (current > 0) {
        const remainder = (current - 1) % 26;
        label = String.fromCharCode(65 + remainder) + label;
        current = Math.floor((current - 1) / 26);
    }

    return label;
}

function createZipBlob(files, mimeType) {
    const encoder = new TextEncoder();
    const zipParts = [];
    const centralDirectoryParts = [];
    const timestamp = getZipTimestamp(new Date());
    let localHeaderOffset = 0;

    for (const file of files) {
        const fileNameBytes = encoder.encode(file.name);
        const contentBytes = file.content instanceof Uint8Array ? file.content : encoder.encode(file.content);
        const crc32 = computeCrc32(contentBytes);

        const localHeader = new Uint8Array(30 + fileNameBytes.length);
        const localHeaderView = new DataView(localHeader.buffer);
        localHeaderView.setUint32(0, 0x04034b50, true);
        localHeaderView.setUint16(4, 20, true);
        localHeaderView.setUint16(6, 0, true);
        localHeaderView.setUint16(8, 0, true);
        localHeaderView.setUint16(10, timestamp.time, true);
        localHeaderView.setUint16(12, timestamp.date, true);
        localHeaderView.setUint32(14, crc32, true);
        localHeaderView.setUint32(18, contentBytes.length, true);
        localHeaderView.setUint32(22, contentBytes.length, true);
        localHeaderView.setUint16(26, fileNameBytes.length, true);
        localHeaderView.setUint16(28, 0, true);
        localHeader.set(fileNameBytes, 30);

        const centralDirectoryHeader = new Uint8Array(46 + fileNameBytes.length);
        const centralDirectoryView = new DataView(centralDirectoryHeader.buffer);
        centralDirectoryView.setUint32(0, 0x02014b50, true);
        centralDirectoryView.setUint16(4, 20, true);
        centralDirectoryView.setUint16(6, 20, true);
        centralDirectoryView.setUint16(8, 0, true);
        centralDirectoryView.setUint16(10, 0, true);
        centralDirectoryView.setUint16(12, timestamp.time, true);
        centralDirectoryView.setUint16(14, timestamp.date, true);
        centralDirectoryView.setUint32(16, crc32, true);
        centralDirectoryView.setUint32(20, contentBytes.length, true);
        centralDirectoryView.setUint32(24, contentBytes.length, true);
        centralDirectoryView.setUint16(28, fileNameBytes.length, true);
        centralDirectoryView.setUint16(30, 0, true);
        centralDirectoryView.setUint16(32, 0, true);
        centralDirectoryView.setUint16(34, 0, true);
        centralDirectoryView.setUint16(36, 0, true);
        centralDirectoryView.setUint32(38, 0, true);
        centralDirectoryView.setUint32(42, localHeaderOffset, true);
        centralDirectoryHeader.set(fileNameBytes, 46);

        zipParts.push(localHeader, contentBytes);
        centralDirectoryParts.push(centralDirectoryHeader);
        localHeaderOffset += localHeader.length + contentBytes.length;
    }

    const centralDirectorySize = centralDirectoryParts.reduce((total, part) => total + part.length, 0);
    const endOfCentralDirectory = new Uint8Array(22);
    const endOfCentralDirectoryView = new DataView(endOfCentralDirectory.buffer);
    endOfCentralDirectoryView.setUint32(0, 0x06054b50, true);
    endOfCentralDirectoryView.setUint16(4, 0, true);
    endOfCentralDirectoryView.setUint16(6, 0, true);
    endOfCentralDirectoryView.setUint16(8, files.length, true);
    endOfCentralDirectoryView.setUint16(10, files.length, true);
    endOfCentralDirectoryView.setUint32(12, centralDirectorySize, true);
    endOfCentralDirectoryView.setUint32(16, localHeaderOffset, true);
    endOfCentralDirectoryView.setUint16(20, 0, true);

    return new Blob([...zipParts, ...centralDirectoryParts, endOfCentralDirectory], { type: mimeType });
}

function getZipTimestamp(date) {
    const safeYear = Math.max(date.getFullYear(), 1980);

    return {
        time: (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2),
        date: ((safeYear - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate()
    };
}

function createCrc32Table() {
    const table = new Uint32Array(256);

    for (let index = 0; index < table.length; index += 1) {
        let current = index;

        for (let bit = 0; bit < 8; bit += 1) {
            current = (current & 1) ? (0xedb88320 ^ (current >>> 1)) : (current >>> 1);
        }

        table[index] = current >>> 0;
    }

    return table;
}

function computeCrc32(bytes) {
    let crc = 0xffffffff;

    for (const byte of bytes) {
        crc = CRC32_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
    }

    return (crc ^ 0xffffffff) >>> 0;
}

function formatSyncStatus() {
    if (uiState.syncingFifa) {
        return "Consultando la API oficial de FIFA...";
    }

    if (state.source.syncError) {
        return `Ultimo error: ${state.source.syncError}`;
    }

    if (state.source.lastSync) {
        return `Ultima sincronizacion: ${formatSyncTimestamp(state.source.lastSync)}`;
    }

    return "Sin sincronizar todavía.";
}

function formatSyncTimestamp(value) {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return value;
    }

    return new Intl.DateTimeFormat("es-PA", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit"
    }).format(date);
}

function persistAdminSession(isActive) {
    try {
        if (isActive) {
            sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
        } else {
            sessionStorage.removeItem(ADMIN_SESSION_KEY);
        }
    } catch (error) {
        // Ignore session storage failures and continue with in-memory state.
    }
}

function persistParticipantSession(participantId) {
    try {
        if (participantId) {
            sessionStorage.setItem(PARTICIPANT_SESSION_KEY, participantId);
        } else {
            sessionStorage.removeItem(PARTICIPANT_SESSION_KEY);
        }
    } catch (error) {
        // Ignore session storage failures and continue with in-memory state.
    }
}

function pushFlashNotice(message, type = "neutral") {
    try {
        sessionStorage.setItem(FLASH_NOTICE_KEY, JSON.stringify({ message, type }));
    } catch (error) {
        // Ignore session storage failures and continue without cross-page notices.
    }
}

function consumeFlashNotice() {
    try {
        const raw = sessionStorage.getItem(FLASH_NOTICE_KEY);

        if (!raw) {
            return;
        }

        sessionStorage.removeItem(FLASH_NOTICE_KEY);
        const notice = JSON.parse(raw);

        if (notice?.message) {
            setNotice(notice.message, typeof notice.type === "string" ? notice.type : "neutral");
        }
    } catch (error) {
        // Ignore malformed flash notices.
    }
}

function redirectToPage(page) {
    window.location.replace(page);
}

function focusElement(selector) {
    const element = document.querySelector(selector);

    if (!(element instanceof HTMLElement)) {
        return false;
    }

    if ("disabled" in element && element.disabled) {
        return false;
    }

    if (!element.getClientRects().length) {
        return false;
    }

    element.focus({ preventScroll: true });
    return document.activeElement === element;
}

function setNotice(message, type = "neutral") {
    if (!refs.appNotice) {
        return;
    }

    refs.appNotice.textContent = message;
    refs.appNotice.className = `notice notice-${type}`;
}

async function saveState(message, type = "success") {
    try {
        persistStateLocally();

        if (message) {
            setNotice(message, type);
        }
    } catch (error) {
        setNotice("No se pudo guardar en localStorage. Revisa el espacio disponible del navegador.", "danger");
    }

    if (useRemoteState) {
        await saveRemoteState("", "").catch(() => {
            // Silently fail if backend is not available
        });
    }
}

function persistStateLocallySafely() {
    try {
        persistStateLocally();
    } catch (error) {
        // Keep the live preview responsive even if localStorage is unavailable.
    }
}

function persistStateLocally() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function escapeXml(value) {
    return escapeHtml(value).replaceAll("\r\n", "\n").replaceAll("\n", "&#10;");
}

function createId(prefix) {
    return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function toNonNegativeInt(value, fallback) {
    const parsed = Number(value);
    return Number.isInteger(parsed) && parsed >= 0 ? parsed : fallback;
}

function isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function extractLocalizedText(entries) {
    if (!Array.isArray(entries) || !entries.length) {
        return "";
    }

    return String(entries[0]?.Description || "").trim();
}

window.initPollaApp = initApp;
window.initPollaPage = initPollaPage;
