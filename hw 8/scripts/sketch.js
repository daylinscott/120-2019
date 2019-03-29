var r = 256;
var g = 256;
var b = 256;


function setup() {
  createCanvas (displayWidth, displayHeight, WEBGL);
  // WEBGL, constant, allows to create 3D objects
  background(255, 204, 100);
}

function draw() {

  background(255, 204, 100);

  fill(random(r), random(g), random(b))
  createCone(200, -500, 0,"xDirection")
  createCone(50, 200, 0, "yDirection")
  createCone(20, 600, 0, "xDirection")
  //for(var i = 0; i < 5; i++)
  //{
  //push();
  //rotateX(millis()/1000);
  //translate(-500, 200);
  //cone(80, 140);
  //pop();

  //push();
  //rotateY(millis()/1000);
  //translate(500, 200);
  //cone(80, 140);
  //pop();
  //}


  push();
  translate(300, -300)
  rotateX(millis()/1000);
  box(200);
  pop();
}

function createCone (radius, translateX, translateY, rotateDirection)
{
  push();
  //if rotate direction is x then rotate x
  if(rotateDirection == "xDirection")
  {
  rotateY(millis()/1000);
}
else if(rotateDirection == "yDirection") {
  {
    rotateY(millis()/1000);
  }
}
  translate(translateX, translateY);
  cone(radius, 140);
  pop();
}
