

let cSH = 600;
let cSW = 800;
let introScene = 0;





function setup() {
  createCanvas(cSW, cSH);
}

function draw() {
  background(220);

if (introScene == 0){
  drawIntro();
}
  bee();

}


function bee (){
  stroke(132, 202, 235);
  strokeWeight(3);
  fill (171, 249, 255);
  circle (pmouseX-10,pmouseY-20,15)
  circle (pmouseX+10,pmouseY-20,15)
  fill (255, 239, 119);
  stroke (0,0,0);
  strokeWeight (5);
  circle( pmouseX, pmouseY, 30);
  fill (0,0,0);
  circle (pmouseX, pmouseY, 10);
  noStroke();
  fill (255, 239, 119);
  circle (pmouseX, pmouseY, 5);
}

function drawIntro(){
  textSize(50);
  fill(0, 0, 0);
  textAlign(CENTER);
  text("Welcome to Bee Game!", cSW/2, cSH/2-100);
  textSize(30);
  text("Click to start", cSW/2, cSH/2);
}