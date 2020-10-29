
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var treeImage,groundImage,boyImage,stoneImage,mango1,mango2,mango3,mango4,mango5;
var slingShot;

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundImage=new ground(50,635,1300,20);
	treeImage = new tree(600,400);
	boyImage = new boy(200,550);
	stoneImage = new stone(170,475,50,50);
	
	
	mango1 = new mango(600,400);
	mango2 = new mango(530,290);
	mango3 = new mango(630,250);
	mango4 = new mango(600,200);
	mango5 = new mango(680,400);

	slingShot = new Slingshot(stoneImage.body,{x:170,y:475});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  groundImage.display();
  treeImage.display();
  boyImage.display();
  stoneImage.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  slingShot.display();

  

  detectCollision(stoneImage,mango1);
  detectCollision(stoneImage,mango2);
  detectCollision(stoneImage,mango3);
  detectCollision(stoneImage,mango4);
  detectCollision(stoneImage,mango5);


  drawSprites();
}

function detectCollision(lstone,lmango)
{
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance <=lmango.width+lstone.width)
	{
//		Matter.Body.setStatic(lmango.Body,false);
		lmango.setStatic = false;
	}
}

function mouseDragged()
{
    Matter.Body.setPosition(stoneImage.body, {x: mouseX , y: mouseY});
}
function mouseReleased()
{
    slingShot.fly();
}
function keyPressed()
{
	if( keyCode === 32)
	{
		Matter.Body.setPosition(stoneImage.body, {x: 170 , y: 475});
        slingShot.attach(stoneImage.body);
	}
}



