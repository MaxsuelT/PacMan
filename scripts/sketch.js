


function setup() {
  createCanvas(900, 640);
  frameRate(6);
  game = new Game();
  platform = new Platform();
  game.preload();
  game.Maze();
 

 
 

}

function draw() {
    background(0);
    pacman.show();
    game.showInfo();
    game.walls();
    game.foods();
    game.ghosts();
    game.powerUps();
    game.GhostMaker();
    game.foodCount();
    game.Pacman_vs_Ghosts();


}



function keyPressed(){
    game.pressing_keys();
}
   

   

