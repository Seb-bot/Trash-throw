
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    ground = new Ground(400,690,800,20)
	PaperBall = new Paper(10,680,10)
	bottom = new Sides(680,670,150,20)
    left = new Sides(600,600,20,150)
	right = new Sides(760,600,20,150)

	
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display()
PaperBall.display()
bottom.display()
left.display()
right.display()

}

function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(PaperBall.body,PaperBall.body.position,{x:13,y:-25})

}
}

