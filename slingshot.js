class Slingshot {
    constructor(bodyA,pointB){
    var options = {
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 1,
    length: 15
    }
    this.pointB=pointB;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
    }
    attach(body){
     this.sling.bodyA = body;
     
    }
    fly(){
    this.sling.bodyA = null;
    }
    display(){
        push(); 
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        pop();
        }
    }
    }