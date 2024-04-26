// triangle color/texture image variables
let red,black,yellow,white,grey,dark_grey;


// frame color/texture variable
let white_frame;

// initial parameters for angle, scaleFactor and time variables
let angle = 0.01;
let scaleFactor = 1;
let time = 0;

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

}


function draw() {
  if (keyIsPressed === true) {
    let currentTime = millis();
    // manipulates the time of angle and scale factor changes in milliseconds
    if (currentTime - time > 1) {
      // increases the starting angle 
      angle += 0.85;
      // scales down the white canvas and shapes by 1%
      scaleFactor *= .99;
    }
    // applies and initiates the angle parameter above and rotates the canvas and shapes around the x and y axis
    rotate(angle);
    //  applies and initiates the scale factor parameter above
    scale(scaleFactor);
  }
  
  translate(-400, -400);
  
  texture(white_frame)
  beginShape()
  vertex(80, 80)
  vertex(80, 728)
  vertex(720, 728)
  vertex(720, 80)
  vertex(80, 80)
  endShape()

  texture(white_frame)
  beginShape()
  vertex(100, 100)
  vertex(100, 700)
  vertex(700, 700)
  vertex(700, 100)
  vertex(100, 100)
  endShape()

  // grey triangles 
  // properties & coordinates
  texture(grey);
  triangle(100, 100, 100, 325, 311.081, 100);
  triangle(337.5, 474.9, 337.5, 700, 555, 700);

  // bottom white triangle 
  // properties & coordinates
  texture(white);
  triangle(100, 700, 222, 587.5, 341.5, 700.);

  // top white triangle
  texture(white)
  beginShape();
  vertex(337.50, 100);
  vertex(700, 100);
  vertex(410, 100);
  vertex(562, 243);
  vertex(337.50, 474.7)
  endShape();

  // red triangle
  texture(red)
  beginShape();
  vertex(337.50, 474.7);
  vertex(700, 100);
  vertex(700, 700);
  vertex(555, 700);
  endShape();


  // black triangle
  texture(black)
  beginShape();
  vertex(100, 325);
  vertex(311.081, 100);
  vertex(337.5, 100);
  vertex(337.50, 696);
  vertex(100, 475)
  endShape();

  // yellow triangle 
  // properties & coordinates
  texture(yellow);
  triangle(100, 474.9, 100, 700, 222, 588);

  // dark grey triangle 
  // properties & coordinates
  texture(dark_grey);
  triangle(410, 100, 700, 100, 562, 243);

  // black line located at the top right of the white frame
  // properties & coordinates
  line(700, 100, 719, 80,);

}

function keyReleased() {
  background(0)
  angle = 0
  scaleFactor = 1
}










