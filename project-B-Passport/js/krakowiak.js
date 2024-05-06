let canvas;
let dumplings = [];
let girlMouthX = 200; // X-coordinate of the girl's mouth
let girlMouthY = 230; // Y-coordinate of the girl's mouth

function setup() {
  canvas = createCanvas(800, 400);
  canvas.parent('p5CanvasContainer');
  
  // Create dumplings
  for (let i = 0; i < 5; i++) {
    dumplings.push(new Dumpling(random(width / 2, width), random(height)));
  }
}

function draw() {
  background("rgb(84,143,46)");
  
  // Draw girl sketch
  drawGirl();
  
  // Draw dumplings
  for (let dumpling of dumplings) {
    dumpling.display();
    dumpling.update();
    
    // Check if the dumpling is over the girl's mouth
    if (dumpling.overMouth(girlMouthX, girlMouthY)) {
      dumpling.eaten = true; // Mark dumpling as eaten
    }
  }

  // Check if all dumplings are eaten
  let allEaten = true;
  for (let dumpling of dumplings) {
    if (!dumpling.eaten) {
      allEaten = false;
      break;
    }
  }

  // Display "Dziekuje" if all dumplings are eaten
  if (allEaten) {
    displayDziekuje();
  }
}

function displayDziekuje() {
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text("Dziękuję!", width / 2, height / 2);
}

function drawGirl() {
   //hair
   noStroke();
   noFill();
   fill("#ECBA23");
   rect(100, 138, 200, 220);
 
   //top of head
   fill("#ECBA23");
   ellipse(200, 122, 180, 100);
  
   fill("#ECBA23");
   rect(140, 170, 30, 160);
   rect(230, 170, 30, 160);
 
   //neck
   fill(241, 194, 150);
   rect(173, 290, 60, 40);
 
   //face
   noStroke();
   fill(241, 194, 150);
   circle(200, 200, 200);
 
   //eyes
   stroke(0);
   fill(255);
   ellipse(165, 180, 40, 20);
   ellipse(235, 180, 40, 20);
 
   fill("rgb(17,154,212)");
   ellipse(165, 180, 20, 20);
   ellipse(235, 180, 20, 20);
 
   fill(255);
   ellipse(169, 176, 8, 8);
   ellipse(239, 176, 8, 8);
 
   ellipse(160, 182, 5, 5);
   ellipse(230, 182, 5, 5);
 
   fill(0);
   rect(165, 160, 1, 11);
   rect(160, 161, 1, 9);
   rect(170, 161, 1, 9);
   rect(155, 165, 1, 6);
   rect(175, 165, 1, 6);
 
   rect(235, 160, 1, 11);
   rect(230, 161, 1, 9);
   rect(240, 161, 1, 9);
   rect(225, 165, 1, 6);
   rect(245, 165, 1, 6);
 
   //nose
   stroke(0);
   fill(241, 194, 150);
   ellipse(200, 210, 25, 15);
 
   noStroke();
   fill(241, 194, 150);
   ellipse(200, 206, 21, 10);
 
 
   //dress
   stroke(0);
   fill("white");
   ellipse(261, 235, 7, 15);
   noStroke();
   fill(241, 194, 150);
   ellipse(260, 235, 7, 16);
 
   stroke(0);
   fill("white");
   ellipse(150, 235, 7, 10);
   noStroke();
   fill(241, 194, 150);
   ellipse(151, 235, 7, 15);
   
   //blush
   noStroke()
   fill ("rgba(239,168,181,0.55)");
   ellipse(140, 230, 50, 50); 
   ellipse(260, 230, 50, 50); 
 
   //mouth
   fill(215,107,120);
   arc(200, 230, 65, 60, 0, radians(180));
   fill(255);
   
   fill(0);
 
   //body
   fill(241, 194, 150);
   rect(60, 354, 40, 50);
   fill(241, 194, 150);
   rect(301, 354, 40, 50);
 
   noStroke();
   fill("rgb(242,237,237)");
   rect(80, 325, 240, 90);
   circle(115, 370, 115);
   circle(285, 370, 115);
   
   //vest
   fill("#795548")
   rect(150, 325, 10, 90);
   rect(248, 325, 10, 90);
   rect(150, 370, 100, 90);
   
 
   //ear
   noStroke();
   fill(241, 194, 150);
   ellipse(105, 200, 30, 50);
   ellipse(295, 200, 30, 50);
 
   // bangs
   noStroke();
   fill("#ECBA23");
   triangle(90, 240, 120, 100, 230, 100);
   triangle(200, 100, 280, 100, 315, 243);
   
   fill('#ECBA23');
   arc(200, 150, 150, 100, PI, 0, OPEN); 

   fill('#ECBA23');
   arc(200, 150, 150, 100, PI, 0, OPEN); 
     
     
     //necklace
     fill(241, 194, 150);
     rect(173, 290, 60, 35);
     stroke("black");
     strokeWeight(0.5);
     fill("rgb(229,17,17)");
     circle(199, 354, 11);
     circle(210, 355, 11);
     circle(221, 352, 11);
     circle(231, 346, 11);
     circle(188, 351, 11);
     circle(178, 346, 11);
     circle(238, 337, 11);
     circle(238, 337, 11);
     circle(170.5, 337, 11);
     circle(165, 329, 11);
     circle(242, 329, 11);
     
     noStroke();
     fill(241, 194, 150);
     ellipse(203, 320, 59, 30);
   
     noFill();
     noStroke();
     fill(241, 194, 150);
     rect(173, 290, 60, 35);
   
    // Draw the first flower
     drawFlower(100, 150);
   
     // Draw the second flower
     drawFlower(300, 150);
     
     // Draw the third flower
     drawFlower(200, 80);
     
     // Draw the fourth flower
     drawFlower(140, 100);
     
      // Draw the fith flower
     drawFlower(250, 100);
   }
  
  function drawFlower(x, y) {
     // Draw petals
     stroke("black")
     strokeWeight(1)
     fill(255, 0, 0); 
     push();
     translate(x, y);
     for (let i = 0; i < 10; i++) {
       ellipse(0, -25, 20, 40); 
       rotate(PI/5);
     }
     pop();
     
     // Draw center of the flower
     fill(255, 255, 0); 
     ellipse(x, y, 18, 18); 
   }


