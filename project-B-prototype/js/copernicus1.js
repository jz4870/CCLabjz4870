let angleEarth = 0;
let angleMoon = 0;
let angleMercury = 0;
let angleVenus = 0;
let angleMars = 0;
let angleJupiter = 0;
let angleSaturn = 0;
let angleUranus = 0;
let angleNeptune = 0;

let R1 = 200;
let R2 = 150;
let R3 = 250;
let R4 = 320;
let R5 = 400;
let R6 = 480;
let R7 = 540;
let R8 = 580;
let R9 = 620;

function setup() {
  canvas = createCanvas(600, 700);
  canvas.parent('p5CanvasContainer1');
  angleMode(DEGREES);
}

function draw() {
  background("#030541");
  drawStars();
  drawSun();
  drawOrbit(R1);
  drawOrbit(R2);
  drawOrbit(R3);
  drawOrbit(R4);
  drawOrbit(R5);
  drawOrbit(R6);
  drawOrbit(R7);
  drawOrbit(R8);
  drawOrbit(R9);
  drawEarth(R1);
  drawMoon(R1);
  drawMercury(R2);
  drawVenus(R2);
  drawMars(R3);
  drawJupiter(R4);
  drawSaturn(R5);
  drawUranus(R6);
  drawNeptune(R7);
  updateAngles();
}

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

function drawEarth(orbitRadius) {
  push();
  translate(width / 2, height / 2);
  rotate(angleEarth);
  noStroke();
  fill("#7FE709");
  ellipse(orbitRadius, 0, 35, 35);
  pop();
}

function drawMoon(orbitRadius) {
  push();
  translate(width / 2, height / 2);
  rotate(angleEarth);
  translate(orbitRadius, 0);
  rotate(angleMoon);
  noStroke();
  fill("#c0fcf4");
  ellipse(20, 0, 8, 8);
  pop();
}

function drawMercury(orbitRadius) {
  push();
  translate(width / 2, height / 2);
  rotate(angleMercury);
  noStroke();
  fill("#C5C2C2");
  ellipse(orbitRadius, 0, 20, 20);
  pop();
}

function drawVenus(orbitRadius) {
  push();
  translate(width / 2, height / 2);
  rotate(angleVenus);
  noStroke();
  fill("#FF8507");
  ellipse(orbitRadius, 0, 25, 25);
  pop();
}

function drawMars(orbitRadius) {
  push();
  translate(width / 2, height / 2);
  rotate(angleMars);
  noStroke();
  fill("#CC3300");
  ellipse(orbitRadius, 0, 30, 30);
  pop();
}

function drawJupiter(orbitRadius) {
  push();
  translate(width / 2, height / 2);
  rotate(angleJupiter);
  noStroke();
  fill("#F7A61B");
  ellipse(orbitRadius, 0, 70, 70);
  pop();
}

function drawSaturn(orbitRadius) {
  push();
  translate(width / 2, height / 2);
  rotate(angleSaturn);
  noStroke();
  fill("#E6DAAD");
  ellipse(orbitRadius, 0, 60, 60);
  pop();
}

function drawUranus(orbitRadius) {
  push();
  translate(width / 2, height / 2);
  rotate(angleUranus);
  noStroke();
  fill("#7DF9FF");
  ellipse(orbitRadius, 0, 50, 50);
  pop();
}

function drawNeptune(orbitRadius) {
  push();
  translate(width / 2, height / 2);
  rotate(angleNeptune);
  noStroke();
  fill("#286DC0");
  ellipse(orbitRadius, 0, 45, 45);
  pop();
}

function drawOrbit(orbitRadius) {
  noFill();
  strokeWeight(1);
  stroke("rgba(255,255,255,0.63)");
  circle(width / 2, height / 2, orbitRadius * 2);
}

function updateAngles() {
  angleEarth += 1;
  angleMoon += 3;
  angleMercury += 3;
  angleVenus += 2;
  angleMars += 1.5;
  angleJupiter += 0.5;
  angleSaturn += 0.3;
  angleUranus += 0.2;
  angleNeptune += 0.15;
}


