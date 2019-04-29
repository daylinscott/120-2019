var pug = new Character("assets/pug.jpg", 0,0,50,75); // created new object from the Character class
var cat = new Character("assets/cat.jpg", 600,600,60,100);
var tree = new Character("assets/tree1.jpg", 500, 200, 100, 150);
var tree2 = new Character("assets/tree2.jpg", 500, 500, 100, 150);
var tree3 = new Character("assets/tree3.jpg", 900, 400, 100, 150);
var direction = "";
var lives = 3;
var y
var x
// preload our images
function preload() {
    pug.load();
    cat.load();
    tree.load();
    tree2.load();
    tree3.load();

}

// set up the canvas for display
function setup() {
    createCanvas(displayWidth, displayHeight);
    background(152,251,152);
}

// draw everything to the canvas
function draw() {

    background(152,251,152);
    playerController();
    enemyChase(1);
    pug.display();
    cat.display();
    tree.display();
    tree2.display();
    tree3.display();
    fill("pink");
    textSize(50);
    text("lives:", 1200, 500);
    text(lives, 1325, 500);

}

// this allows us to move with the keyboard
function playerController()
{
   // prevent them from going out of bounds...
    if(keyIsPressed)
    {
        if (key == "a")
        //if (x > 0)
        {
            pug.addX = -5;
            direction = "left";
        }
        if (key == "w")
        //if (x < 925)
         {
            pug.addY = -5;
            direction = "up";
        }
        if (key == "s")
        //if (y > 0)
        {
            pug.addY = 5;
            direction = "down";
        }
        if (key == "d")
        //if (y < 750)
        {
            pug.addX = 5;
            direction = "right";
            print(pug.x)
        }

        if(hasCollided(pug, cat) || hasCollided(pug, tree) || hasCollided(pug, tree2) || hasCollided(pug, tree3))
        { console.log("test2")
          if (lives > 0)
          {
            lives = lives -1;
          }
          if(direction == "up")
          { print("moving up")
            moveDown();
          }
          else if(direction == "down")
            {
            moveUp();
            }
            else if(direction == "right")
            {
              moveLeft();
            }
            else if(direction == "left")
            {
              moveRight();
            }
        }

           // make sure they don't over run each other
        }



}
function moveUp(){
  pug.y-=5;

}
function moveDown(){
pug.y+=5;
}
function moveLeft(){
pug.x-=5;
}
function moveRight(){
  pug.x+=5;

}
// this functions allows the enemy to chase the player
function enemyChase(speed)
{
    if(cat.x > pug.x)
    {
        cat.addX = -speed;
    }
    if(cat.x < pug.x)
    {
        cat.addX = speed;
    }
    if(cat.y > pug.y)
    {
        cat.addY = -speed;
    }
    if(cat.y < pug.y)
    {
        cat.addY = speed;
    }
}

// this just checks collision
function hasCollided(cat, pug) {
    return !(
        ((cat.y + cat.H) < (pug.y)) ||
        (cat.y > (pug.y + pug.H)) ||
        ((cat.x + cat.W) < pug.x) ||
        (cat.x > (pug.x + pug.W))
    );
}
