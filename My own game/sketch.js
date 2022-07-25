var canvas;
var database;
var gameState;
var playerCount;
var game,player,form;
var bg
var allPlayers;
var dog,dogImage
var cat, catImage
var pets=[]
var petBackground;

function preload(){
 bg=loadImage('./assets/bg.jpeg') 
catImage=loadImage('./assets/cat.png')
dogImage=loadImage('./assets/dog.png')
petBackground=loadImage ('./assets/pet background.jpeg')
}


function setup(){
  canvas= createCanvas(windowWidth, windowHeight)
  database = firebase.database();
  game=new Game()
  game.getState()
  game.start()
}
function draw() {
  background(petBackground);
  if (playerCount===2){
game.update(1)
  }
 if (gameState===1){
   game.play();
 }
}
function windowResized(){
  resizeCanvas (windowWidth,windowHeight)
}