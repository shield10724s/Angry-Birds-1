const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground;
var pig,log1,log2,log3,log4;

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,750,40,40);
  box2 = new Box(300,750,40,40);
  box3 = new Box(200,700,40,40);
  box4 = new Box(300,700,40,40);
  ground = new Ground(600,790,1200,20);
  pig = new Pig(250,100);
  log1 = new Log(200,110,10,PI);
  log2 = new Log(120,100,10,PI);
  log3 = new Log(240,100,10,PI);
  log4 = new Log(360,100,10,PI);
  log5 = new Log(480,100,10,PI);
}

function draw() {
  background('lightblue');
  Engine.update(engine);
  
  box1.display();
  box2.display();
  ground.display();
  pig.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  log5.display();
  
  drawSprites();
}