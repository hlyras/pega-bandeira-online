const express = require('express');
const path = require("path");
const app = express();
const server = require('http').createServer(app);

app.use(express.static(path.join(__dirname, 'client')));

// Connection handler
const io = require('socket.io')(server);

const Room = function(){
	this.players = [];
	this.maxLenght = 3;
};

var rooms = [];
rooms.push(new Room());

io.on('connection', (socket) => {
	socket.on('connected', (username) => {
		socket.username = username;

		socket.emit('my player', {id:socket.id, username:socket.username});
	});

	socket.on('join room', (data) => {
		let room = 0;
		for(i in rooms){
			if(rooms[i].players.length < rooms[i].maxLenght){
				socket.room = i;
				rooms[i].players.push({id: socket.id, username: socket.username, x: data.x, y: data.y, r: data.r, room: socket.room});
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
				socket.emit('start game');
				socket.broadcast.to(socket.room).emit('start game');
			};

			socket.on('update player', data => {
				socket.broadcast.to(socket.room).emit('update players', data);
			});

			socket.on('disconnect', async () => {
				socket.broadcast.to(socket.room).emit('user left', socket.username+' saiu da sala.');
				
				rooms[socket.room].players = rooms[socket.room].players.filter(function(player) { return player.id != socket.id });
				
				socket.emit('new player', rooms[socket.room].players);
				socket.broadcast.to(socket.room).emit('new player', rooms[socket.room].players);
			});
		});
	});
});

// Server host
const port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log('server listening on port ' + port);
});