class Plane {

constructor(obj){
    this.posX = obj.posX || random  (0,1000);
    this.posY = obj.posY || random  (0,1000);
    this.velX = obj.velX || random (-.9,.9);
    this.velY = obj.velX || random (-.9,.9);
    this.apWidth = obj.apWidth || 15;
    this.apHeight = obj.apHeight || 20;
    this.tail = obj.tail || 4;  //send an object with property called tyail
}

render(){
    push ()
    translate (this.posX, this.posY)
    //ellipse(0,0,10,10)
    let angle = atan2(this.velY, this.velX);
    rotate (angle)
    strokeWeight(1)
    beginShape()
    vertex(0,0);
    vertex(-this.tail, -this.apWidth/2)
    vertex(this.apHeight -this.tail, 0)
    vertex(-this.tail, this.apWidth/2)
    endShape(CLOSE)
    pop ()
}

checkPos() {
    if (this.posX > 1000) {
        this.posX = 0;
        this.posY = map(this.posY,0 ,1000 ,1000,0)
    } else if (this.posX < 0) {
        this.posX = 1000;
        this.posY = map(this.posY,0 ,1000 ,1000,0)   //learn map
    }
}

move(){
    this.posX = this.posX + this.velX;
    this.posY = this.posY + this.velY;
}

}