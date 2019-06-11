const flagController = {
	exe: () => {
		FLAG.TEAM_A.move()
		FLAG.TEAM_B.move()
	},
	render: () => {
		FLAG.draw();
	}
};