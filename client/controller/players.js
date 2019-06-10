const playersController = {
	exe: () => {

	},
	render: () => {
		for(i in players){
			if(players[i].team == 'TEAM_A'){
				context.fillStyle = '#ff5a5a';
				context.font = '15px HelveticaNeue-Light';
				context.fillText(players[i].username, players[i].x - players[i].r * 2, players[i].y - players[i].r * 2);
				context.beginPath();
				context.arc(players[i].x, players[i].y, players[i].r, 0, 2 * Math.PI);
				context.fill();
			} else if(players[i].team == 'TEAM_B'){
				context.fillStyle = '#5a5aff';
				context.font = '15px HelveticaNeue-Light';
				context.fillText(players[i].username, players[i].x - players[i].r * 2, players[i].y - players[i].r * 2);
				context.beginPath();
				context.arc(players[i].x, players[i].y, players[i].r, 0, 2 * Math.PI);
				context.fill();
			};
		};
	}
};