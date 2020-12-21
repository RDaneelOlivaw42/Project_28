class Tree{
    constructor(x, y){
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 20, 20, options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = loadImage('tree.png');
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 500, 600);
        pop();
    }
}