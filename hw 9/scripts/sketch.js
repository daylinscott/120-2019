var x= 200;
var y= 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(0);
  fill('magenta');
  if(keyIsPressed)
  {
    if(key == "a")
    {
      x-=10;
    }
    else if(key == "d")
    {
      x+=10;
    }
    else if(key == "w")
    {
      y+=-10;
    }
    else if(key == "s")
    {
      y+=10;
    }

  }

  rect(x, y, 200, 200);
}

function keyPressed() {
 if(key == "a")
{
x-=10;
}
else if(key == "d")
{
  x+=10;
}
else if(key == "w")
{
  y+=-10;
}
else if(key == "s")
{
  y+=10;
}
} 
