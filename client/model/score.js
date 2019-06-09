var SCORE = {
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	draw: () => {
		context.font = '23px Arial';
		context.fillStyle = '#222';
		context.fillText(SCORE.left, ((CANVAS.width/2)*0)+(CANVAS.width/2)*0.5,
			CANVAS.y + 30);
		context.fillText(SCORE.right, ((CANVAS.width/2)*1)+(CANVAS.width/2)*0.5,
			CANVAS.y + 30);
	},
	update: (data) => {
		if(data=='left'){
			SCORE.left++;
		} else if(data=='right'){
			SCORE.right++;
		} else if(data=='top'){
			SCORE.top++;
		} else if(data=='bottom'){
			SCORE.bottom++;
		};
	},
	reset: () => {
		SCORE.left = 0;
		SCORE.right = 0;
		SCORE.top = 0;
		SCORE.bottom = 0;
	}
};