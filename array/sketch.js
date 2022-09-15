// global functions here

let diameter = 20;
let gap = 10;
let columns = 30;
let rows = 10;
let margin = 10;

let colorRandom = []

function setup() {
  createCanvas(0, 0)
  windowResized()

  let numberOfCircles = columns * rows
  for (let i = 0; i < numberOfCircles; i++) {
    colorRandom[i] = color(random(255), random(255), random(255))
  }

}

function mousePressed() {
  colorRandom.push([0, 'lol', 'yes'])
  // colorRandom[colorRandom.length] = [0, 'lol', 'yes']
}

function draw() {



  background('black')

  let offset = (margin + diameter / 2)
  let color1 = color('red');
  let color2 = color('green');

  gap = map(mouseX, 0, width, 10, 20)

  let index = 0

  for (let row = 0; row < rows; row++) {
    let y = row * (diameter + gap) + offset

    // 
    for (let col = 0; col < columns; col++) {

      let amount = map(col, 0, columns - 1, 0, 1);
      let mixedColor = lerpColor(color1, color2, amount);

      mixedColor = colorRandom[index]
      let x = col * (diameter + gap) + offset
      fill(mixedColor)

      ellipse(x, y, diameter)

      index++;
    }

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}