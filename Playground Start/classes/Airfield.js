class Airfield{
    constructor(){
        this.numPlanes = 100;
        this.width = 500;
        this.height = 500;
        this.planes = [];
        this.generatePlanes();
    }

    renderAirfield(){
        push();
        translate(this.width, this.height);
        fill (100,100,100);
        rect (0,0,this.width, this.height);
       
        pop();
    }

    renderPlanes() {
        push();
        translate(this.width, this.height);
        fill (100,200,100);
       
        this.planes.forEach(plane => plane.render())
        pop();
    }

    generatePlanes(){
  
        for(let i = 0; i<this.numPlanes; i++) {
            this.planes.push(new Plane({posX:random (-this.width/2, this.height/2),posY:random (-this.width/2, this.height/2)}))
        }
    }
}