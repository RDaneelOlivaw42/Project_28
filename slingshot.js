class Slingshot{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling)
    }

    display(){
        if(this.sling.bodyA){
        var posA = this.sling.bodyA.position;
        var posB = this.sling.pointB;
        strokeWeight(4);
        var Anchor1X = posA.x;
        var Anchor1Y = posA.y;
        line(Anchor1X, Anchor1Y, posB.x, posB.y);
        }
    }

    fly(){
        this.sling.bodyA = null;
    }
}