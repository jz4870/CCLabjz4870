let butterflies = [];
let maxButterflies = 40; // Maximum number of butterflies

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("#8CD6F7A8");
  
  // Generate a new butterfly if there are fewer than the maximum number
  if (butterflies.length < maxButterflies) {
    let x = random(width);
    let y = random(height);
    let butterflyColor = color(random(255), random(255), random(255));
    butterflies.push(new Butterfly(x, y, butterflyColor));
  }
  
  // Update and display butterflies
  for (let i = 0; i < butterflies.length; i++) {
    butterflies[i].update();
    butterflies[i].display();
    
    // Remove butterflies that move off the canvas
    if (butterflies[i].offCanvas()) {
      butterflies.splice(i, 1);
    }
  }
}

class Butterfly {
  constructor(x, y, color) {
    this.pos = createVector(x, y);
    this.color = color;
    this.angle = random(TWO_PI); // Initial angle for noise function
    this.wingSize = 50;
  }
  
  update() {
    // Update butterfly's position using Perlin noise
    let noiseX = noise(this.angle) * 2 - 1; // -1 to 1 range
    let noiseY = noise(this.angle + 10) * 2 - 1; // Different seed for Y to create variation
    let velocity = createVector(noiseX, noiseY).mult(2); // Adjust speed with multiplier
    this.pos.add(velocity);
    
    // Increment angle for next update
    this.angle += 0.05;
  }
  
  display() {
    // Draw butterfly
    push();
    translate(this.pos.x, this.pos.y);
    
    // Draw upper wings
    this.drawWing(-20, -20, this.wingSize, this.wingSize);
    this.drawWing(20, -20, this.wingSize, this.wingSize);
    
    // Draw lower wings
    this.drawWing(-20, 20, this.wingSize, this.wingSize);
    this.drawWing(20, 20, this.wingSize, this.wingSize);
    
    // Body
    fill(0);
    ellipse(0, 0, 10, 50);
    
    // Antennae
    stroke(0);
    line(-2, -20, -2, -50); // Left antenna
    line(2, -20, 2, -50);   // Right antenna
    
    pop();
  }
  
  drawWing(x, y, w, h) {
    push();
    translate(x, y);
    noStroke();
    fill(this.color);
    arc(0, 0, w, h, 0, PI);
    arc(0, 0, w, h + 10, PI, TWO_PI);
    pop();
  }
  
  offCanvas() {
    return (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height);
  }
}


