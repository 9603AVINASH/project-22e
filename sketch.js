const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

engine = Engine.create();
world = engine.world;
ball = Bodies.circle(200,50,10,ball_options);
World.add(world,ball);
ball2 = Bodies.circle(300,10,10,ball_options);
World.add(world,ball2);
ball3 = Bodies.circle(400,50,10,ball_options);
World.add(world,ball3);
ball4 = Bodies.circle(500,10,10,ball_options);
World.add(world,ball4);
ball5 = Bodies.circle(600,50,10,ball_options);
World.add(world,ball5);


	var roof_options={
		isStatic:true			
	}

}	

function draw() {
  rectMode(CENTER);
  background(0);

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here


  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);
  ellipse(ball3.position.x,ball.position.y,10);
  ellipse(ball4.position.x,ball2.position.y,10);
  ellipse(ball5.position.x,ball.position.y,10);

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}
