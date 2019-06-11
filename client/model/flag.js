const FLAG = {
	TEAM_A:{
		x: CANVAS.width / 15,
		y: CANVAS.height / 2 - 15,
		r: 15,
		player: '',
		spawn: () => {
			FLAG.TEAM_A.player = '';
			FLAG.TEAM_A.x = CANVAS.width / 15;
			FLAG.TEAM_A.y = CANVAS.height / 2 - 15;
			socket.emit('update FLAG_A', { id: FLAG.TEAM_A.player, x: FLAG.TEAM_A.x, y: FLAG.TEAM_A.y });
		},
		move: function(){
			if(this.player==player.id){
				this.x = player.x;
				this.y = player.y;
				socket.emit('update FLAG_A', { id: this.player, x: this.x, y: this.y });
			};
		}
	},
	TEAM_B: {
		x: CANVAS.width - (CANVAS.width / 15),
		y: CANVAS.height / 2 - 15,
		r: 15,
		player: '',
		spawn: () => {
			console.log('resetou team b');
			FLAG.TEAM_B.player = '';
			FLAG.TEAM_B.x = CANVAS.width - (CANVAS.width / 15);
			FLAG.TEAM_B.y = CANVAS.height / 2 - 15;
			socket.emit('update FLAG_B', { id: FLAG.TEAM_B.player, x: FLAG.TEAM_B.x, y: FLAG.TEAM_B.y });
		},
		move: function(){
			if(this.player==player.id){
				this.x = player.x;
				this.y = player.y;
				socket.emit('update FLAG_B', { id: this.player, x: this.x, y: this.y });
			};
		}
	},
	draw: () => {
		context.fillStyle = 'white';
		context.beginPath();
		context.arc(FLAG.TEAM_A.x, FLAG.TEAM_A.y, FLAG.TEAM_A.r, 0, 2 * Math.PI);
		context.arc(FLAG.TEAM_B.x, FLAG.TEAM_B.y, FLAG.TEAM_B.r, 0, 2 * Math.PI);
		context.fill();
	}
};