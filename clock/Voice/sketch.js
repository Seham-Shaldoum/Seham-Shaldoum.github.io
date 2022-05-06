var gif_loadImg, gif_createImg;
let font;
var sound
function preload() {
  font = loadFont("Caveat-VariableFont_wght.ttf");
  sound = loadSound("Broke For Free.mp3");
  gif_loadImg = loadImage("ok.gif");
  gif_createImg = createImg("ok.gif");
}
function setup() { 
createCanvas(windowWidth, windowHeight,WEBGL);
  // positions canvas 
  //cnv.position(400, 10);
  textFont(font);
  textSize(windowWidth*0.1);
  sound.play();
} 


function draw() { 
  background(0)
  fill(40);
  textAlign(CENTER);
  push();
  translate(0,tan(frameCount*0.01)*20);
  rotateX(frameCount*0.01);
  rotateY(frameCount*0.01);
  image(gif_loadImg, 0, 0);
  
  // updates animation frames by using an html
  // img element, positioning it over top of
  // the canvas.
  gif_createImg.position(windowWidth/3, windowHeight/4);
  
  fill(97,203,255);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
box(450, 400, 1500, 1500);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);    //resizing the canvas to fill the screen.
}
