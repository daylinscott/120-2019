
function preload() {
  img = loadImage('assets/flower.png');

}
// I am declaring the function setup
function setup() {

  //set frame rate
  frameRate( 4 );

  // Creating canvas the size of browser
  createCanvas( displayWidth, displayHeight);

  //Color background PINK
  background(100,149,237);

  //image(img, 0, 0, 100, 100);
}


// I am declaring my first variable
let angle = 0;

// Declare draw function
function draw() {


  //Sandbox
  push();

  // No cursor
  noCursor()

  //Create element controlled by mouse
  translate( mouseX, mouseY )

  //Create no stroke
  stroke(0);

  //Make the cirlce yellow
  fill(135,206,250)

  //Create Circle
  //var s = sphere(40);
  //s.position(mouseX, mouseY);
  ellipse(0, 0, 50, 50);

  //Sandbox
  pop();

  //Sandbox
  push();

  // Element in relation to canvas
  translate( width*0.5, height*0.5 );

  //Angle of rotation
      rotate( radians(angle) );

      //Fill in rectangle as white
      //fill('white');

      //Create rectangle
      image(img, 0, 0, 200, 200);




      //Execute variable
       angle = angle + 45;

       //Sandbox
       pop();
}
