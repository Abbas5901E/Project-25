
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
var dustbin1, dustbinImg;
var dustbin2;
var dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new paper(80, 560);
	ground1 = new Ground(400, height, 800, 20);
	dustbin1 = new dustbin(600, 673, 250, 30);
	dustbin2 = new dustbin(460, 638, 30, 100);
	dustbin3 = new dustbin(741, 638, 30, 100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:44, y:-44});
	}
}



