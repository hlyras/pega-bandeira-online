function enterRoom() {
	socket.emit('join room', player);
	game_start_btn.disabled = true;
	GAMESTATE.loadGame();
	game_start_btn.disabled = false;
};