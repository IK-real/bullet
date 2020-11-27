var bullet,wall;
var speed,weight;
var destruction;

function setup() {
 createCanvas(800,400);

  speed = 80;
  weight = 32;

  bullet = createSprite(100, 200, 80, 30);
  bullet.shapeColor = 255;
  bullet.velocityX = speed;

  wall = createSprite(700, 200, random(40,100), 80);
  wall.shapeColor = 50;
  
}
function draw() {
  background(0);  
  
  if(isTouching(bullet,wall)){
     Collide(bullet,wall);
     text(destruction,400,100)
    destruction =  0.5 * weight * speed * speed/(wall.width*wall.width*wall.width/2)
    if(destruction < 0.7){
      wall.shapeColor = color(0,255,0);
    }

    else if(destruction > 0.7){
      wall.shapeColor = "red";
    }
  }
  drawSprites();

}
function Collide(object1,object2){
 if(object1.x - object2.x <= object2.width/2 + object1.width/2 &&
  object2.x - object1.x <= object2.width/2 + object1.width/2)
  object1.velocityX = 0;
  object1.velocityY = 0;

  object2.velocityX = 0;
  object2.velocityY = 0;
}
function isTouching(object1,object2){
 if(object1.x - object2.x <= object2.width/2 + object1.width/2 &&
  object2.x - object1.x <= object2.width/2 + object1.width/2){

  return true;
 }
 else{

  return false;
 }
}