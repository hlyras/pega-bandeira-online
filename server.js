const express = require('express');
const path = require("path");
const app = express();
const server = require('http').createServer(app);

app.use(express.static(path.join(__dirname, 'client')));

// Connection handler
const io = require('socket.io')(server);

const Room = function(){
	this.players = [];
	this.maxLenght = 6;
};

var rooms = [];
rooms.push(new Room());

io.on('connection', (socket) => {
	socket.on('connected', (username) => {
		socket.username = username;
	});

	socket.on('join room', () => {
		let room = 0;
		for(i in rooms){
			if(rooms[i].players.length < rooms[i].maxLenght){
				socket.room = i;

				let team_a = 0;
				for(y in rooms[i].players){
					if(rooms[i].players[y].team=='TEAM_A'){
						++team_a;
					};
				};
				if(team_a < 3){
					rooms[i].players.push({id: socket.id, username: socket.username, connection: 'connected', team: 'TEAM_A', room: socket.room});
					socket.emit('my player', {id: socket.id, username: socket.username, team: 'TEAM_A'});
				} else {
					rooms[i].players.push({id: socket.id, username: socket.username, connection: 'connected', team: 'TEAM_B', room: socket.room});
					socket.emit('my player', {id: socket.id, username: socket.username, team: 'TEAM_B'});
				};
				if(rooms[i].players.length == rooms[i].maxLenght){
					rooms.push(new Room());
				};
				break;
			};
		};

		socket.join(socket.room, () => {
			// sending players to client
			socket.emit('new player', rooms[socket.room].players);
			socket.broadcast.to(socket.room).emit('new player', rooms[socket.room].players);

			if(rooms[socket.room].players.length == rooms[socket.room].maxLenght){
				socket.emit('start warning');
				socket.broadcast.to(socket.room).emit('start warning');
				setTimeout(() => {
					socket.emit('start game');
					socket.broadcast.to(socket.room).emit('start game');
				},3000);
			};

			socket.on('update player', data => {
				socket.broadcast.to(socket.room).emit('update players', data);
			});

			socket.on('disconnect', async () => {
				if(rooms[socket.room].players.length < rooms[socket.room].maxLenght){
					rooms[socket.room].players = rooms[socket.room].players.filter(function(player) { return player.id != socket.id });
					socket.broadcast.to(socket.room).emit('user left room', {id: socket.id});
				} else {
					socket.broadcast.to(socket.room).emit('user left', {id: socket.id, connection: 'disconnected'});
				};
			});
		});
	});
});

// Server host
const port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log('server listening on port ' + port);
});