'use strict'

let ball1 = {
  x: 0,
  y: 0,
  wayX: 1,
  wayY: 1,
  diameter: 50,
  speed: 5
}

let ball2 = {
  x: 0,
  y: 0,
  wayX: 1,
  wayY: 1,
  diameter: 200,
  speed: 10
}

let ball3 = {
  x: 0,
  y: 0,
  wayX: 1,
  wayY: 1,
  diameter: 100,
  speed: 10
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();

  setRandomPosition(ball1)
  setRandomPosition(ball2)
  setRandomPosition(ball3)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");

  
  updateCollision(ball1);
  updatePosition(ball1);
  drawBall(ball1)
  
  updateCollision(ball2);
  updatePosition(ball2);
  drawBall(ball2)
  
  updateCollision(ball3);
  updatePosition(ball3);
  drawBall(ball3)
}

