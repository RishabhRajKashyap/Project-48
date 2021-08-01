//making variables
var gameState = "level1"
var bg;
var player, playerImg, player1Img, player2Img, player3Img, player4Img;
var scarl, scarlImg;
var m416, m416Img;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, 
wall16, wall17, wall18, wall19, wall20, wall21;
var tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8, tree9, tree10;
var invisibleBoundary1, invisibleBoundary2, invisibleBoundary3;
var zombie1, zombie2, zombie3;
var checkpoint;
var life = 7;

//loading images
function preload(){
  bg = loadImage("Edited Images/bg1.png");

  bg2Img = loadImage("Edited Images/bg2.png");

  lifeImg = loadImage("Edited Images/life.png");

  //playerImg = loadImage("Edited Images/player2(iv).png");

  player1Img = loadAnimation("Edited Images/player1(i).png", "Edited Images/player1(ii).png", 
  "Edited Images/player1(iii).png", "Edited Images/player1(iv).png");

  player2Img = loadAnimation("Edited Images/player2(i).png", "Edited Images/player2(ii).png", 
  "Edited Images/player2(iii).png", "Edited Images/player2(iv).png");

  player3Img = loadAnimation("Edited Images/player3(i).png", "Edited Images/player3(ii).png", 
  "Edited Images/player3(iii).png", "Edited Images/player3(iv).png");

  player4Img = loadAnimation("Edited Images/player4(i).png", "Edited Images/player4(ii).png", 
  "Edited Images/player4(iii).png", "Edited Images/player4(iv).png");

  zombie1Img = loadAnimation("Edited Images/zombie1(i).png", "Edited Images/zombie1(ii).png");

  zombie2Img = loadAnimation("Edited Images")

  scarlImg = loadImage("Edited Images/scarl.png");

  m416Img = loadImage("Edited Images/m416.png");

  akmImg = loadImage("Edited Images/akm.png");

  checkpointImg = loadImage("Edited Images/checkpoint.png");

}

