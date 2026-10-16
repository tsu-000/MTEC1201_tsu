

let cSH = 600;
let cSW = 800;
let introScene = 0;
let beeX = cSW/4;
let beeY = cSH/4;
let flufffont;
let plantfont;





function preload() {
  flufffont = loadFont('Fonts/Fluff.ttf');
  plantfont = loadFont('Fonts/Plant.ttf');
}




function setup() {
  createCanvas(cSW, cSH);
}

function draw() {
  background(220);
/* 
if (introScene == 0){
  drawIntro();
}
if (introScene == 1){
  drawGame();
}
 */
  drawGame();
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
  
}

function hills(){
  background(205, 235, 247);
  //hills for background
  noStroke();
  fill(128, 207, 116);
ellipse (cSW/3,600,800,300);
  fill(130, 227, 99);
  ellipse (cSW*2/3,600,800,300);
}

function stems () {
   fill (52, 150, 58);
  rect(cSW*3/4,cSH-300,10,300);

}



/* function drawIntro(){
  textSize(50);
  fill(0, 0, 0);
  textAlign(CENTER);
  text("gametitle placeholder", cSW/2, cSH/2-100);
  textSize(30);
  text("press s key to start", cSW/2, cSH/2);
}

if (keyIsPressed && key == 's') {
  introScene = 1;
} */
function instructions(){
  textSize(24);
  fill(240, 206, 151);
  stroke(255,255,255);
  strokeWeight(3);
  textFont(flufffont);
  text("Use the arrow keys to move the bee around the screen", 50, cSH/2-100);
}

function drawGame(){
  
  hills();
  bee();
  stems();
  
 /*  if (isPlaying === false) {
    instructions();
   }
  
  function keyPressed() {
  if (key === LEFT_ARROW || key === RIGHT_ARROW || key === UP_ARROW || key === DOWN_ARROW) {
    isPlaying = true;
  } */

  instructions();
}


  
