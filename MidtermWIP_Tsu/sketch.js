

let cSH = 600;
let cSW = 800;






function setup() {
  createCanvas(cSW, cSH);
}

function draw() {
  background(220);
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