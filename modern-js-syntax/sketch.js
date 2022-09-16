'use strict'

import Ball from './ball.js'
import './p5.js'

const numberOfBalls = 100
const balls = []

function setup() {

  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);

  for (let i = 0; i < numberOfBalls; i++) {

    let x = width / 2;
    let y = height / 2;

    const newBall = new Ball(x, y, 300)

    balls.push(newBall)  // balls[i] = newBall
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // background("black");

  for (const ball of balls) {
    ball.updateCollision();
    ball.updatePosition();
    ball.draw()
  }

}

window.setup = setup 
window.draw = draw 
window.windowResized = windowResized