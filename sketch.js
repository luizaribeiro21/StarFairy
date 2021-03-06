var fada, imgFada; 
var bgImg; 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball, imgBall; 

function preload(){
    imgFada = loadImage("fairyImage1.png"); 
    bgImg = loadImage ("starNight.png"); 
    //imgBall = loadImage ("./images/star.png"); 
    ball = loadImage ("starImage.png"); 
}

function setup() {
  var canvas = createCanvas(1000,1000);
  engine = Engine.create() ;
  world = engine.world;

  fada = createSprite (200,400); 
  fada.addImage ("fada", imgFada);
  fada.scale = 0.2;  

  star = new Star (500,100,20,20); 

  //ball.addImage ("star", imgBall); 

  //var ball_options ={ restitution: 0.5 }

  //ball = Bodies.circle (560,80,20,ball_options);
   
  //World.add (world,ball); 

  
}

function draw() {
  background(bgImg);  

  Engine.update(engine)

  if (keyDown (RIGHT_ARROW)){
    fada.x = fada.x + 6; 
} 

if (keyDown (LEFT_ARROW)){
    fada.x =  fada.x -6; 
}

  //ellipseMode(RADIUS); 
  //ellipse(ball.position.x, ball.position.y,20,20); 

  star.display(); 

  if (star.y >170 && starBody.position.y >170){
    Matter.Body.setStatic(starBody, true); 
  }

  drawSprites();
}
