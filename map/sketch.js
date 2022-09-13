// global functions here

function setup() {
  createCanvas(0, 0)
  windowResized()
  // rectMode(CENTER)
  // 
}

function draw() {
  background('black')

  const minBound = 300;
  const maxBound = 100;

  let result = map(mouseX, 0, width, minBound, maxBound, true)

  noStroke();
  fill('blue')
  ellipse(mouseX, height/2, 10)


  noFill()
  stroke(255);
  rect(minBound, height/2, maxBound-minBound, 1);

  fill('red')
  ellipse(result, height/2, 10)
  // console.log(result)
  // rect(map(0, 0, 3, width / 2, width), height / 2, 100)
  // rect(map(1, 0, 3, 0, width), height / 2, 100)
  // rect(map(2, 0, 3, 0, width), height / 2, 100)
  // rect(map(3, 0, 3, 0, width), height / 2, 100)


  //rect(width/2, height/2,100)
  // your code
}

function windowResized() {
  resizeCanvas(500, 500)
}