function Brick(x,y){
  this.x = x;
  this.y = y;
  this.radius = 16;


  this.show = function(){
    image(brickImg, this.x, this.y);
  }



}
