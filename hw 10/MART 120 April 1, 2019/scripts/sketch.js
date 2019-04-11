var numbers = [];
var numbers2 = new Array();
var circles = [];

function setup()
{
    createCanvas(800,600);
    background(0);
    /*numbers.push(1);
    numbers.push(3);
    numbers.push(4);
    numbers.push(5);
    numbers.push(7);
    numbers.push(100000);
    */
    var myCircle = new Circle(100,100,50,1);
    var myCircle2 = new Circle(400,200,100,2);
    var myCircle3 = new Circle(300,300,25,7);
    circles.push(myCircle);
    circles.push(myCircle2);
    circles.push(myCircle3);
    circles.push(new Circle(250,250,15,5));
    circles.push(new Circle(150,150,75,12));
}

function draw()
{
    background(0);
    textSize(24);
    fill(255);
    for(var i = 0; i < circles.length; i++)
    {
        //print(numbers[i]);
        circles[i].display();
        circles[i].move();
    }
}
