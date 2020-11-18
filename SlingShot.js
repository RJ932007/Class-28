class SlingShot{

    constructor(bodyA,pointB){

        var option = {

            bodyA:bodyA,
            pointB:pointB,

            stiffness:0.04,
            length:20

        }

        this.sling = Matter.Constraint.create(option);
        this.pointB=pointB;
        World.add(world,this.sling);

    }

    fly(){

        this.sling.bodyA=null;

    }

    display(){

    if(this.sling.bodyA){

    
        var b =this.sling.bodyA.position
        var p =this.pointB

        push();

        stroke("black");
        strokeWeight(6);
        line(b.x,b.y,p.x,p.y);
    
        pop();

    }

    }
}