var player,playerIMG;

var playerSwordHB;
var swordAnimation;

var backgroundIMG,bg

var enemy,enemyIMG,enemyGRP;

var combat=1;
var rest=0;

let timer=30;

var score=0;

function preload(){
  backgroundIMG=loadImage("background.png")
}

function setup() {
  createCanvas(800,400);

  player=createSprite(400,200,20,20);

  playerSwordHB=createSprite(10000,10000,20,20);
  playerSwordHB.visible=false;

  enemyGRP=createGroup();

  if (i=1){
    Enemy=createSprite(400,0,20,20);
    enemyGRP.add(Enemy);
  }
  if (i=2){
    Enemy=createSprite(800,200,20,20);
    enemyGRP.add(Enemy);
  }
  if (i=3){
    Enemy=createSprite(400,400,20,20);
    enemyGRP.add(Enemy);
  }
  if (i=4){
    Enemy=createSprite(0,200,20,20);
    enemyGRP.add(Enemy);
  }
}

function draw() {
  background(backgroundIMG); 

  text("Score:"+score, 10,10)
  
  Enemy.rotation = atan2(player.y - Enemy.y, player.x - Enemy.y);
  Enemy.speed = 2.5;

  Enemy.x += cos(Enemy.rotation) * Enemy.speed;
  Enemy.y += sin(Enemy.rotation) * Enemy.speed;
  
  if(keyDown("w")){
    player.y=player.y-10;
    playerSwordHB.y=player.y-10; 
    playerSwordHB.x=player.x;
  }
  if(keyDown("s")){
    player.y=player.y+10;
    playerSwordHB.y=player.y+10;
    playerSwordHB.x=player.x; 
  }
  if(keyDown("a")){
    player.x=player.x-10;
    playerSwordHB.y=player.y;
    playerSwordHB.x=player.x-10;
  }
  if(keyDown("d")){
    player.x=player.x+10;
    playerSwordHB.y=player.y;
    playerSwordHB.x=player.x+10;
  }

  if(keyDown (LEFT_ARROW)&& playerSwordHB.isTouching(enemyGRP)){
    Enemy.destroy();
    score=score+1;
  }
  drawSprites();
  
  
  if (frameCount % 300 == 0 && timer > 0) { 
    timer --;
    spawnEnemy();
  }
}

function spawnEnemy(){

  var i=random(1,4);

  if (i=1){
    Enemy=createSprite(400,0,20,20);
  }
  if (i=2){
    Enemy=createSprite(800,200,20,20);
  }
  if (i=3){
    Enemy=createSprite(400,400,20,20);
  }
  if (i=4){
    Enemy=createSprite(0,200,20,20);
  }
}

