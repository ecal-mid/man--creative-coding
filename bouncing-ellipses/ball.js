function setRandomPosition(anyBall) {
    anyBall.x = random(width);
    anyBall.y = random(height);
}

function updatePosition(anyBall) {
    anyBall.x += anyBall.speed * anyBall.wayX;
    anyBall.y += anyBall.speed * anyBall.wayY;
}

function drawBall(anyBall) {
    push()
    translate(anyBall.x, anyBall.y);
    ellipse(0, 0, anyBall.diameter)
    pop();
}

function updateCollision(anyBall) {

    let reachedRight1 = anyBall.x > width - anyBall.diameter / 2;
    let reachedLeft1 = anyBall.x < anyBall.diameter / 2;
    let reachedTop1 = anyBall.y < anyBall.diameter / 2;
    let reachedBottom1 = anyBall.y > height - anyBall.diameter / 2;

    if (reachedRight1) {
        anyBall.wayX = -1;
    } else if (reachedLeft1) {
        anyBall.wayX = 1;
    }

    if (reachedTop1) {
        anyBall.wayY = 1;
    } else if (reachedBottom1) {
        anyBall.wayY = -1;
    }
}