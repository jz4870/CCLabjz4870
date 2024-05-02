// marie.js

let canvas;
let substanceColor;
let particles = [];
let petriDishClicked = false;
let substanceAdded = false;
let rockX = 0;
let rockY = 0;
let rockSize = 100; 

function setup() {
  canvas = createCanvas(800, 800);
  canvas.parent('p5CanvasContainer'); 
  substanceColor = color('blue'); 
  rockX = width / 2 - rockSize / 2; 
  rockY = height / 2 - rockSize / 2;
}

function draw() {
  background(220);
  
  // Draw the petri dish
  if (substanceAdded) {
    fill(0, 0, 255); 
  } else {
    fill(255); 
  }
  stroke(0); 
  strokeWeight(2);
  ellipse(width / 2, height / 2, 400, 400); 
  
  // Draw the rock inside the dish if not clicked
  if (!petriDishClicked) {
    fill(120); 
    noStroke();
    drawRock(rockX, rockY, rockSize, rockSize);
  }
  
  // If the petri dish is clicked and particles should appear
  if (petriDishClicked) {
    for (let i = 0; i < particles.length; i++) {
      particles[i].display();
    }
  }
  
  
  drawFlask(50, height / 2 - 100, substanceColor, "S", 40, 120);

    // Text
    fill("black");
    textFont("serif", 16); 
    text("Discover the elements that Marie Curie Found!", 10, 650);
    text("Hit 'S' on your keyboard in order to add the substance to the Petri Dish", 10, 670);
    text("Click on the rock to dissolve it", 10, 690);
  
}

function keyPressed() {
  if (key === 's') {
    
    substanceColor = color('grey');
    substanceAdded = true;

    // Redraw the canvas to update the background color of the petri dish
    redraw();
  }
}

function mousePressed() {
  // If the mouse is clicked on the petri dish, set petriDishClicked to true
  if (dist(mouseX, mouseY, width / 2, height / 2) < 200) {
    petriDishClicked = true;
    particles = []; // Reset particles array
    
    // Generate small green particles within the petri dish
    for (let i = 0; i < 8; i++) { 
      particles.push(new Particle(random(width / 2 - 180, width / 2 + 180), random(height / 2 - 180, height / 2 + 180)));
    }
  }
}

//Rock
function drawRock(x, y, w, h) {
  beginShape();
  vertex(x + w * 0.5, y);
  vertex(x + w, y + h * 0.2);
  vertex(x + w * 0.8, y + h * 0.8);
  vertex(x + w * 0.5, y + h);
  vertex(x, y + h * 0.8);
  vertex(x + w * 0.2, y + h * 0.2);
  endShape(CLOSE);
}

// flask with substance
function drawFlask(x, y, flaskColor, label, w, h) {
  push();
  translate(x, y);
  fill(flaskColor);
  noStroke();
  rect(0, 0, w, h);
  triangle(w * 0.5, h * 0.5, -w, h * 1.67, w * 2, h * 1.67);
  // Label
  textSize(25);
  fill(0);
  textStyle(BOLD);
  textFont("Serif");
  text(label, 10, h * 1.25);
  pop();
}

// Particle class for irregular shaped particles based on rock shape
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vertices = []; // Array to store the vertices of the irregular shape
    this.size = random(5, 15); // Randomize particle size
    this.generateVertices(); // Generate irregular shape based on rock
  }

  generateVertices() {
    // Define the vertices of the irregular shape based on the rock
    this.vertices.push(createVector(this.x + this.size * 0.5, this.y));
    this.vertices.push(createVector(this.x + this.size, this.y + this.size * 0.2));
    this.vertices.push(createVector(this.x + this.size * 0.8, this.y + this.size * 0.8));
    this.vertices.push(createVector(this.x + this.size * 0.5, this.y + this.size));
    this.vertices.push(createVector(this.x, this.y + this.size * 0.8));
    this.vertices.push(createVector(this.x + this.size * 0.2, this.y + this.size * 0.2));
  }

  display() {
    noStroke();
    fill(0, 255, 0); 
    beginShape();
    // Draw irregular shape particle based on the vertices of the rock
    for (let i = 0; i < this.vertices.length; i++) {
      vertex(this.vertices[i].x, this.vertices[i].y);
    }
    endShape(CLOSE);
  }
}

function mousePressed() {
  // If the mouse is clicked on the petri dish, set petriDishClicked to true
  if (dist(mouseX, mouseY, width / 2, height / 2) < 200) {
    petriDishClicked = true;
    particles = []; // Reset particles array
    
    // Generate irregular shaped particles within the petri dish
    for (let i = 0; i < 8; i++) { 
      let particleX = random(width / 2 - 180, width / 2 + 180); 
      let particleY = random(height / 2 - 180, height / 2 + 180); 
      particles.push(new Particle(particleX, particleY));
    }
  }
}
 