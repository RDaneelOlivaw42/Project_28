class Stone{
    constructor(x, y, r){
        var options={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.r = r;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, r/2, options);
        this.image = loadImage('stone.png');
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        //var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}