class launcher{
    constructor (bodyA,pointB){
    var options ={
    bodyA : bodyA,
    pointB : pointB,
    stiffness : 0.4,
    length : 50
    }    
        this.chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.chain);
}
    fly(){
        this.chain.bodyA = null;
    }
    attatch(body){
        this.chain.bodyA = body;
    }
display(){
    if(this.chain.bodyA){
    
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.pointB;
    line(pointA.x,pointA.y,pointB.x,pointB.y);

        }
    }    
}