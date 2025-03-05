let airFields = [];

function setup(){
    createCanvas(1000,1000);
    background(255,0,0);
    angleMode(DEGREES);
    rectMode(CENTER)
    airFields.push(new Airfield({}))
}

function draw(){
    background(255,0,0);
    airFields[0].renderAirfield();
    airFields[0].renderPlanes();
}

