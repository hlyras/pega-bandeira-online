socket.on('my player', data => {
	player = new Player(data.id, data.username);
});

socket.on('new player', data => {
	let newPlayers = [];
	for(i in data){
		if(data[i].id != player.id){
			newPlayers.push(data[i]);
		};
	};
	players = newPlayers;
});

socket.on('update players', data => {
	for(i in players){
		if(data.id == players[i].id){
			players[i].x = data.x
			players[i].y = data.y
		};
	};
});

socket.on('start game', () => {

})