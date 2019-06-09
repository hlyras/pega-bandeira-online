function enterRoom() {
	socket.emit('join room', player);
	gameStartBtn.disabled = true;
	startGame();
	gameStartBtn.disabled = false;
};

function startGame() {
	player.spawn();
	GAMESTATE.playing();
};