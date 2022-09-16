

// Name of classes always start with a capital letter
class Ball {
    constructor(posX, posY, diameter) {
        this.x = posX
        this.y = posY
        this.wayX = randomSign()
        this.wayY = randomSign()
        this.diameter = diameter
        this.speedX = random(1, 10)
        this.speedY = random(1, 10)
    }

    updatePosition() {
        this.speedX = map(this.x, 0, width, 1, 5)
        this.speedY = map(this.y, 0, height, 1, 5)

        this.x += this.speedX * this.wayX;
        this.y += this.speedY * this.wayY;
    }

    draw() {
        push()
        translate(this.x, this.y);
        ellipse(0, 0, this.diameter)
        pop();
    }

    updateCollision() {

        const reachedRight = this.x > width - this.diameter / 2;
        const reachedLeft = this.x < this.diameter / 2;
        const reachedTop = this.y < this.diameter / 2;
        const reachedBottom = this.y > height - this.diameter / 2;

        if (reachedRight) {
            this.wayX = -1;
        } else if (reachedLeft) {
            this.wayX = 1;
        }

        if (reachedTop) {
            this.wayY = 1;
        } else if (reachedBottom) {
            this.wayY = -1;
        }
    }
}

