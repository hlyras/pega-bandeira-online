window.addEventListener('keydown', (e) => {
	if(ENGINESTATE.status == 'playing'){
		player.onKeyDown(e.keyCode);
	};
});

window.addEventListener('keyup', (e) => {
	if(ENGINESTATE.status == 'playing'){
		player.onKeyUp(e.keyCode);
	};
});