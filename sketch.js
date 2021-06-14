var sea,seaImg,shipImg,ship
function preload(){
seaImg=loadImage("sea.png");
shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200);
  sea.velocityX=-3
  ship=createSprite(130,200,30,30);
  sea.addImage(seaImg);
ship.addAnimation("shipMoving",shipImg);
seaImg.scale=0.25;
sea.scale=0.25;
ship.scale=0.25;
}

function draw() {
  background("blue");
 if (sea.x<0){
sea.x=sea.width/7.98;

 }
 drawSprites()
}