var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  appleImg = loadImage("apple.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function spawnCarrots() {
  apple = createSprite(random (50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.09;
  apple.velocityY = 3;
  rabbit.depth = apple.depth;
  rabbit.depth = apple.depth + 4;
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

rabbit.x=World.mouseX;

  drawSprites();
}