let x = 2;
let y = 2;
let easing = 0.05;
let yoff = 0.0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    angleMode(DEGREES)
}

function draw() {
//    background(0);
    fill("yellow");
    noStroke()

    // easing
    push();
    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;

    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;
    //ellipse(x, y, 100, 100);
    push();
    translate(x, y);
    triangle(-0, -0, -150, 150, 150, 150);
    pop();

    pop();
}
