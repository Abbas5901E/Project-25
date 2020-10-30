class paper {
    constructor(x, y){
        var options = {restitution:0.3, friction:0.5, density:1.2};
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        this.width = 30;
        this.height = 30;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
     display(){
         var pos = this.body.position;
         var angle = this.body.angle;
         push();
         translate(pos.x,pos.y);
         rotate(angle);
         fill("white");
         imageMode(CENTER);
         image(this.image, pos.x, pos.y);
         rect(0, 0, this.width, this.height);
         pop();

     }
}