function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(6);
}

function draw() {
    background(0);
    for (let a = 0; a <= windowWidth; a = a + 30) {
        for (let b = 0; b <= 800; b = b + 10) {
            arc(a, b, random(70), random(1), random(100), random(600));
            stroke(255);
            noFill();
        }
    }
}
