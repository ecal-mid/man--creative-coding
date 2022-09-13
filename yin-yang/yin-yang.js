function drawAnimation(x, y, diameter, angle) {
    // let diameter = 500;
    let radius = diameter / 2;
  
    push()
  
    translate(x, y)
    
    rotate(-angle);
  
    fill(color1)
    arc(0, 0, diameter, diameter, 0, 180)
  
    rotate(180)
    fill(color2)
    arc(0, 0, diameter, diameter, 0, 180)
  
    push()
    translate(radius / 2, 0)
    rotate(angle * 2);
    yinYang(0, 0, radius)
    pop()
  
    push()
    translate(-radius / 2, 0, 0)
    rotate(angle * 2);
    yinYang(0, 0, radius)
    pop()
  
    pop()
  }
  
  
  function yinYang(x, y, diameter) {
  
    push();
  
    translate(x, y)
  
    fill(color1)
    arc(0, 0, diameter, diameter, 0, 180);
  
    fill(color2)
    rotate(180)
    arc(0, 0, diameter, diameter, 0, 180);
  
    // circles
    let smallDiameter = diameter / 4
    let mediumDiameter = diameter / 2
  
    ellipse(smallDiameter, 0, mediumDiameter)
    fill(color1)
    ellipse(-smallDiameter, 0, mediumDiameter)
  
    // dots
    fill(color2)
    ellipse(-smallDiameter, 0, smallDiameter)
  
    fill(color1)
    ellipse(smallDiameter, 0, smallDiameter)
  
    pop();
  }
  