var thief
var thiefAnimation
var cityBG
var bg
var ground;
var diamond,diamondImg,diamondGroup;
var spikeImg,spikeGroup;
var police,policeAnimation

function preload(){
  thiefAnimation=loadAnimation("assets/theif1.png","assets/theif2.png")
  cityBG=loadImage("assets/citybg.jpg")
  diamondImg=loadImage("assets/diamond.png")
  spikeImg=loadImage("assets/spike.png")
  policeAnimation=loadAnimation("assets/policeman1.png","assets/policeman2.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 
 bg=createSprite(windowWidth/2,windowHeight/7,windowWidth,windowHeight)
 bg.addImage(cityBG)
 bg.velocityX=-3
bg.scale=1.6

thief=createSprite(380,600,50,30)
 thief.addAnimation("running",thiefAnimation)
 thief.scale=0.6
 
 police=createSprite(thief.x-300,600,50,30)
 police.addAnimation("policerunning",policeAnimation)
 police.visible=false;

 ground=createSprite(0,windowHeight-10,windowWidth*2,5);
 ground.visible=false;

 diamondGroup=createGroup()
 spikeGroup=createGroup()
}

function draw() {
  background(0);
  if(bg.x<0){
    bg.x=bg.width/4
  }

  if(keyDown("space")){
    thief.velocityY=-15;
  }

  thief.velocityY=thief.velocityY+0.8

  thief.collide(ground)
  spawnSpike()
  drawSprites()
  if(spikeGroup.isTouching(thief)){
    police.visible=true
  }

}

function spawnSpike(){
  if(frameCount %150 ===0){
    var spike=createSprite(600,windowHeight-150,20,20)
    spike.addImage(spikeImg)
    spike.velocityX=-3
    spike.scale=0.20
    spikeGroup.add(spike)
  }
}
