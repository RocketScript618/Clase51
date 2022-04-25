var bg, bgImg
var bottomGround,topGround;
var topObs, topObs1, topObs2;
var bottomObs, botObs1, botObs2, botObs3;
var balloon, balloonImg;
var jump;

function preload(){
bgImg = loadImage("assets/bg.png")

jump = loadSound("assets/jump.mp3")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

topObs1 = loadImage("assets/obsTop1.png")
topObs2 = loadImage("assets/obsTop2.png")

botObs1 = loadImage("assets/obsBottom1.png")
botObs2 = loadImage("assets/obsBottom2.png")
botObs3 = loadImage("assets/obsBottom3.png")
}

function setup(){

createCanvas(windowWidth,windowHeight)

topObs = createGroup();
bottomObs = createGroup();

//Crear bases superiores e inferiores
bottomGround = createSprite(width/2,height,width,20);
bottomGround.visible = false;

topGround = createSprite(width/2,0,width,20);
topGround.visible = false;
      
//Crear globo      
balloon = createSprite(100,height-100,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.5;

}

function draw() {

  background(bgImg);

  if(frameCount % 100 == 0){
    var option = Math.round(random(1,2));
    if(option == 1){
      bottomSpawn()
    }else{
      bottomSpawn();
    }
  }
        

  if(keyDown("space")) {
  balloon.velocityY= -2;     
  }else{
    balloon.velocityY = 2;
  }

  balloon.velocityX = 4;

  balloon.collide(bottomGround);
  balloon.collide(topGround);
   
  drawSprites();
  
}

function topSpawn(){
  var y = random(130,height/2-75)
  var img = Math.round(random(1,2))
  var obs = createSprite(width+60,y)

  obs.setCollider("rectangle");
  obs.depth = balloon.depth-1;

  if(img == 1){
    obs.addImage(topObs1)
    obs.scale = .3;
    obs.velocityX = -4
    
  }else{
    obs.addImage(topObs2)
    obs.scale = .2
    obs.velocityX = -6
  }

  topObs.add(obs);
}

function bottomSpawn(){
  var y = 0
  var img = Math.round(random(1,3))
  var obs = createSprite(width+60,y)

  obs.setCollider("rectangle")
  obs.depth = balloon.depth-1;

  if(img == 1){
    obs.addImage(botObs1)
    obs.scale = .2;
    obs.velocityX = -4
    obs.y = height-170;
    
  }else if(img == 2){
    obs.addImage(botObs2)
    obs.scale = .1;
    obs.velocityX = -4
    obs.y = height-75;
  }else{
    obs.addImage(botObs3)
    obs.scale = .2
    obs.velocityX = -6
    obs.y = height-180;
  }

  bottomObs.add(obs);
}