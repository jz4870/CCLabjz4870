let img1; // Declare variable to hold the image
let musicPlaying = false; // Variable to track whether music is currently playing
let music; // Variable to hold the music


function preload() {
    // Load the image and music in the preload function
    img1 = loadImage("../materials/trebleclef.png");
    music = loadSound("materials/chopintrim1.m4a"); 
}

function setup() {
    
    canvas = createCanvas(500, 500);
    canvas.parent('p5CanvasContainer'); 
    textFont('serif');
}  

function draw() {
    // Draw the image onto the canvas
    background(255); 
    image(img1, 0, 0, width, height); 

    textSize(20);
    textAlign(CENTER);
    fill(0); 
    text(instruction, 180, 80); 
}

function mousePressed() {
    
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        
        if (!musicPlaying) {
            // If music is not playing, start playing it
            music.play();
            musicPlaying = true;
        } else {
            // If music is already playing, pause it
            music.pause();
            musicPlaying = false;
        }
    }
}