var astronaut;
var bg;
var sleep, brush, drink, gym, eat, move, bath;
var edges;

function preload(){
  bg = loadImage("iss.png")
  sleep = loadAnimation("sleep.png")
  brush = loadAnimation("brush.png")
  gym = loadAnimation("gym1.png", "gym2.png")
  eat = loadAnimation("eat1.png", "eat2.png")
  drink = loadAnimation("drink1.png","drink2.png")
  move = loadAnimation("move.png", "move.png", "move1.png", "move1.png")
  bath = loadAnimation("bath1.png", "bath2.png")
}

function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300,230)
  astronaut.addAnimation("sleeping",  sleep)
  astronaut.scale = 0.1  
  edges = createEdgeSprites()

}

function draw() {
  background(bg);  

  astronaut.bounceOff(edges)
  fill("white")
  textSize(20)
  text("Use Arrow Keys and M key to see the daily routine of an Astronaut", 120, 75)

  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush)
    astronaut.changeAnimation("brushing")
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym)
    astronaut.changeAnimation("gymming")
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat)
    astronaut.changeAnimation("eating")
    astronaut.x=220
    astronaut.y=230
    astronaut.velocityX = 1
    astronaut.velocityY = -1
  }

  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath)
    astronaut.changeAnimation("bathing")
    astronaut.x=300
    astronaut.y=230
  }

  if (keyDown("M")){
    astronaut.addAnimation("moving", move)
    astronaut.changeAnimation("moving")
    astronaut.x=300
    astronaut.y=230
    astronaut.velocityX=1
    astronaut.velocityY=-1
  }

  drawSprites();

}