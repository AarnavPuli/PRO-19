var moving;
var fixed;

function setup() {
  createCanvas(800,400);
  moving=createSprite(200,200,70,50);
  fixed=createSprite(200,200,70,50);
  fixed.shapeColor="black";
  moving.shapeColor="black";
  moving.debug=true;
  fixed.debug=true;
}

function draw() {
  background("orange");  
  moving.x=mouseX;
  moving.y=mouseY;
  //distance bettween the centers of 2 rectangles is less than sum of half their widths for all their  sides
  if(moving.x-fixed.x<moving.width/2+fixed.width/2 &&fixed.x-moving.x<moving.width/2+fixed.width/2 &&
    moving.y-fixed.y<moving.height/2+fixed.height/2 && fixed.y-moving.y<moving.height/2+fixed.height/2){
    moving.shapeColor="red";
    fixed.shapeColor="red";
  }
  else{
    moving.shapeColor="black";
    fixed.shapeColor="black";
  }



  drawSprites();
}