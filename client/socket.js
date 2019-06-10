socket.on('my player', data => {
	player = new Player(data.id, data.username, data.team);
});

socket.on('new player', data => {
	let newPlayers = [];
	for(i in data){
		if(data[i].id != player.id){
			newPlayers.push(data[i]);
		};
	};
	players = newPlayers;
	connected_players.innerHTML = '';
	for(i in players){
		connected_players.innerHTML += '<h4>'+players[i].username+' conectou</h4>';
	};
});

socket.on('start warning', () => {
	player.spawn();
	socket.emit('update player', {id: player.id, x: player.x, y: player.y, r: player.r});
	connected_players.innerHTML += '<h3>O jogo vai começar, prepare-se!</h3>';
});

socket.on('start game', () => {
	GAMESTATE.playing();
});

socket.on('update players', data => {
	for(i in players){
		if(data.id == players[i].id){
			players[i].x = data.x;
			players[i].y = data.y;
			players[i].r = data.r;
		};
	};
});

socket.on('user left room', (data) => {
	let connectedPlayers = [];
	for(i in players){
		if(data.id != players[i].id){
			connectedPlayers.push(players[i]);
		};
	};
	players = connectedPlayers;
	connected_players.innerHTML = '';
	for(i in players){
		connected_players.innerHTML += '<h4>'+players[i].username+' conectou</h4>';
	};
});

socket.on('user left', (data) => {
	for(i in players){
		if(data.id == players[i].id){
			players[i].connection = data.connection;
		};
	};
});