function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100,100,200);
  //Followed some hunches and figured out the syntax 
  for(var i = 0; i < 10; i++) {
    rect(20 * i,20 * i,30 * i,i * 30,i);
  }
}
