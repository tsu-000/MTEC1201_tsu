

let cSH = 600;
let cSW = 800;
let introScene = 0;
let beeX = cSW/4;
let beeY = cSH/4;
let flufffont;
let plantfont;
let elW = 5;
let elH = 5;
let currentTime = 0;
let fade=255;
let timer =7000;
let fadeAmount = 1;
let mousePositionX;
let mousePositionY;
let isPlaying = false;



function preload() {
  flufffont = loadFont('Fonts/Fluff.ttf');
  plantfont = loadFont('Fonts/Plant.ttf');
}




function setup() {
  createCanvas(cSW, cSH);
}

function draw() {
  background(220);

if (introScene == 0){
  drawIntro();
}
if (introScene == 1){
  drawGame();
}
 
}

//intro screen code but im having trouble getting it to work properly 

function drawIntro(){
  textSize(50);
  fill(0, 0, 0);
  textFont(plantfont);
  textAlign(CENTER);
  text("GAMETITLE PLACEHOLDER", cSW/2, cSH/2-100);
  textSize(30);
  text("PRESS *S* TO START", cSW/2, cSH/2);
}

function keyPressed() {
  if (key === 's') {
    introScene = 1;
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
  ellipse (cSW*3/4,cSH-200,elW,elH);
  ellipse (cSW*1/4,cSH-200,elW,elH);
  ellipse (cSW*1/2,cSH-300,elW,elH);
  pop();
}



function instructions(){
  textSize(30);
  currentTime = millis();
  push();
  textAlign(LEFT);
  fill(255, 206, 151, fade);
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

   
}
if (mouseX==mousePositionX && mouseY==mousePositionY){
  mousePositionX= cSW*3/4+-20;
  mousePositionY= cSH-200+-20;
  elW += 5;
  elH += 5;
}
  

