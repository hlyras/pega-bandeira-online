const GAMESTATE = {
	loadGame: () => {
		// Start and stop engine to create instance
		ENGINE.loop()
		cancelAnimationFrame(animation);
		// show loading page
		let loadingTime = 1;
		let loadAnimation = 0;
		document.getElementById('load-msg').innerHTML += "Loading.";
		let interval = setInterval(() => {
			--loadingTime;
			if(loadAnimation<2){
				document.getElementById('load-msg').innerHTML += "."
				++loadAnimation;
			} else {
				document.getElementById('load-msg').innerHTML = "Loading."
				loadAnimation = 0;
			};
			if(loadingTime<1){
				clearInterval(interval);
				GAMESTATE.login();
			};
		}, 1000);
	},
	login: () => {
		cancelAnimationFrame(animation);
		
		LOAD_GAME.style.display = 'none';
		LOGIN.style.display = 'block';
		CANVAS.style.display = 'none';
		MAIN_MENU.style.display = 'none';
		PAUSE_MENU.style.display = 'none';
		GAME_OVER.style.display = 'none';
	},
	menu: () => {
		cancelAnimationFrame(animation);
		
		LOAD_GAME.style.display = 'none';
		LOGIN.style.display = 'none';
		CANVAS.style.display = 'none';
		MAIN_MENU.style.display = 'block';
		PAUSE_MENU.style.display = 'none';
		GAME_OVER.style.display = 'none';
	},
	playing: () => {
		ENGINESTATE.status = 'playing';
		
		LOAD_GAME.style.display = 'none';
		LOGIN.style.display = 'none';
		CANVAS.style.display = 'block';
		MAIN_MENU.style.display = 'none';
		PAUSE_MENU.style.display = 'none';
		GAME_OVER.style.display = 'none';
		
		cancelAnimationFrame(animation);
		ENGINE.loop();
	},
	paused: () => {
		if(ENGINESTATE.status == 'playing'){
			ENGINESTATE.status = 'paused';
			
			LOAD_GAME.style.display = 'none';
			LOGIN.style.display = 'none';
			CANVAS.style.display = 'block';
			MAIN_MENU.style.display = 'none';
			PAUSE_MENU.style.display = 'block';
			GAME_OVER.style.display = 'none';
		} else if(ENGINESTATE.status == 'paused'){
			GAMESTATE.playing();
		};
	},
	over: () => {
		cancelAnimationFrame(animation);

		LOAD_GAME.style.display = 'none';
		LOGIN.style.display = 'none';
		CANVAS.style.display = 'block';
		MAIN_MENU.style.display = 'none';
		PAUSE_MENU.style.display = 'none';
		GAME_OVER.style.display = 'block';

		setTimeout(() => {
			GAMESTATE.menu();
		}, 2000);
	}
		
};

GAMESTATE.loadGame();