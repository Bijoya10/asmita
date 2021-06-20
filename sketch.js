var ground;
var playingChar, villain;
var obstacle1group;
var time, lives=3;

var gameState = "start";

function preload() {

  villainImg = loadAnimation("images/weirdBoy/tile000.png", "images/weirdBoy/tile001.png", "images/weirdBoy/tile002.png", "images/weirdBoy/tile003.png", "images/weirdBoy/tile005.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  var start = createButton("startButton");
  start.style("backgroundColor","grey")
  start.position(width/2, height/2);
  start.mousePressed(() => {
    start.hide();
    gameState = "play";
    
    ground = createSprite(width / 2, height - 50, width, 22);
    playingChar = createSprite(width - 100, height - 100, 100, 50);
    
    villain = createSprite(100, height - 100, 100, 50);
    villain.addAnimation("villain", villainImg);
    villain.debug=true
    villain.setCollider("rectangle",-50,0,50,120)
    obstacle1group = new Group();
  })



}

function draw() {
  background("skyblue");
  if(gameState==="start"){
    textSize(30)
    text("Click to start the game",width/2-100,height/2-50)
  }
  if (gameState === "play") {
    spawnObstacleslev1();

    console.log(playingChar.y)
    if (keyDown("UP_ARROW") && playingChar.y>=636)
      playingChar.velocityY -= 15;
    if (keyDown("RIGHT_ARROW"))
      playingChar.velocityY += 10;

    //if (playingChar.y <= height / 3)
    playingChar.velocityY += 0.8;

    playingChar.collide(ground);

    if (villain.isTouching(obstacle1group))
      villain.y -= 15;

    villain.velocityY += 0.8;

    villain.collide(ground);
  }
 drawSprites();
}

function spawnObstacleslev1() {
  if (frameCount % 95 === 0) {
    var obstacle1 = createSprite(0, height - 100, 20, 20);
    obstacle1.velocityX = 15;
    obstacle1group.add(obstacle1);
  }
}