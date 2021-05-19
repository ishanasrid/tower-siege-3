class Slingshot{ 
constructor (bodyA ,pointB) {
    var options = {
    bodyA = bodyA, 
    pointB = pointB,
    friction :1,
    stiffness :0.04
}
this.sling = Constraint.create(options)
this.pointB = pointB 
    World.add(world, this.body);}

    attach(body){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA = null;

    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(4);
        stroke("turqooise")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }