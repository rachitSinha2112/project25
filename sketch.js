var groundSprite,dustbin;   
const Engine = Matter.Engine;
   const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
dustbin=loadImage("dustbingreen.png");	
}

function setup() {
	createCanvas(1000,500);


	engine = Engine.create();
  world = engine.world;
  
  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)  

 holder1=new Holder(860,450,80,5);
 
 
 holder2=new Holder(820,410,5,100);
 holder3=new Holder(900,410,5,100);

 paperBall=new Paper(100,450)

 //ground = Bodies.rectangle(900, 400, width, 10 , {isStatic:false} );
 //World.add(world, ground);

 Engine.run(engine);
  
}

function draw() {
  Engine.update(engine);

  background(230,230,230);

   
  holder1.display();
  holder2.display();
  holder3.display();
  paperBall.display();
imageMode(CENTER);     
image(dustbin,860,410,100,100);


  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:75,y:-75})
Matter.Body.setStatic(paperBall.body,false)  
  }
}
