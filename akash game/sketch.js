var player,playerImg
var ground,backgroundImg
var coinImg,wall
var score = 0
var life = 3
var stone,stoneGroup,stoneImage
var edges 
var heartImg
var winImg,gameOverImg
function preload(){
  playerImg = loadImage("player1.png")
  coinImg = loadImage("coin1.png")
  backgroundImg = loadImage("background1.png")
  wall = loadImage("wall.png")
  stoneImage = loadImage("stone1.png")
  heartImg = loadImage("heart4.png")
  winImg = loadImage("win.png")
  gameOverImg = loadImage("game_over.png")

} 
function setup(){
    createCanvas(1600,800)
   
    

    player = createSprite(20,750,20,20) 
    player.addImage(playerImg)
    player.scale=0.3

    ground= createSprite(800,795,1600,15) 
    s1 = createSprite(200,680,150,15) 
    s1.shapeColor=rgb(173,48,49)
    s2 = createSprite(400,690,150,15) 
    s2.shapeColor=rgb(173,48,49)
    s3 = createSprite(700,660,150,15) 
    s3.shapeColor=rgb(173,48,49)
    s4 = createSprite(1000,670,150,15) 
    s4.shapeColor=rgb(173,48,49)


    s5 = createSprite(300,590,150,15) 
    s5.shapeColor=rgb(173,48,49)
    s6 = createSprite(500,570,150,15) 
    s6.shapeColor=rgb(173,48,49)
    s7 = createSprite(800,560,150,15) 
    s7.shapeColor=rgb(173,48,49)
    s8 = createSprite(1100,600,150,15) 
    s8.shapeColor=rgb(173,48,49)

    s9 = createSprite(200,410,150,15) 
    s9.shapeColor=rgb(173,48,49)
    l1 = createSprite(370,580,10,20)
    l1.shapeColor=rgb(173,48,49)
    l2 = createSprite(360,583,10,10) 
    l2.shapeColor=rgb(173,48,49)
    s10 = createSprite(550,400,150,15) 
    s10.shapeColor=rgb(173,48,49)
    s11 = createSprite(760,380,150,15) 
    s11.shapeColor=rgb(173,48,49)
    s12 = createSprite(970,410,150,15) 
    s12.shapeColor=rgb(173,48,49)
    s13 = createSprite(1180,400,150,15) 
    s13.shapeColor=rgb(173,48,49)
    s14 = createSprite(1390,410,150,15) 
    s14.shapeColor=rgb(173,48,49)
    s15 = createSprite(1300,680,150,15)
    s15.shapeColor=rgb(173,48,49) 
    s16 = createSprite(300,250,150,15)
    s16.shapeColor=rgb(173,48,49)
    s17 = createSprite(600,260,150,15)
    s17.shapeColor=rgb(173,48,49)
    s18 = createSprite(900,220,150,15)
    s18.shapeColor=rgb(173,48,49)
    s19 = createSprite(1230,250,150,15)
    s19.shapeColor=rgb(173,48,49)


    
    c1 = createSprite(800,530,10,10)
    c1.addImage(coinImg)
    c1.scale=0.2
    c2 = createSprite(255,650,10,10)
    c2.addImage(coinImg)
    c2.scale=0.2
    c3 = createSprite(430,650,10,10)
    c3.addImage(coinImg)
    c3.scale=0.2
    c4 = createSprite(300,550,10,10)
    c4.addImage(coinImg)
    c4.scale=0.2
    c5 = createSprite(500,530,10,10)
    c5.addImage(coinImg)
    c5.scale=0.2
    c6 = createSprite(700,620,10,10)
    c6.addImage(coinImg)
    c6.scale=0.2
    c7 = createSprite(1000,630,10,10)
    c7.addImage(coinImg)
    c7.scale=0.2
    c8 = createSprite(1100,560,10,10)
    c8.addImage(coinImg)
    c8.scale=0.2
    c9 = createSprite(1300,640,10,10)
    c9.addImage(coinImg)
    c9.scale=0.2
    c10 = createSprite(200,360,10,10)
    c10.addImage(coinImg)
    c10.scale=0.2
    c11 = createSprite(550,360,10,10)
    c11.addImage(coinImg)
    c11.scale=0.2
    c12 = createSprite(760,340,10,10)
    c12.addImage(coinImg)
    c12.scale=0.2
    c13 = createSprite(960,370,10,10)
    c13.addImage(coinImg)
    c13.scale=0.2
    c14 = createSprite(1180,360,10,10)
    c14.addImage(coinImg)
    c14.scale=0.2
    c15 = createSprite(1380,370,10,10)
    c15.addImage(coinImg)
    c15.scale=0.2
    c16 = createSprite(300,210,10,10)
    c16.addImage(coinImg)
    c16.scale=0.2
    c17 = createSprite(600,220,10,10)
    c17.addImage(coinImg)
    c17.scale=0.2
    c18 = createSprite(900,180,10,10)
    c18.addImage(coinImg)
    c18.scale=0.2
    c19 = createSprite(1230,220,10,10)
    c19.addImage(coinImg)
    c19.scale=0.2,
    c20 = createSprite(150,650,10)
    c20.addImage(coinImg)
    c20.scale=0.2,

    heart1 = createSprite(120,30,10,10)
    heart1.addImage(heartImg)
    heart1.scale=0.05
    heart2 = createSprite(180,30,10,10)
    heart2.addImage(heartImg)
    heart2.scale=0.05
    heart3 = createSprite(240,30,10,10)
    heart3.addImage(heartImg)
    heart3.scale=0.05


    stoneGroup=new Group()


}




