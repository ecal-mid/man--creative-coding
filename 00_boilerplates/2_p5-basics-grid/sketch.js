const grid = {
	numColumns: 10,
	numRows: 10,
};
const ball = {
	diameter: 10,
	color: "black",
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(2);
	background("rgba(250, 250, 250,0.05)");
	noStroke();
	/*********
	Create a line of nColumns balls
	*************/
	// Calculate the position of the ball
	let sizeCell = {
		column: windowWidth / grid.numColumns,
		row: windowHeight / grid.numRows,
	};
	let margin = {
		x: sizeCell.column - ball.diameter,
		y: sizeCell.row - ball.diameter,
	};
	// Adding another level of loop to create a grid
	for (let numRow = 0; numRow < grid.numRows; numRow++) {
		for (let numCol = 0; numCol < grid.numColumns; numCol++) {
			let positionBall = {
				x: sizeCell.column * numCol + ball.diameter / 2 + margin.x / 2,
				y: sizeCell.row * numRow + ball.diameter / 2 + margin.y / 2,
			};
			// CHANGING THE COLOR OF THE BALL
			fill(ball.color);
			ellipse(positionBall.x, positionBall.y, ball.diameter);
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}
