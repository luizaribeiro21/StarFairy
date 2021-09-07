class Star {
    constructor (x,y,height,width){
       
        this.body = Bodies.rectangle(x,y,width,height)
        this.width = width;
        this.height = height;
        this.image = loadImage ("starImage.png"); 
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        push ();
        translate(pos.x, pos.y);
        imageMode(CENTER)
	    image(this.image, 20, 0, this.width+20, this.height+20); 
        pop (); 
    }
}