class DustBin{
  constructor(x,y,width,height){
    var options = {
      isStatic: true
    }
    this.leftBody = Bodies.rectangle(x, y, width, height, options);
    this.bottomBody = Bodies.rectangle(x+height, y, width, height, options);
    this.rightBody = Bodies.rectangle(x+width+height, y,height, width, options);
    
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    
    World.add(world, this.leftBody);
    World.add(world, this.bottomBody);
    World.add(world,this.rightBody);
  }
  display(){
    var leftPos=this.leftBody.position;	
    var bottomPos=this.bottomBody.position;	
    var rightPos=this.rightBody.position;		

			push();
			translate(leftPos.x, leftPos.y);
			rectMode(CENTER);
			strokeWeight(3);
			fill(255,0,255);
		  rect(0, 0, this.width, this.height);
      pop()
      
      push();
			translate(bottomPos.x, bottomPos.y);
			rectMode(CENTER);
			strokeWeight(3);
			fill(255,0,255);
		  rect(0-this.height+this.height/2, 0+this.height/2, this.heigth, this.width);
      pop()
      
      push();
			translate(rightPos.x, rightPos.y);
			rectMode(CENTER);
			strokeWeight(3);
			fill(255,0,255);
		  rect(0-this.height+this.width+this.height/2-this.height/15, 0, this.width, this.height);
			pop()
  }
}

	