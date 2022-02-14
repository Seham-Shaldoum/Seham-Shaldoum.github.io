//art151
//Math+language
//referances: spiral Variation class activity + p5 referance page

//set face color
let facecolor;
//set frame rate (in frames per second)
let frame_rate = 3; 
//set background, stroke, and fill
let colors = {bg: 'white', stroke: 'grey', fill: [255]};
//set offset for center of spiral 
let offsets = {x: 30, y:10};
//set multiplier for size of spiral
let scale = 0.5;
//diameter
let diam = 0.5; //set diameter for points on spiral
let stroke_weight = 0.5; //set weight of connective lines

function setup() {
  createCanvas(800, 200); //canvas size
   frameRate(frame_rate);
  strokeWeight(stroke_weight);
  //encode colors  
  for(let clr in colors){
    console.log(colors[clr]);
    colors[clr] = color(colors[clr]);
  }
}

function draw() {
facecolor=random(['#8D5524','#3C68642','#E0AC69','#F1C27D','#FFDBAC','#4B3624']); //face colors
 
background(200)
  let c = color('hsl(160, 100%, 50%)'); //background work colors
noStroke();
fill(c);
rect(0, 10, 140, 160); // Draw rectangle
c = color('hsla(160, 100%, 50%, 0.5)'); //rect color
fill(c);
rect(180, 10, 799, 160); // Draw rectangle
  fill(facecolor);
  circle(160,100,96); //draw circle
  ellipse(160, 114, 80, 120);  //draw ellipse
beginShape();
vertex(200, 100); //nose location
bezierVertex(208, 157, 236, 150, 175, 147);
endShape();

const TXT = '';  //inserting text1 over the background rect
textSize(20);
fill('gray')
textWrap(WORD);
  fill(0, 0, 0, 75);
text('THE', 0, 20, 200);
text('OF', 57.1, 30, 100);
fill(0, 0, 0, 50);
text('AND', 114.2, 75, 100);
  text('TO', 178, 75, 100);
  text('IN', 240, 85, 100);
  text('A', 310, 95, 100);
  text('WAS', 355, 105, 100);
  text('IS', 425, 115, 100);
  text('THAT', 470, 125, 100);
  text('HE', 540, 135, 100);
  text('FOR', 595, 145, 100);
  text('AS', 665, 155, 100);
  text('IT', 730, 165, 100);

  const TXT2 = 'f(OF) ≅ (1/r)*f(THE)';  //inserting text2
  textSize(15);
textWrap(WORD);
text(TXT2, 15, 110, 100);
  
  
 stroke(colors.stroke);
  fill(colors.fill);
  var pts = []; //create an empty array 
  
  //generate an array of points in the spiral
  //interval between points gets larger as animation progresses
  for (var i = 1; i <= 500; i += frameCount/100) {
    var x = cos(i) * i + 16.5;
    var y = sin(i) * i + 15;
    x = x * 8 + offsets.x;
    y = y * 2 +20 + offsets.y;
 
    pts.push({x:x, y:y});
    
  }
  //perform the connect the dots function on each point
  pts.map((pt, i) => {connect_the_dots(pt, pts, i)})

}

//draw a dot at each point, and a line between consecutive dots
function connect_the_dots(pt, pts, i){
  var npt; 
  if(i <= pts.length - 100){
    npt = pts[i+1];
    line(pt.x, pt.y, npt.x, npt.y);
    ellipse(pt.x, pt.y, diam);
  }
 // Compute the function with a value between 1 and 14
 let xValue = map(mouseX, 1, width, 1, 14);
 let yValue = (1/xValue)*181076598;
let y = map(yValue, 1, 14, height, 14);
 //wordrank = xValue
 //wordfreq = yValue

  let legend = ' Word rank(' + nfc(xValue, 3) + ')\n ' + 'Word frequency ~ '+ nf(yValue, 1, 4);
 
 stroke(100);
 line(mouseX, y, mouseX, height); //the moving line
 fill(0);
 textSize(12);
 text(legend, 250, 180);
 noStroke();
 ellipse(mouseX, y, 7, 7);

 // Draw the curve,
 // over the domain of x 
 noFill();
 stroke(0);
 beginShape();
 for (let x = 0; x < width; x++) {
   xValue = map(x, 0, width, 0, 14);
   yValue = (1/xValue);
   y = map(yValue, 1, 14, height, 1);
   vertex(x, y);
 }

 endShape();
 
 line(0, 0, 0, height);
 line(0, height - 1, width, height - 1);
}


