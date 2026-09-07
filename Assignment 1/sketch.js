function setup() {
  createCanvas(1200, 1200);
  colorMode(RGB, 255)
}

function draw() {
  background(181, 243, 255); //sky blue background color
  //petals
  stroke(249, 236, 255);
  strokeWeight(40);
  line(600,600, 600, 800); 
  line(600,600, 800, 600);
  line(600,600, 400, 600);
  line(600,600, 600, 400);
  line(600,600, 800, 800);
  line(600,600, 400, 400);
  line(600,600, 400, 800);
  line(600,600, 800, 400);
  //center of flower
  fill(2248, 255, 204);
  noStroke();
  ellipse(600, 600, 100, 100);
  //leaves
  fill(142, 217, 116);
  noStroke();
  quad (550,680,600,850, 500,900,450,850);


}
