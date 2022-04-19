function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {


    //eye white
    noStroke();
    fill(255, 255, 255);
    ellipse(130, 250, 120, 70);
    ellipse(460, 250, 120, 70);

    //pupil
    fill(0, 0, 0);
    circle(map(mouseX, 0, width, 110, 133), map(mouseY, 0, height, 243, 254), 50);
    circle(map(mouseX, 0, width, 440, 463), map(mouseY, 0, height, 243, 254), 50);
}