//creating sprites
function setup(){
  createCanvas(1500, 800);

  bg1 = createSprite(850, 400, 1000, 1000);
  bg1.addImage(bg);
  bg1.scale = 1;

  bg2 = createSprite(850, 400, 1000, 1000);
  bg2.addImage(bg2Img);
  bg2.scale = 1;
  bg2.visible = false;

  m416 = createSprite(390, 18, 62, 62);
  m416.addImage(m416Img);
  m416.scale = 0.4;

  akm = createSprite(555, 678, 13, 13);
  akm.addImage(akmImg);
  akm.scale = 0.5;

  scarl = createSprite(1400, 200, 62, 62);
  scarl.addImage(scarlImg);
  scarl.scale = 0.2;

  checkpoint = createSprite(1420, 345, 13, 13);
  checkpoint.addImage(checkpointImg);
  checkpoint.scale = 0.3;
  checkpoint.setCollider("circle", -23, -45, 13);

  player = createSprite(750, 200, 20, 20);
  player.addAnimation("running", player2Img);
  player.setCollider("rectangle", 0, 0, 50, 50);
  player.debug = true;

  zombie1 = createSprite(500, 200);
  zombie1.addAnimation("running", zombie1Img);
  zombie1.setCollider("rectangle", 0, 0, 77, 77);
  zombie1.scale = 0.5;
  zombie1.debug = true;

  wall1 = createSprite(190, 400, 10, 800);
  wall1.visible = false;

  wall2 = createSprite(383, 385, 390, 20);
  wall2.visible = false;

  wall3 = createSprite(303, 55, 93, 13);
  wall3.visible = false;

  wall4 = createSprite(441, 55, 103, 13);
  wall4.visible = false;

  wall5 = createSprite(262, 31, 12, 61);
  wall5.visible = false;

  wall6 = createSprite(486, 31, 12, 61);
  wall6.visible = false;

  wall7 = createSprite(489.5, 541, 376, 13);
  wall7.visible = false;

  wall8 = createSprite(307, 667, 10, 260);
  wall8.visible = false;

  wall9 = createSprite(672.5, 590, 13, 110);
  wall9.visible = false;

  wall10 = createSprite(672.5, 741, 13, 115);
  wall10.visible = false;

  wall11 = createSprite(1374, 8, 13, 15);
  wall11.visible = false;

  wall12 = createSprite(1453, 8, 5, 18);
  wall12.visible = false;

  wall13 = createSprite(1373.5, 105, 13, 76);
  wall13.visible = false;

  wall14 = createSprite(1349, 138, 67, 13);
  wall14.visible = false;

  wall15 = createSprite(1421, 141, 80, 5);
  wall15.visible = false;

  wall16 = createSprite(1323, 201, 13, 140);
  wall16.visible = false;

  wall17 = createSprite(1408.5, 265, 182, 13);
  wall17.visible = false;

  wall18 = createSprite(831, 302, 450, 55);
  wall18.visible = false;

  wall19 = createSprite(1150, 155, 23, 200);
  wall19.visible = false;

  tree1 = createSprite(910, 140, 200, 100);
  tree1.visible = false;

  tree2 = createSprite(850, 446, 250, 118);
  tree2.visible = false;

  tree3 = createSprite(350, 250);
  tree3.visible = false;

  tree4 = createSprite(850, 750);
  tree4.visible = false;

  invisibleWall1 = createSprite(200, 100, 500, 13);
  invisibleWall1.visible = false;

  invisibleBoundary1 = createSprite(825, 1, 1350, 5);
  invisibleBoundary1.visible = false;

  invisibleBoundary2 = createSprite(825, 799, 1350, 5);
  invisibleBoundary2.visible = false;

  invisibleBoundary3 = createSprite(1500, 400, 5, 800);
  invisibleBoundary3.visible = false;

  invisibleBoundary4 = createSprite(156, 400, 5, 800);
  invisibleBoundary4.visible = false;

}

//function of arrow keys
function draw(){
  background("white");

  if (gameState === "level1"){

  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  player.collide(wall10);
  player.collide(wall11);
  player.collide(wall12);
  player.collide(wall13);
  player.collide(wall14);
  player.collide(wall15);
  player.collide(wall16);
  player.collide(wall17);
  player.collide(wall18);
  player.collide(wall19);
  player.collide(tree1);
  player.collide(tree2);
  player.collide(tree3);
  player.collide(tree4);

  if(player.isTouching(checkpoint)){
   gameState = "level2";
  }

  }
  else if(gameState === "level2"){
    bg2.visible = true;
    bg1.visible = false;
    checkpoint.visible = false;
    akm.visible = false;
    scarl.visible = false;
    m416.visble = false; 
  }

  for(var i = 1; i <= life; i++){
    life1 = createSprite(1075+i*56, 31, 20, 20);
    life1.addImage(lifeImg);
    life1.scale = 0.15
  }

  if(player.isTouching(zombie1)){
    player.x = 750;
    player.y = 200;
    life = life-1;
    console.log(life);
  }

  player.collide(invisibleBoundary1);
  player.collide(invisibleBoundary2);
  player.collide(invisibleBoundary3);
  player.collide(invisibleBoundary4);

  //console.log(player.y);
  if(keyDown(UP_ARROW)){
    player.y = player.y-13;
    player.addAnimation("running", player4Img);
    //player.changeAnimation("running", player4Img);
  }

  if(keyDown(DOWN_ARROW)){
    player.y = player.y+13;
    player.addAnimation("running", player1Img);
    //player.changeAnimation("running", player1Img);
  }

  if(keyDown(LEFT_ARROW)){
    player.x = player.x-13;
    player.addAnimation("running", player2Img);
    //player.changeAnimation("running", player2Img);
  }

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+13;
    player.addAnimation("running", player3Img);
    //player.changeAnimation("running", player3Img);
  }

  drawSprites();

}