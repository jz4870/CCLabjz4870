//hold the mouse pressed for the meteor to appear on screen 

angleEarth = 0;
let angleMoon = 0;
let angleMercury = 0;
let angleVenus = 0;
let R1 = 230;
let R2 = 40;
let R3 = 135;
let R4 = 180;

let meteorX, meteorY;
let meteorDiameter = 100;
let meteorSpeed =9;
let meteorReachedCenter = false;

let deg = 0;
let speed = 1;

let cowTextDisplayed = false;
let cows = [];

function setup() {
let cnv = createCanvas(800, 500);
  cnv.parent("p5-canvas-container")
  angleMode(DEGREES);
  noCursor();
}

function draw() {
  background("#030541");
  drawOrbit();
  drawStars();
  drawSun();
  drawEarth();
  drawMoon();
  drawMercury();
  drawVenus();
  drawMeteor();
  drawSpaceShip();
  updateAngles();
  drawCows();
  
}
//conditionals - 28.02
//explanation: This function controls the animation of the meteor. If the mouse is pressed and the meteor hasn't reached the center: - It initializes the meteor's position if not already defined. - Increases the meteor's size. - Draws the meteor at its current position. - Updates the meteor's position based on its speed. - If the meteor reaches the center of the canvas, it sets a flag (meteorReachedCenter) to true. - It displays the meteor and the text "cosmic worms" at the center of the canvas.
function drawMeteor() {
  push();
  
  //"!ReachedCenter" - checks if the meteor has not reached center
  //if (!meteorX || !meteorY) - Checks if meteorX or meteorY is not defined (if the meteor's position is not initialized). - If true, it initializes the meteor's position to (0, 0).
  if (mouseIsPressed && !meteorReachedCenter) {
    if (!meteorX || !meteorY) {
      meteorX = 0;
      meteorY = 0;
    }

    meteorDiameter += 10;

    noStroke();
    fill("#9B8B8B");
    ellipse(meteorX, meteorY, meteorDiameter, meteorDiameter);
    
//By incrementing both meteorX and meteorY with the same value (meteorSpeed), the meteor moves diagonally across the canvas.
    meteorX += meteorSpeed;
    meteorY += meteorSpeed;

// Checks if the meteor has reached the center of the canvas. - If true, it sets meteorReachedCenter to true.
    if (meteorX >= width / 2 && meteorY >= height / 2) {
      meteorReachedCenter = true;
    }
  }

  if (meteorReachedCenter && !cowTextDisplayed) {
     noStroke();
    fill("#9B8B8B");
    ellipse(meteorX, meteorY, meteorDiameter, meteorDiameter);
  
    textAlign(CENTER, CENTER);
    textSize(16);
    fill(0); // Set text fill color
    text("Press 'C' to seed cows, press 'D' to delete", width / 2, height / 2);
  }
  pop();
}

//transformations - 29.02
function drawSpaceShip() {
  push();
  translate(mouseX, mouseY);
 //Cow
  //body
  fill("white");
  rect(-30, -30, 115, 80, 25);
  //ears 
  ellipse(-60, -60, 50, 25);
  ellipse(20, -60, 50, 25);
  //head
  noStroke();
  rect(-60, -80, 80, 70, 29);
   //nose
  noStroke();
  fill("pink");
  rect(-50, -30, 70, 40, 29);
  //nostrils
  noStroke();
  fill("rgb(230,117,137)");
  ellipse(-25, -10, 10, 10);
  ellipse(-5, -10, 10, 10);
  //eyes
  fill("black");
  ellipse(-35, -47, 15, 20);
  ellipse(-5, -47, 15, 20);
  stroke("black");
  strokeWeight(1);
  fill("white")
  ellipse(-32, -43, 7, 7);
  ellipse(-7, -43, 7, 7);
  //stains
  noStroke();
  fill("black")
  ellipse(60, -10, 40, 30);
  ellipse(70, 5, 30, 40);
  fill("black")
  ellipse(10, 25, 40, 30);
  ellipse(30, 10, 30, 40);
  //spaceship top
  stroke(0);
  strokeWeight(6);
  fill(173, 216, 230, 63);
  ellipse(0, 0, 170, 200)
  // spaceship bottom
  fill("rgb(90,85,85)");
  ellipse(-10, 100, 300, 150);
  
  pop();

  deg += speed;
}

