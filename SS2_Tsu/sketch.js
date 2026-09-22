

//ellipse Width
let eW=10;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(205, 235, 247);
  //hills for background
  noStroke();
  fill(128, 207, 116);
ellipse (50,400,400,300);
  fill(130, 227, 99);
  ellipse (350,400,400,300);
  

  //stem and stuff for interactable expanding flower
  fill (52, 150, 58);
  rect(190,250,10,300);
  //stem end 

  //growing petals 
  fill (255, 209, 224);
  ellipse(170,250,eW,30);
  ellipse (190,250,eW,30);
  ellipse (210,250,eW,30);
  ellipse (190,230,30,eW);
  ellipse (190,270,30,eW);
  //center of flower 
  fill (255, 232, 155);
  circle (190,250, 40);

  //bee that follows mouse
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
  //bee code is done

}
//flower grow function
function mousePressed() {
  eW=eW+10;
}