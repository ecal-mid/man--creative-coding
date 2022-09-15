// global functions here

let diameter = 20;
let gap = 10;
let columns = 50;
let rows = 30;
let margin = 10;

let colorRandom = []
let randomDiameters = []
let offsets = []

let props = [] // [{ color, diameter, offset }, { color, diameter, offset }, ...]

function setup() {
  createCanvas(0, 0)
  windowResized()


  // console.log(propsOfOneCircle);

  let numberOfCircles = columns * rows
  for (let i = 0; i < numberOfCircles; i++) {

    //* uncondensed version

    // create different props
    let colorRandom = color(random(255), random(255), random(255))
    let diameter = random(10, 12)
    let offset = random(10, 12)

    // group them in an object, just like a folder
    const obj = {
      color: colorRandom,
      diameter: diameter,
      offset: offset,
    }

    // put the object on a specific slot in the array
    props[i] = null

    //* condensed version

    // props[i] = {
    //   color: color(random(255), random(255), random(255)),
    //   diameter: random(10, 200),
    //   offset: random(10, 200),
    // }
  }

  let firstElem = props[0]
  if (firstElem !== null) {
    //* uncondensed
    // console.log("firstElem of props ", firstElem);
    // console.log("diameter of firstElem ", firstElem.diameter);

    //* condensed
    console.log(props[0].diameter);

  }

}

function draw() {

  background('black')

  let offset = (margin + diameter / 2)

  // gap = map(mouseX, 0, width, 10, 20)

  let index = 0

  for (let row = 0; row < rows; row++) {
    let y = row * (diameter + gap) + offset

    // 
    for (let col = 0; col < columns; col++) {

      let obj = props[index]

      if (obj !== null) {
        let x = col * (diameter + gap) + offset
        fill(obj.color)
        ellipse(x, y + obj.offset, obj.diameter)
      }

      index++;
    }

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function mousePressed() {

  let colorRandom = color(random(255), random(255), random(255))
  let diameter = random(10, 10) * 20
  let offset = random(10, 10)

  //! complete this line
  let randomIndex = 0

  props[randomIndex] = {
    color: colorRandom,
    diameter: diameter,
    offset: offset,
  }
}