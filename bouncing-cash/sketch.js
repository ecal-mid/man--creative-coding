'use strict'

let x;
let y;
let speed = 5;

// écriture camel case
let wayX = 1; // -1
let wayY = 1; // -1

let diameter = 200
let scaleFactor = 0.1;
let angleWay = 1
let angle = 0;
let cash

function preload() {
  cash = loadImage('./assets/piece-monnaie.png')
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();

  x = width / 2;
  y = height / 2;

  diameter = 100
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("white");

  push();
  translate(x, y);
  rotate(angle)
  ellipse(0, 0, diameter)

  drawingContext.shadowOffsetX = -5;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'rgba(0,0,0,0.2)';

  image(cash, 0, 0, diameter, diameter)

  pop();

  let reachedRight = x > width - diameter / 2;
  let reachedLeft = x < diameter / 2;
  let reachedTop = y < diameter / 2;
  let reachedBottom = y > height - diameter / 2;

  if (reachedRight) {
    wayX = -1;
    changeRotationWay()
  } else if (reachedLeft) {
    wayX = 1;
    changeRotationWay()
  }

  if (reachedTop) {
    wayY = 1;
    changeRotationWay()
  } else if (reachedBottom) {
    wayY = -1;
    changeRotationWay()
  }

  angle += 0.04 * angleWay;

  x = x + speed * wayX;
  y = y + speed * wayY;
}

function changeRotationWay() {
  angleWay *= -1;
}