function setup() {
  createCanvas(400, 400,WEBGL);
}

function draw() {
  background(220);
  strokeWeight(6);
  stroke(100);
  
  var x=10
  
  while (x<width) {
    fill(230,60,90)
    rect(x,x+100,100+x,400+x);
    x=x+10
    
  }
  for (var x=200; x<=height; x+=70){
  fill(random(255),random(255),random(255));
    rotateX(frameCount * 0.033);
  rotateY(frameCount * 0.033);
  box(150);
    
    
  }
  
}