var path, pathImg;
var runner, runnerAnim;
var leftBoundary, rightBoundary;
var healthBar, healthImg_6remaining, healthImg_5remaining, healthImg_4remaining, healthImg_3remaining, healthImg_2remaining, healthImg_1remaining, healthImg_0remaining;
var bomb, bombImg, coin, coinScore/*this is used in score*/, coinImg, energyDrink, energyDrinkImg, blank, blank2;
var runScore, coinNum, health;

function preload(){
  //pre-load images
  runnerAnim = loadAnimation("Runner-1.png","Runner-2.png");

  pathImg = loadImage("path.png");

  healthImg_6remaining = loadImage("healthBar(0).png");
  healthImg_5remaining = loadImage("healthBar(-1).png");
  healthImg_4remaining = loadImage("healthBar(-2).png");
  healthImg_3remaining = loadImage("healthBar(-3).png");
  healthImg_2remaining = loadImage("healthBar(-4).png");
  healthImg_1remaining = loadImage("healthBar(-5).png");
  healthImg_0remaining = loadImage("healthBar(-6).png");

  coinImg = loadImage("coin.png");
  bombImg = loadImage("bomb.png");
  energyDrinkImg = loadImage("energyDrink.png");
}

function setup(){
  //creating canvas
  createCanvas(300,650);

  //create sprites here
  //runner
  runner=createSprite(150, 550);
  runner.addAnimation("runner_animation", runnerAnim);
  runner.scale=0.065;
  runner.depth=2;
  
  //path
  path=createSprite(150, 300);
  path.addImage(pathImg);
  path.depth=1;

  //boundary
  leftBoundary=createSprite(19, 300, 4, 600);
  //leftBoundary.visible=false;

  rightBoundary=createSprite(285, 300, 4, 600);
  //rightBoundary.visible=false;

  //cover the area where health bar is there
  blank=createSprite(150, 625, 300, 50);
  blank.shapeColor="white";

  /*
  //others
  bomb=createSprite();
  bomb.addImage(bombImg);

  coin=createSprite();
  coin.addImage(coinImg);

  energyDrink=createSprite();
  energyDrink.addImage(energyDrinkImg);
  */

}

function draw() {
  background(255, 255, 255);

  //bounce runner to boundaries
  runner.bounce(rightBoundary);
  runner.bounce(leftBoundary);

  //making health function
  healthBarFunc();

  //reseting the path at edge
  if (path.y>475) {
    path.y=path.y/2;
  }

  //
  if (keyDown("right")) {
    runner.x=runner.x+45;
  }
  if (keyDown("left")) {
    runner.x=runner.x-45;
  }

   //making score of running
   run_score();
   console.log(runScore);
  drawSprites();

}

function healthBarFunc() {
  health=6;
  healthBar=createSprite(blank.x, 615);

  //increasing and decreasing var health
  if (runner.collide(energyDrink)){
    health=health+1;
  }

  if (5 % 50==0) {
    health=health-1;
  }

  //making animations to health bar and velocity to path
  if (health==6) {
    healthBar.addImage(healthImg_6remaining);
    healthBar.scale=0.2;
    path.velocityY=25;
  } else if (health==5) {
    healthBar.addImage(healthImg_5remaining);
    healthBar.scale=0.2;
    path.velocityY=20;
  } else if(health==4){
    healthBar.addImage(healthImg_4remaining);
    healthBar.scale=0.2;
    path.velocityY=15;
  } else if (health==3) {
    healthBar.addImage(healthImg_3remaining);
    healthBar.scale=0.2;
    path.velocityY=10;
  } else if (health==2) {
    healthBar.addImage(healthImg_2remaining);
    healthBar.scale=0.2;
    path.velocityY=5;
  }  else if (health==1) {
    healthBar.addImage(healthImg_1remaining);
    healthBar.scale=0.2;
    path.velocityY=1;
  } else if (health==0) {
    healthBar.addImage(healthImg_0remaining);
    healthBar.scale=0.2;
    path.velocityY=0;
  }

}

function run_score() {
  runScore=World.frameCount;
  //textAlign();
  //fill(white);
  text(runScore, 290, 10);
}

function coin_score(){
  /*
  //making coin score (no of coins we have)
  coinNum=0;
  if (runner.collide(coin)) {
    coin.destroy();
    coinNum=coinNum+1;
  }
  */
}
