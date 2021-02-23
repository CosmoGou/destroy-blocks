const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundIMG
function preload(){
backgroundIMG = loadImage("Wiki-background.png");
}
function setup(){
var canvas = createCanvas(700,400);

engine = Engine.create();
world = engine.world;
block1 = new block(200,200,40,40);
block2 = new block(240,200,40,40);
block3 = new block(280,200,40,40);
block4 = new block(220,160,40,40);
block5 = new block(260,160,40,40);
block6 = new block(240,120,40,40);
ground1 = new Ground(240,230,150,10);
ground2 = new Ground(350,390,700,10);
striker = new Striker(450,200,50,50);
sling = new Slingshot(striker.body,{x:550,y:160})
}
function draw(){
background("gray");
Engine.update(engine);
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
ground1.display();
ground2.display();
striker.display();
stroke("white");
fill("black");
textSize(21);
text("Drag and release the hexagonal stone towards the pyramid of blocks :-)",30,350);
}
function mouseDragged(){
 Matter.Body.setPosition(striker.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
 sling.fly();
}
