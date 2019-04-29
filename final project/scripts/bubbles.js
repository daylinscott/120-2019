var count = 0;
var sphereArray = new Array();

function setup() {
  createCanvas (displayWidth, displayHeight, WEBGL);
  // WEBGL, constant, allows to create 3D objects
  background(255, 204, 100);
}
function mousePressed(){
  
}

function draw() {
  background(135,206,250);

  count += 1;
  if (count > 180){
  //createSphere(200,-500,40,"xDirection")
  sphereArray.push(sphere(200))
  count = 0;
  print("hi");
  }

for(var i = 0 ; i < sphereArray.length; i++){
  push();
  rotateY(millis()/1000)
  translate(50,75)
  //print(i);
  sphereArray[i];
  pop();
}
  fill("pink")
  createSphere(100,-500,40,"xDirection")
  createSphere(50,200,40, "yDirection")
  createSphere(75, 350,70, "xDirection")


function createSphere (radius, translateX, translateY, rotateDirection)
{
  push();
  //if rotate direction is x then rotate x
  if(rotateDirection == "xDirection")
  {
  rotateX(millis()/1000);
}
else if(rotateDirection == "yDirection") {
  {
    rotateY(millis()/1000);
  }
}
  translate(translateX, translateY);
  sphere(radius, 14);
  pop();
}
}
