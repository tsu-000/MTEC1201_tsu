
//setting variables 
//canvas size 
let cSH = 600;
let cSW = 800;
//scene variable 
let introScene = 0;
//bee movement variable 
let beeX = cSW/4;
let beeY = cSH/4;
//fonts :D
let flufffont;
let plantfont;
//the smiley flower :))))
let flower;
//the bulb sizes
let elW1 = 1;
let elH1 = 1;
let elW2 = 1;
let elH2 = 1;
let elW3 = 1;
let elH3 = 1;
//time and fade stuff for the instructions
let currentTime = 0;
let fade=255;
let timer =10000;
let fadeAmount = 1;
//the wincons
let winflower1 = false;
let winflower2 = false; 
let winflower3 = false;



//loading all the fonts and pictures :3
function preload() {
  flufffont = loadFont('Fonts/Fluff.ttf');
  plantfont = loadFont('Fonts/Plant.ttf');
  flower = loadImage('Images/smileflower.png');
}




function setup() {
  createCanvas(cSW, cSH);
}

function draw() {
  background(190, 242, 176);

if (introScene == 0){
  drawIntro();
}
if (introScene == 1){
  drawGame();
}

if (winflower1 == true && winflower2 == true && winflower3 == true){
  winscreen();
}
}

//intro screen function
function drawIntro(){

  textSize(50);
  fill(255, 145, 240);
  textFont(plantfont);
  textAlign(CENTER);
  text("POLLINATOR GAME", cSW/2, cSH/2-100);
  textSize(30);
  text("PRESS *S* TO START", cSW/2, cSH/2);
}

//all the keypressed stuff I also have to reset variables after the reset
function keyPressed() {
  if (key === 's') {
    introScene = 1;
  }
  if (key === 'r') {
    introScene = 0;
    winflower1 = false;
    winflower2 = false;
    winflower3 = false;
    elW1 = 1;
    elH1 = 1;
    elW2 = 1;
    elH2 = 1;
    elW3 = 1;
    elH3 = 1;
} 
}

function bee (){
  //this arrowkey movement code was taken from the p5.js reference page for keyIsDown() 
  if (keyIsDown(LEFT_ARROW) === true) {
    beeX -= 3;
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    beeX += 3;
  }

  if (keyIsDown(UP_ARROW) === true) {
    beeY  -= 3;
  }

  if (keyIsDown(DOWN_ARROW) === true) {
    beeY += 3;
  }

  push();

  stroke(132, 202, 235);
  strokeWeight(3);
  fill (171, 249, 255);
  circle (beeX-10,beeY-20,15)
  circle (beeX+10,beeY-20,15)
  fill (255, 239, 119);
  stroke (0,0,0);
  strokeWeight (5);
  circle( beeX, beeY, 30);
  fill (0,0,0);
  circle (beeX, beeY, 10);
  noStroke();
  fill (255, 239, 119);
  circle (beeX, beeY, 5);
  pop();
}

function hills(){
  background(205, 235, 247);
  //hills for background
  push();
  noStroke();
  fill(128, 207, 116);
ellipse (cSW/3,600,800,300);
  fill(130, 227, 99);
  ellipse (cSW*2/3,600,800,300);
  pop();
}

function stems () {
  push();
  noStroke();
   fill (52, 150, 58);
  rect(cSW*3/4,cSH-200,10,300);
  rect(cSW*1/4,cSH-200,10,300);
  rect(cSW*1/2,cSH-300,10,300);
  pop();

}

function bulb (){
  push();
  fill (52, 150, 58);
  noStroke();
  ellipseMode(CENTER)
  ellipse (cSW*3/4,cSH-200,elW1,elH1);
  ellipse (cSW*1/4,cSH-200,elW2,elH2);
  ellipse (cSW*1/2,cSH-300,elW3,elH3);
  pop();
}


//the intro instructions that fade away after like 7 seconds?? 
//i tried to experiment w it showing back up after the reset and couldnt rly firgure it out so i just made it so that the instructions fade away and dont come back after the reset
function instructions(){
  textSize(30);
  currentTime = millis();
  push();
  textAlign(LEFT);
  fill(0,0,0, fade);
  stroke(255,255,255, fade);
  strokeWeight(3);
  textFont(flufffont);
  text("Use the arrow keys to move the bee around the screen", 50, cSH/2-100);
  text("Click the top of the stem to make the flower grow", 50, cSH/2-150);
  
  if (currentTime> timer) 
{
  print(fade);
  print (currentTime);
  fade -= fadeAmount;
   }
   pop();
}

function drawGame(){
  
  hills();
  bee();
  stems();

  instructions();
  bulb();
  //i took the like true false to make the winscreen based on the boolean page on p5js references
  if (elW1 == 5 || elH1 == 5){
    flowerImage1();
    winflower1 = true;
  }
  if (elW2 == 5 || elH2 == 5){
    flowerImage2();
    winflower2 = true;
  }
  if (elW3 == 5 || elH3 == 5){
    flowerImage3();
    winflower3 = true;
  }

}

function winscreen(){

  background(255, 239, 119);
  textAlign(CENTER);
  textSize(50);
  fill(168, 116, 219);
  textFont(plantfont);
  text("Flowers have grown!", cSW/2, cSH/2-100);
  text("Press *R* to restart", cSW/2, cSH/2);
  image(flower, cSW/2-50, cSH/2+50, 120, 120);
}

//pressing the mouse makes the bulb grow into a funny flower w a smile :)
function mousePressed() 
{ if (dist(mouseX, mouseY, cSW*3/4,cSH-200) < 10 ) {
   elW1 += 3;
  elH1 += 3;
}
 
  if (elW1 > 50 || elH1 > 50){ 
    elW1 = 5;
    elH1 = 5;
    
  }


  if (dist(mouseX, mouseY, cSW*1/4,cSH-200) < 10 ) {
    elW2 += 3;
    elH2 += 3;
    }
     if (elW2 > 50 || elH2 > 50){ 
      elW2 = 5;
      elH2 = 5;
      
  }
if (dist(mouseX, mouseY, cSW*1/2,cSH-300) < 10 ) {
    elW3 += 3;
    elH3 += 3;  
}
  if (elW3 > 50 || elH3 > 50){
    elW3 = 5;
    elH3 = 5;
   
  }


}
  //flowers functionified 
function flowerImage1(){
  image(flower, cSW*3/4-50, cSH-300, 120, 120);
}
function flowerImage2(){
  image(flower, cSW*1/4-50, cSH-300, 120, 120);
}
function flowerImage3(){
  image(flower, cSW*1/2-50, cSH-400, 120, 120);
}