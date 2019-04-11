let img, enemy;
var x= 0;
var y=0;
var count= 0;
var enemyX= 400;
var enemyY= 500;
var enemy2X = 300;
var enemy2Y= 600;

function preload() {
  img = loadImage('assets/cat.png');
  enemy= loadImage('assets/dog.png');
  enemy2= loadImage ('assets/dog2.png')
}
function setup() {
  createCanvas(displayWidth, displayHeight);

}

function draw() {
  background('rgba(0,255,0, 0.25)');


enemyChase();
enemy2Chase();
playerController();
drawImage(enemy, enemyX, enemyY, 200, 200);
drawImage(img, x, y, 150, 100);
drawImage(enemy2, enemy2X, enemy2Y, 200, 200);
//image(img, x, y, 75, 50);
//image(enemy, enemyX, enemyY, 60, 90);


  //enemyX += 1;

  //enemyY += 1;



}

function drawImage (img, x, y, w, h)
{image(img, x, y, w, h);
}
function keyPressed() {

}

function enemyChase()
{
  if(enemyX > x)
  {
    enemyX -= 1;
  }
  if(enemyX < x)
  {
    enemyX += 1;
  }
  if(enemyY > y)
  {
    enemyY -= 1;
  }
  if(enemyY < y)
  {
    enemyY += 1;
  }
}

 function enemy2Chase()
  {
    if(enemy2X > x)
    {
      enemy2X -= 1;
    }
    if(enemy2X < x)
    {
      enemy2X += 1;
    }
    if(enemy2Y > y)
    {
      enemy2Y -= 1;
    }
    if(enemy2Y < y)
    {
      enemy2Y += 1;
    }
  }



function playerController()
{
if (keyIsDown) {
  if (key == "a") {
    if(x > 0)
    {
    x -= 5;
  }
}
}
//d key
if (keyIsDown(68)) {
  if(x < 925)
  {
    x += 5;
  }
  }

  if (keyIsDown(87)) {
    if(y > 0)
    {
      y -= 5;
    }
  }

    if (keyIsDown(83)) {
      if(y < 750)
      {
        y += 5;
      }
    }


}
