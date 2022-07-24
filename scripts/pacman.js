function Pacman(x,y){
    this.x = x;
    this.y = y;
    this.speed = 32;
    this.pos = - 32
    this.mouthSide = 0;
    this.frame = 0;
    this.radius = 16;
    
    console.log("x coordinates: " + this.x)
    console.log("y coordinates: " + this.y)
    

  
        
    this.show = function(){
        //this.frame ++ used to open and close the mouth of the pacman, it would be static without
          image(pacmanImg, abs(this.pos)*this.frame++, abs(this.pos)*this.mouthSide,abs(this.pos),abs(this.pos),this.x,this.y,abs(this.pos),abs(this.pos));
        //needed otherwise pacman will disappear within seconds
        if(this.frame === 6){
          this.frame = 0;
        }else{
          this.frame = this.frame;
        }

    }

  

    this.move = function(d){

        if(d === 0){
          this.x += this.speed;
          this.mouthSide = d;
          console.log(this.x)
        }else if(d === 1){
          this.y += this.speed;
          this.mouthSide = d;
          console.log(this.y)
        }else if(d === 2){
            this.x -= this.speed;
            this.mouthSide= d;
            console.log(this.x)
        }else if(d === 3){
          this.y -= this.speed;
          this.mouthSide = d;
          console.log(this.y)
        }

    }
   
  

    this.eats_normal_food = function(food){
      var distance = dist(this.x,this.y,food.x,food.y);
      if(distance < this.radius + food.radius){
        return true;
      }else{
        return false;
      }
  
    }

       // eating power ups
      this.eats_power_ups = function(p){
      var distance = dist(this.x,this.y,p.x,p.y);
      if(distance < this.radius + p.radius){
        return true;
      }else{
        return false;
      }
      
    }


    //collision detection for the ghosts
    this.collision = function(ghosts){
      var distance = dist(this.x,this.y,ghosts.x,ghosts.y);
      if(distance < this.radius + ghosts.radius){
        return true;
      }else{
        return false;
      }
      
    }



    
   


}
