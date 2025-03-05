let planes = []
let numPlanes = 50;

function setup(){
    createCanvas(1000,1000);
    background(250,0,0);
    angleMode(DEGREES)
    for(let i=0; i<numPlanes; i++){
        planes.push(new Plane())
    }
}

function draw(){
    background(250,0,0);
   for(let i=0; i<numPlanes; i++){
    planes[i].render();
    planes[i].move();
   }
}

