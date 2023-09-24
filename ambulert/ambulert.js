let board = []

//x and y coords of pointers
let rawtime = 0;
let bluex = 250;
let bluey = 410;
let red1x = 0;
let red1y = 10;
let red2x = 150;
let red2y = 10;
let red3x = 500;
let red3y = 60;
//horizontal or vertical movement
let red1d = true;
let red2d = true;
let red3d = true;
let blued = true;
//left+right or up+down movement
let red1s = true;
let red2s = true;
let red3s = true;
let blues = true;

//varies on key input
let blueds = true;
let bluess = true;

let blueslow = true;
let lost = false;
//initializing array with board colors
for (let x=0; x<=50; x++){
  let temp = []
  if (x%5 == 0){ //horizontal roads
    for (let y=0; y<=50; y++) {
      temp.push(true);
    }
  }else { //vertical
    for (let y=0; y<=50; y++) {
      if (y%5 == 0) { //road
        temp.push(true);
      }
      else { //sidewalk
        temp.push(false);
      }
    }
  }
  board.push(temp)
}
//end initializing

let blueImage;
let redImage;

function setup() {
  createCanvas(1000,510);
  background(255,39,39);
  frameRate(15);
  stroke(255);
  
}

class Pointer {
  constructor(x, y, z, d, s) {
    this.x = x+5; //x coor
    this.y = y; // y coor
    this.z = z; // color
    this.d = d; //horizontal if true
    this.s = s; //positive if true
  }
  display() {
    fill(this.z);
    stroke(this.z);
    if (!this.d && this.s){ //down
      triangle(this.x-5,this.y-10,this.x,this.y,this.x,this.y-7.5);//left
      triangle(this.x,this.y-7.5,this.x,this.y,this.x+5,this.y-10);
    }else if (!this.d && !this.s){
      triangle(this.x-5,this.y,this.x,this.y-10,this.x,this.y-2.5);//left
      triangle(this.x+5,this.y,this.x,this.y-10,this.x,this.y-2.5);
    }else if (this.d && this.s){
      triangle(this.x-5,this.y-10,this.x+5,this.y-5,this.x-2.5,this.y-5);//left
      triangle(this.x-5,this.y,this.x+5,this.y-5,this.x-2.5,this.y-5);
    }else if (this.d && !this.s){
      triangle(this.x+5,this.y-10,this.x-5,this.y-5,this.x+2.5,this.y-5);//left
      triangle(this.x+5,this.y,this.x-5,this.y-5,this.x+2.5,this.y-5);
    }
    stroke('white');
  }
}

function keyPressed(){
  if (key == 'A' || key == 'a') {
    blueds = true;
    bluess = false;
  }else if (key == 'S' || key == 's') {
    blueds = false;
    bluess = true;
  }else if (key == 'D' || key == 'd') {
    blueds = true;
    bluess = true;
  }else if (key == 'W' || key == 'w') {
    blueds = false;
    bluess = false;
  }else if (key == 'X' || key == 'x') {
    rawtime = 0;
    //x and y coords of pointers
    bluex = Math.floor(Math.random() * 10)*50;
    bluey = Math.floor(Math.random() * 10)*50 +10;
    red1x = Math.floor(Math.random() * 10)*50;
    red1y = Math.floor(Math.random() * 10)*50 +10;
    red2x = Math.floor(Math.random() * 10)*50;
    red2y = Math.floor(Math.random() * 10)*50 +10;
    red3x = Math.floor(Math.random() * 10)*50;
    red3y = Math.floor(Math.random() * 10)*50 +10;
    //horizontal or vertical movement
    red1d = true;
    red2d = true;
    red3d = true;
    blued = true;
    //left+right or up+down movement
    red1s = true;
    red2s = true;
    red3s = true;
    blues = true;
    
    //varies on key input
    blueds = true;
    bluess = true;
    
    blueslow = true;
    lost = false;
  }
}

