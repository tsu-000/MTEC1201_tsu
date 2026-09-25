const canvasS = 700;
let size=50;

function setup() {
    createCanvas(canvasS, canvasS);
     background(220);
}

function draw() {
   

    house(20,50,100);

}

function mousePressed () {
    house(mouseX-size/2,mouseY-size/2,size);
    size = 50;
}

function keyPressed () {
    size = size+10;
}


function house(houseX,houseY,houseSize) {
    fill(177, 237, 13);

    let houseRA =houseSize/5;
    let houseRight =houseX+houseSize;

   
    square (houseX,houseY,houseSize);
    fill(255, 203, 63);
    quad(houseX,houseY,
        houseRight,houseY,
        houseRight-houseRA, houseY-houseRA,
        houseX+houseRA, houseY-houseRA
    );
}
