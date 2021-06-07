var canvas, bg;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var bike1,bike2,bike3,bike4,bikes;
var bike1Img , bike2Img, bike3Img, bike4Img,track;

function preload(){

  bike1Img = loadImage("kisspng-car-clip-art-5ae9ee26917419.0575260415252802945958-removebg-preview.png");
  bike2Img = loadImage("man-in-helmet-riding-motorcycle-view-from-above-vector-32287531-removebg-preview.png");
  bike3Img = loadImage("pngtree-people-on-motorcycle-top-or-above-view-png-image_947495-removebg-preview.png")
  bike4Img = loadImage("motorcycle-windshield-rider-top-view-vector-illustration-isolated-color-sport-wearing-helmet-white-background-symbol-153040755-removebg-preview.png")
  track = loadImage("track.jpg");
}


 
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
