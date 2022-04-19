let orb = [];
let palette = ["grey", (38), (201)];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 100; i++) {
        orb[i] = new Ball(random(width), random(height), 10);
    }
}


function draw() {
    background(0);
    for (let i = 0; i < orb.length; i++) {
        orb[i].move();
        orb[i].show();
    }
}

class Ball {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.speed = random(1, 5);
        this.c = random(palette);
    }

    move() {
        // this.x = this.x + random(-2, 2);
        if (this.x > width) {
            this.x = 0;
        }
        this.x = this.x + this.speed;
    }

    show() {
        noStroke();
        fill(this.c);
        ellipse(this.x, this.y, this.r * 2);
        triangle(this.x, this.y, this.x + 510, this.y, this.x - 5, this.y - 4)
    }
}
