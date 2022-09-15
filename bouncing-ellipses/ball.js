function updatePosition(anyBall) {

    anyBall.speedX = map(anyBall.x, 0, width, 1, 5)
    anyBall.speedY = map(anyBall.y, 0, height, 1, 5)

    anyBall.x += anyBall.speedX * anyBall.wayX;
    anyBall.y += anyBall.speedY * anyBall.wayY;
}

function drawBall(anyBall) {
    push()
    translate(anyBall.x, anyBall.y);
    ellipse(0, 0, map(anyBall.speedX, 1, 5, 1, 10))
    pop();
}

function updateCollision(anyBall) {

    const reachedRight = anyBall.x > width - anyBall.diameter / 2;
    const reachedLeft = anyBall.x < anyBall.diameter / 2;
    const reachedTop = anyBall.y < anyBall.diameter / 2;
    const reachedBottom = anyBall.y > height - anyBall.diameter / 2;

    if (reachedRight) {
        anyBall.wayX = -1;
    } else if (reachedLeft) {
        anyBall.wayX = 1;
    }

    if (reachedTop) {
        anyBall.wayY = 1;
    } else if (reachedBottom) {
        anyBall.wayY = -1;
    }
}

// Randomly returns -1 or 1
function randomSign() {
    return random() < 0.5 ? -1 : 1
}