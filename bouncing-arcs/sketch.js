'use strict'

const numberOfBalls = 50
const balls = []

function setup() {

  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  // noStroke()
  angleMode(DEGREES);
  background('black')

  for (let i = 0; i < numberOfBalls; i++) {

    const newBall = {
      x: random(width),
      y: random(height),
      wayX: randomSign(),
      wayY: randomSign(),
      diameter: random(5, 10),
      speedX: random(1, 5),
      speedY: random(1, 5),
      angle: 0
    }

    balls.push(newBall)  // balls[i] = newBall
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(0, 1);

  for (const ball of balls) {
    updateCollision(ball);
    updatePosition(ball);
    drawBall(ball)
  }

}

