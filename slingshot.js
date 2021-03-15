class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("images/bow.png");
        this.sling2 = loadImage("images/bow_down.png");
        this.pointB = pointB
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
        //this.sling1.scale=1;
        //this.sling2.scale=1;
        
       image(this.sling1,80,80,130,130)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            strokeWeight(5);
            line(pointA.x , pointA.y, pointB.x , pointB.y+65);
            line(pointA.x , pointA.y, pointB.x , pointB.y-25    );
            
            pop();
        }
    }
    
}