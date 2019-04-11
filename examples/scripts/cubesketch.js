var cube1;
var cube2;
var cubes = new Array();

function setup()
{
  createCanvas(800, 600, WEBGL);
  background(0);
  cube1 = new myCube(50, 50, .02);
  cube2 = new myCube(40, 20, .04);

  cubes.push(cube1);
  cubes.push(cube2);

  for(var i = 0; i < cubes.length; i++)
  {
    cubes[i].magicallySetup();
  }

}

function draw()
  {
    background(0);
    for(var i = 0; i < cubes.length; i++)
    {
      cubes[i].magicallyAppear();
      translate(50, 50);
    }
    //rotateX(frameCount * 0.01);
    //rotateY(frameCount * 0.01);
    //cube1.magicallyAppear();
    //translate(50, 50);
    //cube2.magicallyAppear()
  }
