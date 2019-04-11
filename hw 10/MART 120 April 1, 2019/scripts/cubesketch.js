var cube1;
var cube2;
var cubes = new Array();

function setup()
{
    createCanvas(800,600, WEBGL);
    background(0);
    cube1 = new myCube(20,40, .02);  
    cube2 = new myCube(50, 40, .04);

    cubes.push(cube1);
    cubes.push(cube2);
    cubes.push(new myCube(100,50,.06));
    cubes.push(new myCube(200,150,.07));
    
    for(var i = 0; i < cubes.length; i++)
    {
        cubes[i].magicallySetup();
    }

   // fill(123,23,45);

}

function draw()
{
    background(0);
    console.log("Width: " + cubes[3].w);
    for(var i = 0; i < cubes.length; i++)
    {
        
        cubes[i].magicallyAppear();
        translate(50,50);
    }
    //cube1.magicallyAppear();
    //translate(50,50);
    //cube2.magicallyAppear();
}
