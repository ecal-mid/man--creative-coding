// global functions here
let angle = 0
let speed = 1

let color1, color2;

function setup() {
  color1 = color('black')
  color2 = color('red')

  createCanvas(0, 0)
  windowResized();
  noStroke();
  angleMode(DEGREES);


}

function draw() {
  let diameter = width > height ? height : width // ternary operator
  let yinX = width / 2
  let yinY = height / 2

  background('grey')
  let d = dist(mouseX, mouseY, yinX, yinY)
  let isWithin = d <= diameter / 2
  // your code

  push()

  translate(yinX, yinY)

  scale(1)


  color2 = color('red')

  if (isWithin)
    color2 = height > width ? color('blue') : color('green')

  drawAnimation(0, 0, diameter, angle)

  pop()
  // drawAnimation(width / 2 + 250, height / 2, 500, -angle)

  angle += speed; // same as: angle = angle + speed;
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}