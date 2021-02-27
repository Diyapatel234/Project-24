class Dustbin{
    constructor(x,y,width,height) {
        var options = {
           
            'restitution':0.2,
            'friction':0.2,
            'density':1.0,
            'isStatic':true

        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;

    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
       
        rectMode(CENTER);
        fill("cyan");
        rect(0,0,this.width,this.height);
        pop();
    }
}