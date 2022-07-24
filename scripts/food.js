function Food(x,y){
	this.x = x;
	this.y = y;
	this.radius = 8;

	this.show = function(){
		image(foodImg,this.x,this.y);
	
	}
}