const grid = {
	numColumns: 10,
};
const ball = {
	diameter: 60,
	color: "black",
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(2);
	background("rgba(250, 250, 250)");
	noStroke();
	/*******Create a line of nColumns balls*****/
	// Calculate the position of the ball
	for (let numCol = 0; numCol < grid.numColumns; numCol++) {
		// The position is calculated based on the number of columns
		let sizeColumn = windowWidth / grid.numColumns;
		// The margin is calculated based on the size of the column and the diameter of the ball
		let margin = sizeColumn - ball.diameter;
		let positionBall = {
			x: sizeColumn * numCol + ball.diameter / 2 + margin / 2,
			y: windowHeight / 2,
		};
		// The position of the ball is calculated based on the number of columns, the size of the column, the margin, and the diameter of the ball
		fill(ball.color);
		ellipse(positionBall.x, positionBall.y, ball.diameter);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}
