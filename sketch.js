var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
  
  drawSprites();
}
function bounceOff(a1,a2){
  if (a1.x - a2.x < a2.width/2 + a1.width/2
    && a2.x -a1.x <a2.width/2 + a1.width/2) {
      a1.velocityX = a1.velocityX * (-1);
      a2.velocityX = a2.velocityX * (-1);
}
if (a1.y - a2.y < a2.height/2 + a1.height/2
  && a2.y - a1.y < a2.height/2 + a1.height/2){
    a1.velocityY = a1.velocityY * (-1);
    a2.velocityY = a2.velocityY * (-1);
}
}

