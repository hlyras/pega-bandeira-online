const Player = function(id, username) {
	this.id = id;
	this.username = username;
	this.team = 'TEAM_A';
	this.x = 10;
	this.y = 10;
	this.r = 10;
	this.speed = 0.1;
	this.maxSpeed = 2.5;
	this.dirX = 0;
	this.dirY = 0;
	this.left = false;
	this.right = false;
	this.up = false;
	this.down = false;
	this.draw = () => {
		if(this.team=='TEAM_A'){
			context.fillStyle = '#ff5a5a';
			context.beginPath();
			context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
			context.fill();
		} else if(this.team=='TEAM_B'){
			context.fillStyle = '#6e78ff';
			context.beginPath();
			context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
			context.fill();
		};
	};
	this.onKeyDown = function(key){
		if(key==65){
			this.left = true;
		};
		if(key==68){
			this.right = true;
		};
		if(key==87){
			this.up = true;
		};
		if(key==83){
			this.down = true;
		};
	};
	this.onKeyUp = function(key){
		if(key==65){
			this.left = false;
			this.dirX = 0;
		};
		if(key==68){
			this.right = false;
			this.dirX = 0;
		};
		if(key==87){
			this.up = false;
			this.dirY = 0;
		};
		if(key==83){
			this.down = false;
			this.dirY = 0;
		};
	};
	this.move = () => {
		socket.emit('update player', {id: this.id, x: this.x, y: this.y, r: this.r});
		if(this.team=='TEAM_A'){
			if(this.left){
				if(this.x - this.r > PITCH.sideA.width){
					this.x -= this.dirX;
				};
				if(this.dirX < this.maxSpeed){
					this.dirX += this.speed;
				};
			};
			if(this.right){
				if(this.x + this.r < CANVAS.width){
					this.x += this.dirX;
				};
				if(this.dirX < this.maxSpeed){
					this.dirX += this.speed;
				};
			};
		} else if(this.team=='TEAM_B'){
			if(this.left){
				if(this.x - this.r > CANVAS.x){
					this.x -= this.dirX;
				};
				if(this.dirX < this.maxSpeed){
					this.dirX += this.speed;
				};
			};
			if(this.right){
				if(this.x + this.r < PITCH.sideB.x){
					this.x += this.dirX;
				};
				if(this.dirX < this.maxSpeed){
					this.dirX += this.speed;
				};
			};
		};
		if(this.up){
			if(this.y - this.r > CANVAS.y){
				this.y -= this.dirY;
			};
			if(this.dirY < this.maxSpeed){
				this.dirY += this.speed;
			};
		};
		if(this.down){
			if(this.y + this.r < CANVAS.height){
				this.y += this.dirY;
			};
			if(this.dirY < this.maxSpeed){
				this.dirY += this.speed;
			};
		};
	};
	this.spawn = () => {
		this.x = random(0, CANVAS.width-this.r);
		this.y = random(0, CANVAS.height-this.r);
		this.dirX = random(1, this.speed);
		this.dirY = random(1, this.speed);
	};
	this.playersContact = () => {
		for(i in players){
			var dx = Math.abs(this.x - players[i].x);
			var dy = Math.abs(this.y - players[i].y);
			var dd = this.r + players[i].r;
			if(dd*dd >= (dx*dx)+(dy*dy)) {
				console.log('touch ' + players[i].username);
			};
		};
	};
};