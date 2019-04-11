var pug = new Character("assets/pug.jpg", 0,0,50,75); // created new object from the Character class
var cat = new Character("assets/cat.jpg", 100,100,60,100);

// preload our images
function preload() {
    pug.load();
    cat.load();
    
}

// set up the canvas for display
function setup() {
    createCanvas(800, 600);
    background(0);
}

// draw everything to the canvas
function draw() {
    
    background(0);
    playerController();
    enemyChase(1);
    pug.display();
    cat.display();
    
}

// this allows us to move with the keyboard
function playerController()
{
   // prevent them from going out of bounds...
    if(keyIsPressed)
    {
        if (key == "a") {
            pug.addX = -5;
        } 
        if (key == "w") {
            pug.addY = -5;
        }
        if (key == "s") {
            pug.addY = 5;
        }
        if (key == "d") {
            pug.addX = 5;
        }
    
        if(hasCollided(pug, cat))
        {
           // make sure they don't over run each other
        }
    }
    
    
}

// this functions allows the enemy to chase the player
function enemyChase(speed)
{
    if(cat.X > pug.X)
    {
        cat.addX = -speed;
    }
    if(cat.X < pug.x)
    {
        cat.addX = speed;
    }
    if(cat.Y > pug.y)
    {
        cat.addY = -speed;
    }
    if(cat.Y < pug.y)
    {
        cat.addY = speed;
    }
}

// this just checks collision
function hasCollided(object1, object2) {
    return !(
        ((object1.Y + object1.H) < (object2.Y)) ||
        (object1.Y > (object2.Y + object2.H)) ||
        ((object1.X + object1.W) < object2.X) ||
        (object1.X > (object2.X + object2.W))
    );
}
