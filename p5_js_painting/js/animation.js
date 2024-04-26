// triangle color/texture image variables
let red;
let black;
let yellow;
let white;
let grey;
let dark_grey;

// frame color/texture variable
let white_frame;

// timer variable
let startTime;

function preload() {
  // triangle color/texture variables pointing to img source
  red = loadImage("photos/red_oil.JPG");
  black = loadImage("photos/black_oil.JPG");
  yellow = loadImage("photos/yellow_oil.JPG");
  white = loadImage("photos/white_oil.JPG");
  grey = loadImage("photos/grey_oil.JPG");
  dark_grey = loadImage("photos/dark_grey_oil.JPG");

  // frame color/texture variable pointing to img source
  white_frame = loadImage("photos/white_frame.JPG");
}

function setup() {
  // centers canvas background (black square)
  let cnv = createCanvas(800, 800, WEBGL);
  cnv.position(550, 25);
  cnv.id('myCanvas');
  background(0);
  startTime = millis();
}

function draw() {
  let duration = 5000;
  let timeElapsed = millis() - startTime;

  // centers frame/triangles into white canvas
  translate(-400, -400);

  beginShape()
  texture(white_frame)
  vertex(80, 80)
  vertex(80, 728)
  vertex(720, 728)
  vertex(720, 80)
  vertex(80, 80)
  endShape()

  beginShape()
  texture(white_frame)
  vertex(100, 100)
  vertex(100, 700)
  vertex(700, 700)
  vertex(700, 100)
  vertex(100, 100)
  endShape()

  // grey triangle
  // properties & coordinates
  if (timeElapsed > 500) {
    texture(grey);
    triangle(337.5, 474.9, 337.5, 700, 555, 700);
  }

  // black triangle
  if (timeElapsed > 1000) {
    beginShape();
    texture(black)
    vertex(100, 325);
    vertex(311.081, 100);
    vertex(337.5, 100);
    vertex(337.50, 696);
    vertex(100, 475)
    endShape();
  }

  // red triangle
  if (timeElapsed > 1500) {
    beginShape();
    texture(red)
    vertex(337.50, 474.7);
    vertex(700, 100);
    vertex(700, 700);
    vertex(555, 700);
    endShape();
  }

  // top white triangle
  if (timeElapsed > 2000) {
    beginShape();
    texture(white)
    vertex(337.50, 100);
    vertex(700, 100);
    vertex(410, 100);
    vertex(562, 243);
    vertex(337.50, 474.7)
    endShape();
    // grey triangle
    // properties & coordinates
    if (timeElapsed > 2500) {
      texture(grey);
      triangle(100, 100, 100, 325, 311.081, 100);
    }
  }

  // bottom white triangle 
  // properties & coordinates
  if (timeElapsed > 3000) {
    texture(white);
    triangle(100, 700, 222, 587.5, 341.5, 700.);
  }
  
  // yellow triangle 
  // properties & coordinates 
  if (timeElapsed > 3500) {
    texture(yellow);
    triangle(100, 474.9, 100, 700, 222, 588);
  }

  // dark grey triangle 
  // properties & coordinates
  if (timeElapsed > 4000) {
    texture(dark_grey);
    triangle(410, 100, 700, 100, 562, 243);
  }

  // black line located at the top right of the white frame
  // properties & coordinates
  if (timeElapsed > 4500) {
    line(700, 100, 719, 80,);
  }

  if (timeElapsed > duration) {
    startTime = millis();
  }
}







