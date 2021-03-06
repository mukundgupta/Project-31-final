const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var ground;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  ground = new Ground(200,height,600,20)
  
  for(var m = 0;m<=480;m = m + 80){
    divisions.push(new Division(m,800 - divisionHeight/2,10,divisionHeight))
  }
  
  for(var t = 15;t<=480;t = t + 50){
    plinkos.push(new Plinko(t,75))
  }
  
  for(var d = 50;d<=480;d = d + 50){
    plinkos.push(new Plinko(d,175))
  }
  for(var g = 15;g<=480;g = g + 50){
    plinkos.push(new Plinko(g,275))
  }
  for(var h = 50;h<=480;h = h + 50){
    plinkos.push(new Plinko(h,375))
  }
  Engine.run(engine)

}

function draw() {
  background("black");  
  Engine.update(engine)
  ground.display();
  if(frameCount%60 ===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  for(var j = 0;j< plinkos.length;j++){
    plinkos[j].display();
  }

  for(var j = 0;j< divisions.length;j++){
    divisions[j].display();
  }

  for(var j = 0;j< particles.length;j++){
    particles[j].display();
  }
}

