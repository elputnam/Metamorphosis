let dance = [];
let num_particles = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let i = 0; i < num_particles; i++) {
    dance.push(new particle(random(width),height/2));
  }
}

function draw() {
  // put drawing code here
  colorMode(HSB);
  background(255,0.01);
  for(let i=0; i < dance.length; i++){
    dance[i].update();
    dance[i].display();
    dance[i].edges();
    dance[i].colorCorrect();
    }

  }


//Particle class
function particle(x, y){
  this.loc = createVector(x, y);
  this.vel = createVector(0,0);
  this.ts = random(3,5);
  this.H = 0;

  this.display = function(){
    noStroke();
    fill(this.H, random(360), random(360), 0.5);
    circle(this.loc.x, this.loc.y, random(10,30));
  }

  this.update = function() {
    this.a = p5.Vector.random2D();
    this.a.mult(random(3));
    this.vel.add(this.a);
    this.vel.limit(this.ts);
    this.loc.add(this.vel);
    this.H += 1;
  }

  this.edges = function() {
    if (this.loc.x < 0) {
      this.loc.x = width;
      }
    if (this.loc.x > width) {
      this.loc.x = 0;
      }
    if (this.loc.y < 0) {
      this.loc.y = height;
      }
    if (this.loc.y > height) {
      this.loc.y = 0;
      }
    }
  this.colorCorrect = function()  {
    if (this.H > 360){
      this.H = 00;
    }
  }
  }
