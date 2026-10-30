
let cS=800

function setup() {
    createCanvas(cS, cS);
}

function draw() {
    background(220);
for (let x = 0; x <= width; x += 20) {
  ellipse(x, 300, 25, 25);
}

for (let d=300; d > 0; d-=20){
    circle (cS/2, cS/2, d);
}
for (let x = 0; x <= width; x += 20) {
  ellipse(x, 600, 25, 25);
}
for (let y=0; y<= height; y += 20){
    circle(cs/2, y, 25);
}

}

    

