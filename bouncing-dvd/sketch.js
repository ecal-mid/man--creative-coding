'use strict'

let img; // Declare variable 'img'.

let x;
let y;
let speed = 5;

// écriture camel case
let wayX = 1; // -1
let wayY = 1; // -1

let logoWidth = 200;
let logoHeight = 100;
let scaleFactor = 0.1;
let angle;

function preload() {
  // preload()' runs once
  img = loadImage('assets/dvd-logo.png');
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();

  angle = PI

  x = width / 2;
  y = height / 2;

  logoWidth = img.width * scaleFactor;
  logoHeight = img.height * scaleFactor;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");

  push();
  translate(x, y);
  // rotate(angle);
  // scale(-scaleFactor,-scaleFactor );

  image(img, 0, 0);
  pop();

  let reachedRight = x > width - logoWidth / 2;
  let reachedLeft = x < logoWidth / 2;
  let reachedTop = y < logoHeight / 2;
  let reachedBottom = y > height - logoHeight / 2;

  if (reachedRight) {
    wayX = -1;
    randomColor()
  } else if (reachedLeft) {
    wayX = 1;
    randomColor()
  }

  if (reachedTop) {
    wayY = 1;
    randomColor()
  } else if (reachedBottom) {
    wayY = -1;
    randomColor()
  }

  x = x + speed * wayX;
  y = y + speed * wayY;
}

function randomColor() {
  let r = random(255); // r is a random number between 0 - 255
  let g = random(255); // g is a random number betwen 100 - 200
  let b = random(255); // b is a random number between 0 - 100
  tint(r, g, b); // Tint blue  
}