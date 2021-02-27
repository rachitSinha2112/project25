class Holder{
constructor(x,y,width,height){
var holder_option={
    isStatic:true
}
    this.image= loadImage("dustbingreen.png")
    this.body=Bodies.rectangle(x,y,width,height,holder_option);
    this.width=width;
    this.height=height;
    World.add(world,this.body)

}
display(){
    var pos=this.body.position;
    rectMode(CENTER)    
    fill("white");
    rect(pos.x,pos.y,this.width,this.height)
    
}
}
