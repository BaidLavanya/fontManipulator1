function preload() { }

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(700,150); 

    webcam = createCapture(VIDEO);
    webcam.size(400,400);
    webcam.position(100, 150);
}

function draw() { }