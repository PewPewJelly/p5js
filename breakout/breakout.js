let xPos = 100;
let yPos = 100;
let diam = 50;
let speed = 3;
let xDir,yDir;

let bricks = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

let padX;
let padWidth = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  
  createPad();
  //공 생성
  createBall();

  bounce();

  //공 이동
  ballMove();

  bricksDrawing();

  bricksBallCollision();
}

function bricksDrawing(){
  fill(0, 255, 0);
  stroke(0);

  let i = 0;
  while(i < bricks.length){
    if ( bricks[i] === 1) {
      rect(i*50, 0, 50, 50); 
    }
    i++;
  }
}

function bricksBallCollision(){
  // when the ball hits the bricks
  if ( yPos < 50 && bricks[int(xPos/50)] === 1) {
    yDir *= -1;
    bricks[int(xPos/50)] = 0;
  }
}

function ballMove()
{
  xPos += xDir;
  yPos += yDir;
}

function createBall()
{
  strokeWeight(7);
  stroke(0);
  ellipse(xPos,yPos,50,50);
  ellipse(xPos,yPos,25,25);

  if (keyIsPressed)
    {
      if (keyCode == ENTER) fill('#ffffff');
      else if (key == 'R') fill('#ff0000');
      else if (key == 'G') fill('#00ff00');
      else if (key == 'B') fill('#0000ff');
      
      
    }
}

function createPad()
{
  padX = mouseX - padWidth/2;
  rect(padX, windowHeight-30, padWidth, 30, 5);
}

function bounce()
{
  if (xDir < 0)
  {
      xDir = -speed;
  }
  else xDir = speed;
  if (yDir < 0)
  {
      yDir = -speed;
  }
  else yDir = speed;


  if (xPos - diam/2< 0) xDir *= -1;
  if (xPos + diam/2 > windowWidth) xDir *= -1;
  
  if (yPos - diam/2 < 0) yDir *= -1;
  if (yPos + diam/2 > windowHeight) yDir *= -1;


  if ( xPos > padX && xPos < padX + padWidth && yPos > height -30 - diam/2)
    {
      yDir *= -1;
      speed += 0.1;
    }
}
