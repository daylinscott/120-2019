var circleY = 0;
var circleChange = 10;
var squareX = 0;
var squareChange = 10;
var r= 0;
var g= 0;
var b= 0;
var amount= 0;
function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);

}

function draw(){

  background(r, g, b);
  amount = amount + 1;
  if (amount > 50)
  {
  r= random(0, 255);
  g= random(0, 255);
  b= random(0, 255);
  amount = 0;
}
  fill(255, 204, 0);
  squareX += squareChange;
  //when it hits the right, send it back to the left
  //vice versus
  if (squareX > displayWidth || squareX < 0)
  {
    squareChange *=-1; //shorthand
  }
  square(squareX, 20, 55);

  fill('#fae')
  //move circle down 10
  circleY += circleChange;
  //when circle hits bottom subtract from circleY
  if(circleY > displayHeight)
  {
  circleChange = circleChange * -1;
}
//add to circleY when circle hits top
if (circleY < 0)
{circleChange = circleChange * -1;
}
  ellipse(400, circleY, 100);

}
