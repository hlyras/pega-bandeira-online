const playersController = {
	exe: () => {

	},
	render: () => {
		for(i in players){
			context.fillStyle = '#fc2828';
			context.fillText(players[i].username, players[i].x - players[i].r * 2, players[i].y - players[i].r * 2);
			context.beginPath();
			context.arc(players[i].x, players[i].y, players[i].r, 0, 2 * Math.PI);
			context.stroke();
		};
	}
};