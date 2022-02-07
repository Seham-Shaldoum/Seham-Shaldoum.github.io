function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  stroke("Grey");
  
  line(0, 100, 600, 100);
  line(0, 300, 600, 300);
  line(200, 0, 200, 400);
  line(400, 0, 400, 400);
  line(0, 350, 350, 0);
  line(250, 400, 600, 50);
  
  for (let i = 0; i < 600; i += 5){ 
  
    line(200, i, 400, i);
  
  }
  for (let i = 0; i < 600; i += 5){ 
  
    line(i, 100, i, 300);
  
  }
  for (let i = 0; i < 400; i += 5) {
     line(225+i, 125-i, 375+i, 275-i);
     line(225-i, 125+i, 375-i, 275+i);
  }
  
 
  
  
}