function draw(){
background(backgroundImg)
textSize(15)
text("x:"+mouseX,50,40)
text("y:"+mouseY,50,55)
fill("red")
textSize(20)
text("Score: "+score,1400,30)
edges=createEdgeSprites()

player.collide(ground)
player.collide(s1)
player.collide(s2)
player.collide(s3)
player.collide(s4)
player.collide(s5)
player.collide(s6)
player.collide(s7)
player.collide(s8)
player.collide(s9)
player.collide(l1)
player.collide(l2)
player.collide(s10)
player.collide(s11)
player.collide(s12)
player.collide(s13)
player.collide(s14)
player.collide(s15)
player.collide(s16)
player.collide(s17)
player.collide(s18)
player.collide(s19)




if(keyDown("UP_ARROW")){
    jump()
}
if(keyWentDown("RIGHT_ARROW")){
    player.velocityX=5
}
if(keyWentUp("RIGHT_ARROW")){
    player.velocityX=0
}
if(keyWentDown("LEFT_ARROW")){
    player.velocityX=-5
}
if(keyWentUp("LEFT_ARROW")){
    player.velocityX=0
}

player.velocityY=player.velocityY+1

if(player.isTouching(c1)){
    c1.destroy()
    score+=1
}
if(player.isTouching(c2)){
    c2.destroy()
    score+=1
}
if(player.isTouching(c3)){
    c3.destroy()
    score+=1
}
if(player.isTouching(c4)){
    c4.destroy()
    score+=1
}
if(player.isTouching(c5)){
    c5.destroy()
    score+=1
}
if(player.isTouching(c6)){
    c6.destroy()
    score+=1
}
if(player.isTouching(c7)){
    c7.destroy()
    score+=1
}
if(player.isTouching(c8)){
    c8.destroy()
    score+=1
}
if(player.isTouching(c9)){
    c9.destroy()
    score+=1
}
if(player.isTouching(c10)){
    c10.destroy()
    score+=1
}
if(player.isTouching(c11)){
    c11.destroy()
    score+=1
}
if(player.isTouching(c12)){
    c12.destroy()
    score+=1
}
if(player.isTouching(c13)){
    c13.destroy()
    score+=1
}
if(player.isTouching(c14)){
    c14.destroy()
    score+=1
}
if(player.isTouching(c15)){
    c15.destroy()
    score+=1
}
if(player.isTouching(c16)){
    c16.destroy()
    score+=1
}
if(player.isTouching(c17)){
    c17.destroy()
    score+=1
}
if(player.isTouching(c18)){
    c18.destroy()
    score+=1
}
if(player.isTouching(c19)){
    c19.destroy()
    score+=1
}
if(player.isTouching(c20)){
    c20.destroy()
    score+=1
}

createStone()
stoneGroup.bounceOff(s1)
stoneGroup.bounceOff(s2)
stoneGroup.bounceOff(edges[0])
stoneGroup.bounceOff(edges[1])
stoneGroup.bounceOff(edges[2])
stoneGroup.bounceOff(s3)
stoneGroup.bounceOff(s4)
stoneGroup.bounceOff(s5)
stoneGroup.bounceOff(s6)
stoneGroup.bounceOff(s7)
stoneGroup.bounceOff(s8)
stoneGroup.bounceOff(s9)
stoneGroup.bounceOff(s10)
stoneGroup.bounceOff(s11)
stoneGroup.bounceOff(s12)
stoneGroup.bounceOff(s13)
stoneGroup.bounceOff(s14)
stoneGroup.bounceOff(s15)
stoneGroup.bounceOff(s16)
stoneGroup.bounceOff(s17)
stoneGroup.bounceOff(s18)
stoneGroup.bounceOff(s19)

if(stoneGroup.isTouching(player)){
    life=life-1
    stoneGroup.destroyEach()
}

if(life===2){
    heart3.destroy()
}
else if(life===1){
    heart2.destroy()
}else if(life===0){
    heart1.destroy()
}
if(score===20){
    s1.destroy()
    s2.destroy()
    s3.destroy()
    s4.destroy()
    s5.destroy()
    s6.destroy()
    s7.destroy()
    s8.destroy()
    s9.destroy()
    s10.destroy()
    s11.destroy()
    s12.destroy()
    s13.destroy()
    s14.destroy()
    s15.destroy()
    s16.destroy()
    s17.destroy()
    s18.destroy()
    s19.destroy()
    l1.destroy()
    l2.destroy()
    player.destroy()
    stoneGroup.destroyEach()
    textSize(50)
    text("YOU WIN",700,480)
    var win=createSprite(800,340,5,5)
    win.addImage(winImg)
    gameOver.scale=0.8
    
}
if(life===2){
    s1.destroy()
    s2.destroy()
    s3.destroy()
    s4.destroy()
    s5.destroy()
    s6.destroy()
    s7.destroy()
    s8.destroy()
    s9.destroy()
    s10.destroy()
    s11.destroy()
    s12.destroy()
    s13.destroy()
    s14.destroy()
    s15.destroy()
    s16.destroy()
    s17.destroy()
    s18.destroy()
    s19.destroy()
    c1.destroy()
    c2.destroy()
    c3.destroy()
    c4.destroy()
    c5.destroy()
    c6.destroy()
    c7.destroy()
    c8.destroy()
    c9.destroy()
    c10.destroy()
    c11.destroy()
    c12.destroy()
    c13.destroy()
    c14.destroy()
    c15.destroy()
    c16.destroy()
    c17.destroy()
    c18.destroy()
    c19.destroy()
    c20.destroy()
    l1.destroy()
    l2.destroy()
    player.destroy()
    stoneGroup.destroyEach()
    var gameOver=createSprite(800,340,5,5)
    gameOver.addImage(gameOverImg)
}

drawSprites()
}

function jump(){
    //player.y+=5
    player.velocityY=-16
   
}
function createStone(){
 if(frameCount%170===0){
  stone = createSprite(random(100,1500),-10,10,10)
  stone.addImage(stoneImage)
  stone.scale=0.18
stone.velocityY=+5
stone.velocityX=-6
stone.lifeTime=50
stoneGroup.add(stone)
 }
}
