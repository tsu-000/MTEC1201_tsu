//tsu week 4 warmup
//line that stretches and shrinks around center based on mouse position

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    stroke(183, 134, 245);
    strokeWeight(15);
    line(200,200,mouseX,mouseY);
    line(200,200,mouseX+200,mouseY+200);
    line(200,200,mouseX-200,mouseY-200);

}
