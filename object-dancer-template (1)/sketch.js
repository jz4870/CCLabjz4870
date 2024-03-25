/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new JuliaDancer(width / 2, height / 2);
}

function draw() {
  
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}
class JuliaDancer {
  constructor(startX, startY) {
    this.x = startX - 200;
    this.y = startY - 200;
    this.danceDirection = 1; 
    this.danceAngle = 0;
    this.moveDirection = 1; 
    this.moveSpeed = 1;
  }

  update() {
    // Adjust y position based on the jump
    this.x += this.moveDirection * this.moveSpeed;
    
    // Change move direction randomly
    if (random(50) < 1) { // Adjust the frequency of direction change here
      this.moveDirection *= -1;
    }

    // Reverse direction when reaching certain limits
    if (this.x > 200 || this.x < -200) {
      this.moveDirection *= -1;
    }

    // Update dance angle for the dancing motion
    this.danceAngle += 0.015 * this.danceDirection;

    // Reverse dance direction when reaching certain limits
    if (this.danceAngle > PI / 15 || this.danceAngle < -PI / 15) {
      this.danceDirection *= -1;
    }
  }

  display() {
    
    push();
    translate(this.x, this.y);
    rotate(this.danceAngle);

    // Translate the whole sketch horizontally to simulate moving back and forth
    translate(this.y, 0);

    // Arms
    strokeWeight(0.5);
    fill("#F5F1F1");
    rect(125, 250, 40, 15, 30); // Left arm
    rect(245, 250, 40, 15, 30); // Right arm

    // Hands
    fill("#6C9767");
    ellipse(130, 257, 20, 20); // Left hand
    ellipse(280, 257, 20, 20); // Right hand

    // Body
    strokeWeight(0.5);
    stroke("#4E3F30");
    fill("#F5F1F1");
    rect(158, 230, 90, 85, 25);

    // Belt
    fill("#8B4513");
    rect(159, 270, 88, 10);

    // Feet
    fill("#6C9767");
    ellipse(185, 320, 40, 20);
    fill("#6C9767");
    ellipse(225, 320, 40, 20);

    // Head
    noStroke();
    fill("#6C9767");
    ellipse(200, 200, 100, 80);

    // Ears
    noStroke();
    fill("#6C9767");
    beginShape();
    vertex(110, 200);
    bezierVertex(140, 180, 170, 150, 180, 210);
    bezierVertex(170, 220, 160, 230, 130, 220);
    bezierVertex(110, 220, 100, 190, 120, 200);
    endShape(CLOSE);

    noStroke();
    fill("#6C9767");
    beginShape();
    vertex(290, 200);
    bezierVertex(260, 180, 230, 150, 220, 210);
    bezierVertex(230, 220, 240, 230, 270, 220);
    bezierVertex(290, 220, 300, 190, 280, 200);
    endShape(CLOSE);

    // Earlobes
    fill("#FFB6C1");

    // Left earlobe
    beginShape();
    vertex(120, 200);
    bezierVertex(130, 190, 150, 180, 160, 205);
    bezierVertex(155, 208, 145, 212, 130, 207);
    endShape(CLOSE);

    // Right earlobe
    beginShape();
    vertex(280, 200);
    bezierVertex(270, 190, 250, 180, 240, 205);
    bezierVertex(245, 208, 255, 212, 270, 207);
    endShape(CLOSE);

    // Eyes
    fill(0);
    ellipse(180, 195, 35, 25);
    ellipse(220, 195, 35, 25);

    noStroke();
    fill("#060706");

    // Left eye pointy side
    beginShape();
    vertex(155, 195);
    vertex(180, 182);
    vertex(180, 210);
    endShape(CLOSE);

    // Right eye pointy side
    beginShape();
    vertex(245, 195);
    vertex(220, 182);
    vertex(220, 210);
    endShape(CLOSE);

    fill(255);
    ellipse(185, 200, 8, 8);
    ellipse(215, 200, 8, 8);
    // Nose
    fill("#52724E");
    ellipse(200, 210, 10, 10);

    // Eyebrows
    stroke("#4E3F30");
    strokeWeight(2);

    // Left eyebrow
    noFill();
    beginShape();
    vertex(160, 182);
    bezierVertex(170, 172, 190, 169, 195, 182);
    endShape();

    // Right eyebrow
    beginShape();
    vertex(210, 182);
    bezierVertex(210, 172, 230, 169, 240, 182);
    endShape();

    // Lightsaber
    stroke(0.5);
    fill("rgb(52,248,57)")
    rect(275, 155, 17, 80, 20);
    fill("rgb(75,71,71)")
    rect(275, 225, 17, 35, 25);

    pop(); 
  }
}
// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.




/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/