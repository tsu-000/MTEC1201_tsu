


const cS = 600;

function setup() {
    createCanvas(cS,cS);
     background(220);
}

function draw() {
   
    

}
function mousePressed(){
   roundFlower;
}


function roundFlower () {

 let rmX= mouseX-60;
    let rmY=mouseY-60;
    let rX= mouseX+60;
    let rY= mouseY+60;
    let circleX = random(rmX, rX);
    let circleY = random(rmY, rY);
    let circleSize = random(30,50);

    circle(circleX,circleY,circleSize);

}