class Dumpling {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.eaten = false;
  }

  display() {
    // CHORD fill mode.
    fill("#F1E787");
    stroke("#DFD68C");
    arc(this.x, this.y, 90, 80, 0, PI + QUARTER_PI, CHORD);
    noStroke();
    circle(this.x, this.y - 20, 25);
    circle(this.x + 15, this.y - 15, 25);
    circle(this.x + 35, this.y - 8, 25);
    circle(this.x - 20, this.y - 25, 25);
    circle(this.x - 35, this.y - 21, 25);
    circle(this.x + 45, this.y, 25);
  }

  update() {
    // If dumpling is marked as eaten, remove it from the array
    if (this.eaten) {
      let index = dumplings.indexOf(this);
      dumplings.splice(index, 1);
    }
  }

  overMouth(mouthX, mouthY) {
    // Check if the dumpling is dragged onto the mouth
    let d = dist(this.x, this.y, mouthX, mouthY);
    return d < this.size / 2;
  }
}

function mousePressed() {
  // Check if mouse is pressed on a dumpling
  for (let dumpling of dumplings) {
    if (dist(mouseX, mouseY, dumpling.x, dumpling.y) < dumpling.size / 2) {
      dumpling.dragging = true;
    }
  }
}

function mouseReleased() {
  // Release dragging
  for (let dumpling of dumplings) {
    dumpling.dragging = false;
  }
}

function mouseDragged() {
  // Drag the dumpling
  for (let dumpling of dumplings) {
    if (dumpling.dragging) {
      dumpling.x = mouseX;
      dumpling.y = mouseY;
    }
  }
}


