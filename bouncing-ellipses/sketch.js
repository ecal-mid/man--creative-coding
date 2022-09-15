'use strict'

let img; // Declare variable 'img'.

let x;
let y;
let speed = 5;

// écriture camel case
let wayX = 1; // -1
let wayY = 1; // -1

let diameter = 200
let scaleFactor = 0.1;
let angle;

function setup() {

  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();

  angle = PI

  x = width / 2;
  y = height / 2;

  diameter = 100
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");

  push();
  translate(x, y);
  ellipse(0, 0, diameter)

  pop();

  let reachedRight = x > width - diameter / 2;
  let reachedLeft = x < diameter / 2;
  let reachedTop = y < diameter / 2;
  let reachedBottom = y > height - diameter / 2;

  if (reachedRight) {
    wayX = -1;
  } else if (reachedLeft) {
    wayX = 1;
  }

  if (reachedTop) {
    wayY = 1;
  } else if (reachedBottom) {
    wayY = -1;
  }

  x = x + speed * wayX;
  y = y + speed * wayY;
}