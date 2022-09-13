// global functions here
let radius = 20
let smoothing = 0.05

const position = {
  x: 0,
  y: 0,
  prevX: 0,
  prevY: 0,
}

const target = {
  x: 0,
  y: 0,
  prevX: 0,
  prevY: 0
}

function setup() {
  createCanvas(0, 0)
  windowResized()
  background(128)

  position.whatever = 'hello'
  position.x = 100;

  // console.log(position.other);
}

function draw() {
  background(128, 10)

  // translate(0, height / 2)

  fill('red')
  noStroke();
  ellipse(target.x, target.y, radius);
  stroke('red')
  strokeWeight(radius);
  line(target.x, target.y, target.prevX, target.prevY)

  position.prevX = position.x
  position.prevY = position.y

  position.x = lerp(position.x, target.x, smoothing)
  position.y = lerp(position.y, target.y, smoothing)

  stroke('green')
  line(position.x, position.y, position.prevX, position.prevY)

  target.prevX = target.x
  target.prevY = target.y

  target.x = mouseX
  target.y = mouseY

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}