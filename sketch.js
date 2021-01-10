var parameter1, parameter2;
var trex,obstacle;

function setup() {
  createCanvas(800,400);
  trex = createSprite(400, 200, 50, 50);
  obstacle = createSprite(600,200,50,50);

}

function draw() {
  background(255,255,255); 
  
  //to move the box with mouse pointers left and right movement
  obstacle.x = mouseX;
  //to move up and down with mouse y
  obstacle.y = mouseY;
if(isTouching(trex,obstacle)) {
  trex.shapeColor = "red";
  obstacle.shapeColor = "red";
} 
else{
  trex.shapeColor = "black";
  obstacle.shapeColor = "black";
}
  drawSprites();
}
function isTouching(parameter1,parameter2){
  if(parameter1.x - parameter2.x === parameter1.width/2 + parameter2.width/2 || 
    parameter2.x - parameter1.x === parameter1.width/2 + parameter2.width/2 ||
    parameter1.y - parameter2.y === parameter1.height/2 + parameter2.height/2 ||
     parameter2.y - parameter1.y === parameter1.height/2 + parameter2.height/2 ){
  return true;
 }else{
  return false;
 }
}