
var squareCount = 30;
var actRandomSeed = 0;
let clr = 0;
var rectSize = 40;
var r = Math.floor(Math.random() * 30);; 
var g= Math.floor(Math.random() * 30);; 
var b = Math.floor(Math.random() * 256);;
var c = Math.floor(Math.random() * 256);;
var song; 

function preload(){
  song = loadSound('DRAMATIC.mp3');
}

function setup() {

  createCanvas(1200, 1200);
  song.play();
  noStroke();
  
}

function draw() {
    fill(r,g,b,c);

  clear();
  
  randomSeed(actRandomSeed);

  for (var gridY = 0; gridY < squareCount; gridY++) {
    for (var gridX = 0; gridX < squareCount; gridX++) {

      var posX = width / squareCount * gridX;
      var posY = height / squareCount * gridY;

      var shiftX1 = mouseX / 20 * random(-1, 1);
      var shiftY1 = mouseY / 20 * random(-1, 1);
      var shiftX2 = mouseX / 20 * random(-1, 1);
      var shiftY2 = mouseY / 20 * random(-1, 1);
      var shiftX3 = mouseX / 20 * random(-1, 1);
      var shiftY3 = mouseY / 20 * random(-1, 1);
      var shiftX4 = mouseX / 20 * random(-1, 1);
      var shiftY4 = mouseY / 20 * random(-1, 1);

      push();
      translate(posX, posY);
      beginShape();
      vertex(shiftX1, shiftY1);
      vertex(rectSize + shiftX2, shiftY2);
      vertex(rectSize + shiftX3, rectSize + shiftY3);
      vertex(shiftX4, rectSize + shiftY4);
      endShape();
      pop();
    }
  }
}

function mousePressed() {
  actRandomSeed = random(100000);
  
}


function keyPressed() {
  if (keyCode === 72) {
    
 r = Math.floor(Math.random() * 30);; 
 g= Math.floor(Math.random() * 30);; 
 b = Math.floor(Math.random() * 256);;
 c = Math.floor(Math.random() * 256);;
 
  } 
  
}
function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
   
   
  
}