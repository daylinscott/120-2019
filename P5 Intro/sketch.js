var x = 100;
var y = 200;
function setup() {
    createCanvas(800, 600);
    background(0);
}

function draw() {
    background(0);
    if(mouseIsPressed)
    {
        fill("purple");
    }
    else
    {
        fill("red");
    }
    y = y + 1;
    ellipse(x, y, 50, 50);

}