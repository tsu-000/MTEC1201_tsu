//Tsu F ss3
//click repeatedly on the top of the stem to create a flower



const cS = 600;

function setup() {
    createCanvas(cS,cS);
      background(245, 200, 152);
      
}

function mousePressed(){
   roundFlower();
}

function draw() {
 stem();
}


//function lets random size of circle and random color within a set parameter. 
function roundFlower () {

   let rmX= mouseX-60;
    let rmY=mouseY-60;
    let rX= mouseX+60;
    let rY= mouseY+60;
    let circleX = random(rmX, rX);
    let circleY = random(rmY, rY);
    let circleSize = random(30,50);
    let r =random(0,200);
    let g = random(100,230);
    let b = random(180,255);

    fill(r,g,b);
    noStroke();

    circle(circleX,circleY,circleSize);

}

//geometry for stems made into its own function 
function stem () {
   noStroke();
   fill(57, 158, 86);
   rect (cS/2, cS/2, 10, cS/2);
   circle (cS/2, cS/2, 20);
   rect (cS/2-200, cS/2+90, 10, cS/2);
   circle (cS/2-200, cS/2+90, 20);
   rect (cS/2+200, cS/2+90, 10, cS/2);
   circle (cS/2+200, cS/2+90, 20);

}