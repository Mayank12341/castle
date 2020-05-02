const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3
var ground;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(120,380,180,50);
    box2 = new Box(280,380,170,50);
    box3 = new Box(20,290,20,180);
    box4 = new Box(380,290,20,180);
    box5 = new Box(200,200,340,20);
    box6 = new Box(100,270,20,120);
    box7 = new Box(300,270,20,120);
    box8 = new Box(200,270,220,20);
    box9 = new Box(200,180,300,20);
    box10 = new Box(200,160,260,20);
    box11 = new Box(200,140,220,20);
    box12 = new Box(200,120,180,20);
    box13 = new Box(200,100,140,20);
    box14 = new Box(200,80,100,20);
    box15 = new Box(200,40,20,60);
    ground1= new Ground(200,390,380,20);
   
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   ground.display();
}