function setup() {
  createCanvas(400, 400);
}
let t=0; 

function draw() {
  background(220);
  noStroke();
  for(row = 0; row < width; row++){
    for(col = 0; col < height; col++){
      let x=row*5;
      let y=col*5;
      let a = noise(row,col,t);
      fill(map(a, 0, 1, 0, 255));
      rect(x,y,width,height);
    }
    t += 0.03
  }
}