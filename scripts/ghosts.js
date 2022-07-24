 
function Ghost(x,y,img, dir){
    this.x = x;
    this.y = y;
    this.radius = 16;
    this.img = img;
    this.speed = - 32;
    this.moving = false;
    this.dir = dir;
    
  
    
    this.show = function(){
        image(img,0,0,scl,scl,this.x,this.y,scl,scl);
    
    }

  
  

    this.move = function(bricks){
        var newDir = floor(random(4));
        //newDir = shuffle(newDir);
         
        if(this.moving === true)
          newDir = this.dir
          var pX = this.x;
          var pY = this.y;
        
        // Target 1: improving the ai of the ghosts
        if(newDir === 0 && platform.Maze(this.y/ scl, this.x / scl) !== '*'){
          this.x += abs(this.speed);
        }else if(newDir === 1 && platform.Maze(this.y/ scl, this.x / scl) !== '*'){
          this.x -= abs(this.speed);
        }else if(newDir === 2 && platform.Maze(this.y/ scl, this.x / scl) !== '*' ){
          this.y -= abs(this.speed);
        }else if(newDir === 3 && platform.Maze(this.y/ scl, this.x / scl) !== '*')
          this.y += abs(this.speed);


        for(var i = 0; i < walls.length; i++){
          if(this.collision(walls[i])){
            this.x = pX;
            this.y = pY;
            this.moving = false;
            this.move(walls);
          }
        }

        this.moving = true;
        this.dir = newDir;
        if(this.x <= this.speed ){
           this.x = width + this.speed;
        }else if (this.x >= width)
            this.x = 0;

    }



    this.collision = function(obj){
      var distance = dist(this.x,this.y,obj.x,obj.y);
      if(distance < this.radius + obj.radius){
        return true;
      }else{
         return false;
      }
     
    }




 
 

}


