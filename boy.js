class Boy{
    constructor(x,y){
        var options={
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, 20, 20, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage('boy.png');
        //this.image.scale = 0.5;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 300, 300);
        //image.scale(0.5);
        pop();
    }
}