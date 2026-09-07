//tsu F
//Daisy
//I plan to explore the theme of like floral nature? this is the first piece as I thought it would be a shape that isn't hard to execute through p5js 
function setup() {
  createCanvas(1200, 1200);
  colorMode(RGB, 255)
}

function draw() {
  background(181, 243, 255); //sky blue background color
  //leaves & stem
  fill(142, 217, 116);
  noStroke();
  quad (550,680,600,850, 500,900,450,850);
  quad (650,680,750,850,700,900,600,850);
  rect (600,600,20,600); //stem
  //petals
  stroke(249, 236, 255);
  strokeWeight(40);
  line(600,600, 600, 800); 
  line(600,600, 800, 600);
  line(600,600, 500,410);
  line(600,600, 680,410);
  line(600,600, 350,450);
  line(600,600, 750,450);
  line(600,600, 400, 600);
  line(600,600, 600, 400);
  line(600,600, 800, 800);
  line(600,600, 400, 400);
  line(600,600, 400, 800);
  line(600,600, 800, 400);
  line(600,600, 500,790);
  line(600,600, 700,790);
  //center of flower
  fill(2248, 255, 204);
  noStroke();
  ellipse(600, 600, 100, 100);

}
