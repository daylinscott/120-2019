class myCube
{
constructor(h, w, rotateSpeed)
{
this.h = h;
this.w = w;
this.rotateSpeed = rotateSpeed;
}
magicallySetup()
{
  fill(random(255), random(255), random(255));
}
magicallyAppear()
{
  fill(random(255), random(255), random(255));
  rotateX(frameCount * this.rotateSpeed);
  rotateX(frameCount * this.rotateSpeed);
box(this.w, this.h);
}
}
