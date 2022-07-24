var brickImg;
var walls = [];
var platform;
var foods = [];
var pacman;
var ghostImg;
var ghosts = [];
var ghostsAlive = [];
var scl = 32
var powerUps = []
var powerUpImg;
var game;


function Game(){

	this.points = 0
	this.lives = 2;
  


  this.Maze = function(){
      for (var i = 0; i < platform.Rows(); i++)
      for (var j = 0; j < platform.Columns(); j++) {
      if (platform.Maze(i, j) === '*')
        walls.push(new Brick(j * scl , i * scl));
      else if (platform.Maze(i, j) === '+')
        foods.push(new Food(j * scl, i * scl));
      else if (platform.Maze(i, j) === 'p')
        pacman = new Pacman(j * scl , i * scl );
      else if (platform.Maze(i, j) === 'r')
        ghosts.push(new Ghost(j * scl, i * scl , ghostImg));
      else if(platform.Maze(i,j) === 'u')
        powerUps.push(new PowerUp(j * scl, i * scl))
    }
  }




	this.preload = function(){
		  brickImg = loadImage("images/brick.gif");
  	  foodImg = loadImage("images/food.png");
 		   pacmanImg = loadImage("images/pac.png");
  		ghostImg = loadImage("images/ghost.png");
  		powerUpImg = loadImage("images/apple.png")
	}

	this.countingPoints = function(){
            this.points += 1;
          
      
	}

	this.showInfo = function(){
		  	textFont("Comic Sans MS");
    		textSize(20);
    		fill(255,244,244)
    		text("Lives: " + this.lives, 780, 100);
    		text("Points: " + this.points, 780, 50);
	}

	this.walls = function(){
		 for (var i = 0; i < walls.length; i++)
    		walls[i].show();
	}

	this.foods = function(){
		for (var i = 0; i < foods.length; i++)
    		foods[i].show();

	}

	this.foodCount = function(){
		 if (foods.length == 0) {
    		alert("You won");

    }
	}

 	this.ghosts = function(){
 		for (var i = 0; i < ghosts.length; i++)
    		ghosts[i].show();
 	}
  	
  	this.powerUps = function(){
  		 for(var i = 0; i < powerUps.length; i++){
    		powerUps[i].show();
    	if(pacman.eats_power_ups(powerUps[i])){
      		powerUps.splice(i,1);
      		this.points += 10
    	}
   	}
 }

 	this.GhostMaker = function(){
 		  if (ghosts.length > 0) {
    		  ghostsAlive.push(ghosts[ghosts.length - 1])
    		  ghosts.splice(ghosts.length - 1, 1)
  		}
  			setTimeout(this.GhostMaker,1);
 	
 	}

  

 	this.Pacman_vs_Ghosts = function(){
 		 for (var i = 0; i < ghostsAlive.length; i++) {
    			ghostsAlive[i].move(walls);
    			ghostsAlive[i].show();
    		if (pacman.collision(ghostsAlive[i])) {
      			alert("You lost!");
            this.lives -= 1
            this.points = this.points

           
            
      		if (this.lives === 0){
        		location.reload();
              

      }

    }

  }
}

   

   this.pressing_keys = function(){

    if (keyCode === UP_ARROW) {
    if (platform.Maze(pacman.y / scl - 1, pacman.x / scl) !== '*'){
      pacman.move(3);
    }
    for (var i = 0; i < foods.length; i++)
      if (pacman.eats_normal_food(foods[i])) {
        foods.splice(i, 1);
           game.countingPoints(); 

      }
  }

    if (keyCode === LEFT_ARROW) {
    if (platform.Maze(pacman.y / scl, pacman.x / scl - 1) !== '*'){
      pacman.move(2);
    }
    for (var i = 0; i < foods.length; i++)
      if (pacman.eats_normal_food(foods[i])) {
        foods.splice(i, 1)
        this.countingPoints();
      }
  }

  if (keyCode === DOWN_ARROW) {
    if (platform.Maze(pacman.y / scl + 1, pacman.x / scl) !== '*'){
      pacman.move(1);
    }
    for (var i = 0; i < foods.length; i++)
      if (pacman.eats_normal_food(foods[i])) {
        foods.splice(i, 1)
        this.countingPoints();
      }
  }
  if (keyCode === RIGHT_ARROW) {
    // need to divide by 32 which is the amount of pixels of the game
    // + 1 ou -1 is necessary otherwise pacman will go onto the bricks
    // and is not a brick
    if (platform.Maze(pacman.y / scl, pacman.x / scl + 1) !== '*'){
      pacman.move(0);
    }
    for (var i = 0; i < foods.length; i++)
      if (pacman.eats_normal_food(foods[i])) {
        foods.splice(i, 1)
        this.countingPoints();
      }
    }
   }


}