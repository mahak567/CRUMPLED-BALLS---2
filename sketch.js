
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  paper, ground;
var world;
var dustbin;
var bottomWall,leftWall,rightWall;
function preload(){
dustbin=loadImage("dustbingreen.png");

}
function setup() {
	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
	ground = new Ground(600,height,1200,20);
	paper = new Paper(300,330,40)
	
	bottomWall=new Dustbin(1200,390,100,200,{isStatic:true});
  leftWall=new Dustbin(450,450,10,100,{isStatic:true});
  rightWall=new Dustbin(550,450,10,100,{isStatic:true});
	console.log(bottomWall);
}


function draw() {
  imageMode(CENTER);
  background("lightblue");
  ground.display();
  paper.display(); 
  
  
image(dustbin,bottomWall.body.position.x,bottomWall.body.position.y,170,200);
//(leftWall.body.position.x,leftWall.body.position.y,10,100)
//rect(rightWall.body.position.x,rightWall.body.position.y,10,100)
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:330,y:-330});

  }
}