function draw() {
  //draw the city
  for (let x=0;x<board.length;x++){
    for (let y=0;y<board[x].length;y++){
      if (board[x][y]){
        stroke('black');
        fill('black');
        square(x*10,y*10,50);
        if (x==board.length-1){
          fill(255,39,39);
          stroke(255,39,39);
          square((x*10)+10,y*10,50);
        }
      }else{
        stroke('gray');
        fill('gray');
        square(x*10,y*10,50);
      }
    }
  }
  //done drawing city
  
  //test pointer
  let red1 = new Pointer(red1x, red1y,'red', red1d, red1s);
  red1.display()
  let red2 = new Pointer(red2x, red2y,'red', red2d, red2s);
  red2.display()
  let red3 = new Pointer(red3x, red3y,'red', red3d, red3s);
  red3.display()
  let blue = new Pointer(bluex, bluey,'cyan', blued, blues);
  blue.display()
  
  if (!lost) {
    //direction for red1d
    if (red1x%50 ==0 && (red1y-10)%50==0){
      red1d = Math.random(0,1)>0.5;
      red1s = Math.random(0,1)>0.5;
    }
    if (red1d){//horizontal
      if (red1s) { //go right
        if (red1x+10<=500){
          red1x +=10;
        }else{
          red1s = false;
        }
      }else{//go left
        if (red1x-10>=0){
          red1x -=10;
        }else{
          red1s = true;
        }
      }
    }else{//vertical
      if (red1s) { //go down
        if (red1y +10<= 500){
          red1y +=10;
        }else{
          red1s = false;
        }
      }else{//go up
        if (red1y-10>=10){
          red1y -=10;
        }else{
          red1s = true;
        }
      }
    }
    //red2 here
    if (red2x%50 ==0 && (red2y-10)%50==0){
      red2d = Math.random(0,1)>0.5;
      red2s = Math.random(0,1)>0.5;
    }
    if (red2d){//horizontal
      if (red2s) { //go right
        if (red2x+10<=500){
          red2x +=10;
        }else{
          red2s = false;
        }
      }else{//go left
        if (red2x-10>=0){
          red2x -=10;
        }else{
          red2s = true;
        }
      }
    }else{//vertical
      if (red2s) { //go down
        if (red2y+10<=500){
          red2y +=10;
        }else{
          red2s = false;
        }
      }else{//go up
        if (red2y-10>=10){
          red2y -=10;
        }else{
          red2s = true;
        }
      }
    }
    //direction for red3
    if (red3x%50 ==0 && (red3y-10)%50==0){
      red3d = Math.random(0,1)>0.5;
      red3s = Math.random(0,1)>0.5;
    }
    if (red3d){//horizontal
      if (red3s) { //go right
        if (red3x+10<=500){
          red3x +=10;
        }else{
          red3s = false;
        }
      }else{//go left
        if (red3x-10>=0){
          red3x -=10;
        }else{
          red3s = true;
        }
      }
    }else{//vertical
      if (red3s) { //go down
        if (red3y +10<= 500){
          red3y +=10;
        }else{
          red3s = false;
        }
      }else{//go up
        if (red3y-10>=10){
          red3y -=10;
        }else{
          red3s = true;
        }
      }
    }
    
    //blue here
    if (bluex%50 ==0 && (bluey-10)%50==0){
      if (blued != blueds){
        blued = blueds;
      }
      if (blues != bluess) {
        blues = bluess;
      }
    }
    if (blued && blueslow){//horizontal
      //set blues to bluess if conditions met
      if (blues != bluess) {
          blues = bluess;
        }
      if (blues) { //go right
        if (bluex+10<=500){
          bluex +=10;
        }else{
          blues = false;
        }
      }else{//go left
        if (bluex-10>=0){
          bluex -=10;
        }else{
          blues = true;
        }
      }
    }else if(!blued && blueslow){//vertical
      if (blues != bluess){
        blues = bluess;
      }
      if (blues) { //go down
        if (bluey +10<= 510){
          bluey +=10;
        }else{
          blues = false;
        }
      }else{//go up
        if (bluey-10>=10){
          bluey -=10;
        }else{
          blues = true;
        }
      }
    }
    blueslow = !blueslow;
    rawtime +=1;
  }
  
  fill(248,248,248);
  stroke(248,248,248);
  textFont('Nunito Sans',50);
  text("Press X to Restart",550,105);
  textSize(30);
  text("Use ASWD to control the Blue Car",550, 205);
  text("as if you're driving on the road",550, 255);
  text("Avoid the Red Ambulances",550, 305);
  
  let Warn = 100;
  let Lose = 20;
  stroke(255,39,39);
  fill(255,39,39);
  rect(520, 355, 400, 100);
  if (lost){
    fill(248,248,248);
     stroke(248,248,248);
     text("LOSER; Press X to try again",550, 385);
     text("Total time: "+(rawtime/15).toFixed(2)+" seconds",550, 415);
  }else{
    if( (Math.abs(red1x-bluex)<=Lose && Math.abs(red1y-bluey)<=Lose) || (Math.abs(red2x-bluex)<=Lose && Math.abs(red2y-bluey)<=Lose) || (Math.abs(red3x-bluex)<=Lose && Math.abs(red3y-bluey)<=Lose) ){
       fill(248,248,248);
       stroke(248,248,248);
       text("LOSER; Press X to try again",550, 385);
       text("Total time: "+(rawtime/15).toFixed(2)+" seconds",550, 435);
       lost = true;
    }else if( (Math.abs(red1x-bluex)<=Warn && Math.abs(red1y-bluey)<=Warn) || (Math.abs(red2x-bluex)<=Warn && Math.abs(red2y-bluey)<=Warn) || (Math.abs(red3x-bluex)<=Warn && Math.abs(red3y-bluey)<=Warn) ){
       fill(248,248,248);
       stroke(248,248,248);
       text("An Ambulance is nearby!",550, 385);
    }
  }
  
}
