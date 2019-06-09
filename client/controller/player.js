const playerController = {
	exe: () => {
		player.move();
		player.playersContact();
	},
	render: () => {
		player.draw();
	}
};