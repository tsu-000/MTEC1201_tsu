let canvasSize = 500;
let currentScene = 0;
let numScenes = 2;

function setup() { 
  createCanvas(canvasSize, canvasSize);
}

function draw() {
  background(0);
  if(currentScene === 0) {
    drawScene0();
  }
  else if(currentScene === 1) {
    drawScene1();
  }
}

function mousePressed() {
  currentScene++;
  if(currentScene >= numScenes) {
    currentScene = 0;
  }

}

function drawScene0() {
background(255, 0, 0);
fill (0,0,255);
 textFont('Courier New');
  textSize(24);
  text('press mouse to change color', 35, 55);


}

function drawScene1() {
background(0, 0, 255);  
fill(255, 0, 0);
 textFont('arial');
  textSize(24);
  text('press mouse to change color', 35, 55);
}
