var player;
var players = [];
const assets = {
	db: [],
	loaded: 0
};

// setting views elements
const LOAD_ENGINE = document.getElementById('load-engine');
const LOGIN = document.getElementById('login');

const MAIN_MENU = document.getElementById('main-menu');
const game_start_btn = document.getElementById('game-start-btn');

const PAUSE_MENU = document.getElementById('pause-menu');

const LOAD_GAME = document.getElementById('load-game');
const connected_players = document.getElementById('connected-players');

const GAME_HUD = document.getElementById('game-HUD');

const GAME_OVER = document.getElementById('game-over');