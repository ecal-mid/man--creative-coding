'use strict'

const numberOfBalls = 100
const balls = []

function setup() {

  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);

  for (let i = 0; i < numberOfBalls; i++) {

    const newBall = {
      x: random(width),
      y: random(height),
      wayX: randomSign(),
      wayY: randomSign(),
      diameter: random(5, 10),
      speedX: random(1, 5),
      speedY: random(1, 5),
    }

    balls.push(newBall)  // balls[i] = newBall
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // background("black");

  for (const ball of balls) {
    updateCollision(ball);
    updatePosition(ball);
    drawBall(ball)
  }

}

