// global functions here

let diameter = 20;
let gap = 10;
let columns = 30;
let rows = 10;
let margin = 0;

function setup() {
  createCanvas(0, 0)
  windowResized()

  background('black')

  let offset = (margin + diameter / 2)
  let color1 = color('red');
  let color2 = color('green');

  for (let row = 0; row < rows; row++) {
    let y = row * (diameter + gap) + offset

    // 
    for (let col = 0; col < columns; col++) {

      let amount = map(col, 0, columns - 1, 0, 1);
      let mixedColor = lerpColor(color1, color2, amount);

      let x = col * (diameter + gap) + offset

      console.log('——————');
      console.log('Current column: ', col);
      console.log('Amount: ', amount);
      console.log(mixedColor)
      console.log('——————');

      fill(mixedColor)

      ellipse(x, y, diameter)
    }

  }

}

function draw() {

  // let x = 0;

  // while(x < width / 2) {
  //   ellipse(x, 0, diameter)

  //   x += 100
  // }



  // ellipse(0, 0, radius)
  // ellipse(10, 0, radius)
  // ellipse(20, 0, radius)
  // ellipse(30, 0, radius)
  // ellipse(40, 0, radius)
  // ellipse(50, 0, radius)
  // ellipse(60, 0, radius)

  // your code
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}