const PITCH = {
	center: {
		x: CANVAS.width/10,
		y: 0,
		width: (CANVAS.width/10) * 8,
		height: CANVAS.height
	},
	sideA: {
		x: CANVAS.x,
		y: 0,
		width: CANVAS.width/10,
		height: CANVAS.height
	},
	sideB: {
		x: (CANVAS.width/10) * 9,
		y: 0,
		width: CANVAS.width/10,
		height: CANVAS.height,
	},
	line: {
		x: CANVAS.width/2,
		y: 0,
		width: 1,
		height: CANVAS.height
	},
	draw: () => {
		context.fillStyle = 'rgba(40, 70, 56, 0.25)';
		// context.fillStyle = '#a0fb9d';
		context.fillRect(PITCH.center.x, PITCH.center.y, PITCH.center.width, PITCH.center.height);
		context.fillStyle = '#ff5a5a';
		context.fillRect(PITCH.sideA.x, PITCH.sideA.y, PITCH.sideA.width, PITCH.sideA.height);
		context.fillStyle = '#5a5aff';
		context.fillRect(PITCH.sideB.x, PITCH.sideB.y, PITCH.sideB.width, PITCH.sideB.height);
		context.fillStyle = '#000';
		context.fillRect(PITCH.line.x, PITCH.line.y, PITCH.line.width, PITCH.line.height);
	}
};

// transparent rgba(40, 48, 56, 0.25)

// var pitch_background = new Image();
// pitch_background.src = 'images/pitch_background.png';
// assets.db.push(pitch_background);

// pitch_background.onload = function(){
//     ++assets.loaded;
// };