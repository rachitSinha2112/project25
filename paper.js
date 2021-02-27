class Paper{
  constructor(x,y){
    var ball_options={
      isStatic:true,
      restitution:0.0,
      friction:0.0,
      density:1.2
   }
       this.image=loadImage("paper.png");
       this.body= Matter.Bodies.circle(x,y,20,ball_options);
       World.add(world,this.body)  
 }
    display(){
      var pos=this.body.position;
      fill("white")
      imageMode(CENTER)    
      image(this.image,pos.x,pos.y,30,30)
   
    }
            
}