//loops - 27.02
function drawOrbit() {
  noFill();
  strokeWeight(1);
  stroke("rgba(255,255,255,0.63)");
  for (let dia = 450; dia > 120; dia -= 90) {
    circle(400, 250, dia);
  }
}
//loops - 27.02
function drawStars() {
  frameRate(10);
  noStroke();

  for (let i = 0; i < 1000; i++) {
    drawOneStar();
  }
}

function drawOneStar() {
  let x = random(width);
  let y = random(height);
  let size = random(1, 4);
  let brightness = random(200, 300);
  let alpha = random(50, 255);

  fill(brightness, alpha);
  ellipse(x, y, size, size);
}

function drawSun() {
  push();
  translate(width / 2, height / 2);
  fill("rgba(255,165,0,0.64)")
  ellipse(0, 0, 220, 220)
  fill("#f2d30a");
  ellipse(0, 0, 150, 150);
  pop();
}

function drawEarth() {
  push();
  translate(width / 2, height / 2);
  rotate(angleEarth);
  noStroke();
  fill("#7FE709");
  ellipse(R1, 0, 60, 60);
  pop();
}

function drawMoon() {
  push();
  translate(width / 2, height / 2);
  rotate(angleEarth);
  translate(R1, 0);
  rotate(angleMoon);
  noStroke();
  fill("#c0fcf4");
  ellipse(R2, 0, 10, 10);
  pop();
}

function drawMercury() {
  push();
  translate(width / 2, height / 2);
  rotate(angleMercury);
  noStroke();
  fill("#C5C2C2");
  ellipse(R3, 0, 30, 30);
  pop();
}

function drawVenus() {
  push();
  translate(width / 2, height / 2);
  rotate(angleVenus);
  noStroke();
  fill("#FF8507");
  ellipse(R4, 0, 40, 40);
  pop();
}

function updateAngles() {
  angleEarth += 1;
  angleMoon += 3;
  angleMercury += 3;
  angleVenus += 2;
}

function drawCows() {
  for (let i = 0; i < cows.length; i++) {
    drawCow(cows[i].x, cows[i].y);
  }
}

function drawCow(x, y) {
  push();
  translate(x, y);

  fill("white");
  rect(190, 210, 20, 50, 10);

  fill("white");
  rect(250, 210, 20, 50, 10);

  fill("white");
  rect(170, 150, 115, 80, 25);

  ellipse(150, 125, 50, 25);
  ellipse(210, 125, 50, 25);

  noStroke();
  rect(140, 100, 80, 70, 29);

  fill("pink");
  rect(145, 150, 70, 40, 29);

  noStroke();
  fill("rgb(230,117,137)");
  ellipse(165, 170, 10, 10);
  ellipse(195, 170, 10, 10);

  fill("black");
  ellipse(170, 135, 15, 20);
  ellipse(190, 135, 15, 20);

  stroke("black");
  strokeWeight(1);
  fill("white");
  ellipse(172, 140, 7, 7);
  ellipse(188, 140, 7, 7);

  noStroke();
  fill("black");
  ellipse(260, 170, 40, 30);
  ellipse(272, 180, 30, 40);

  fill("black");
  ellipse(220, 200, 40, 30);
  ellipse(200, 210, 30, 40);

  stroke("rgb(138,14,14)");
  strokeWeight(7);
  fill(200, 210, 230, 63);
  circle(181, 130, 130);
  line(150, 195, 220, 195);

  pop();
}

function keyPressed() {
  if (key === "c") {
    cows.push({ x: mouseX, y: mouseY });
    } else if (key === "d" && cows.length > 0) {
    // Remove the last cow from the array
    cows.pop();
  }
}