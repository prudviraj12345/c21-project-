
var car , wall;
var speed,weight ,thickness;


function setup() {
  createCanvas(1600,400);
 car =  createSprite(100, 200, 50, 50);
 wall =  createSprite(1200, 200, thickness, height/2);
 
 speed = random(223,321);
 weight = random(30,52);

 thickness = random(22,83)
 
car.velocityX = speed;


}

function draw() {
  background(255,255,255);  

if(collided(car,wall))
{

car.velocityX = 0;
var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);


if(damage>10)
{

  wall.shapeColor = color(255,0,0);
}
  

if(damage<10)
{

wall.shapeColor = color(0,255,0);



}



}

collided();




  drawSprites();

}


function collided(Lwall,Lcar)
{
carRightEdge = car.x = car.width;
wallLeftEdge = wall.x;
if(carRightEdge>=wallLeftEdge)
{

return true;
}

return false;


}




