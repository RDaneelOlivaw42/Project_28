
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground, boy, tree;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;
var stone;
var slingshot;

function setup() {
	createCanvas(1280, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(640, 690, 1280, 20);
	boy = new Boy(300, 600);
	tree = new Tree(950, 380);
	mango1 = new Mango(900, 300, 70);
	mango2 = new Mango(1165, 320, 70);
	mango3 = new Mango(1000, 200, 70);
	mango4 = new Mango(1010, 300, 70);
	mango5 = new Mango(1100, 220, 70);
	mango6 = new Mango(1090, 300, 70);
	mango7 = new Mango(800, 320, 70);
	mango8 = new Mango(830, 230, 70);
	mango9 = new Mango(870, 150, 70);
	mango10 = new Mango(920, 210, 70);
	mango11 = new Mango(1000, 120, 70);
	stone = new Stone(100, 100, 80);
	slingshot = new Slingshot(stone.body,{x:200, y:542});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230, 230, 230);

  ground.display();
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  stone.display();
  slingshot.display();
  
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);
  detectCollision(stone, mango11);
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:100, y:100})
    //slingshot.attach(stone.body)	
    slingshot = new Slingshot(stone.body,{x:200, y:542});
	}
}

function detectCollision(stone, lmango){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = stone.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
if(distance <= lmango.r + stone.r){
  Matter.Body.setStatic(lmango.body, false);
}
}