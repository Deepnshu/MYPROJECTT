var boy,boyImg
var stillboy, stillboyImg
var backg, backgImg
var covid,covidImg
var gameState="PLAY"
var VirusGroup
var ground

function preload(){
boyImg=loadImage("boy.png")
stillboy=loadImage("boystill.png")
backgImg=loadImage("backg.png")
covidImg=loadImage("covid.png")

}

function setup(){
createCanvas(500,500)
backg=createSprite(250,250,2000,2000)
backg.addImage("back",backgImg)
backg.velocityX=-2
boy=createSprite(20,400,50,50)
boy.addImage("boy",boyImg)
boy.scale=0.2
VirusGroup=new Group()
ground=createSprite(10,400,500,20)
ground.visible=false

}

function draw(){
background("black")
if(gameState==="PLAY"){
	if(backg.x<200){
		backg.x=250
	}
	if(keyDown("UP_ARROW")){
		boy.velocityY=-8
	}
	boy.velocityY=boy.velocityY+0.2
	spawnVirus()
	if(VirusGroup.isTouching(boy)){
		gameState="END"
	}
}
else if(gameState==="END"){
backg.velocityX=0;
VirusGroup.setVelocityEach(0)
VirusGroup.destroyEach()
}
boy.collide(ground)

drawSprites()
}

function spawnVirus(){
	if(frameCount%100===0){
		covid=createSprite(500,200,50,50)
		covid.addImage("virus",covidImg)
		covid.scale=0.2;
		covid.velocityX=-4

		covid.y=Math.round(random(500,100))
		VirusGroup.add(covid)
	}
}