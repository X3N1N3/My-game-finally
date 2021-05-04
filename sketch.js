

var godzillaImg, xenoImg, soldierImg, alienImg, heartImg, backGroundImg1, backGroundImg2, gameOverImg
var Soldier, Alien, Xeno, Coin, BigCoin, Godzilla
var BG
var alienBullet = 0, xenoBullet = 0, godzillaBullet = 0
var bullet
var bulletsGroup
var invisGround
var alienGroup
var xenoGroup
var godzillaGroup
var heartGroup
var lives = 3
var heart1,heart2,heart3
var score = 0


function preload() {
    heartImg = loadImage("Images/Heart.png")
    xenoImg = loadImage("Images/ajajjaja.png")
soldierImg = loadImage("Images/Soldow.png")
alienImg = loadImage("Images/AWIEN.png")
backGroundImg1 = loadImage("Images/WhyIsThereANuclearPowerplantNearCivilisation.jpg")
backGroundImg2 = loadImage("Images/WhyIsTheGroundCracked.jpg")
gameOverImg = loadImage("Images/6303-GAME_OVER.png")
godzillaImg = loadImage("Images/godzilla.png")

}
function setup() {
createCanvas(windowWidth,windowHeight)
BG = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
Soldier = createSprite(55,windowHeight-115, 50,50)
Soldier.addImage(soldierImg)
Soldier.scale = 0.5
Soldier.debug = true
BG.addImage(backGroundImg1)
BG.scale = 3.7

bulletsGroup = new Group()
alienGroup = new Group()
xenoGroup = new Group()
godzillaGroup = new Group()
invisGround = createSprite(windowWidth/2,windowHeight-55,windowWidth,10)
invisGround.visible = false

heart1=createSprite(windowWidth-200,50,50,50);
heart1.addImage(heartImg)
heart1.scale=0.2
heart2=createSprite(windowWidth-150,50,50,50);
heart2.addImage(heartImg)
heart2.scale=0.2

heart3=createSprite(windowWidth-100,50,50,50);
heart3.addImage(heartImg)
heart3.scale=0.2
heart1.visible=true;
heart2.visible=true;
heart3.visible=true


}
function draw() {
    background("white");
 
    if(frameCount%250 === 0){
        Alien = createSprite(windowWidth-10,windowHeight-115,50,50)
       Alien.addImage(alienImg)
        Alien.velocityX = -2.2
        Alien.debug = true
        alienGroup.add(Alien)
         
    
    }

    /*
    for(var i = 0; i < lives; i = i+1){
        
        var heart = createSprite(windowWidth-100*i-100,50,50,50)
        heart.addImage(heartImg)
       heart.scale = 0.285

        }
        
           
         */ 
        


         if(frameCount%2625 === 0){
Xeno = createSprite(windowWidth-10,windowHeight-220,50,50)
Xeno.addImage(xenoImg)
Xeno.velocityX = -1.9
Xeno.scale = 0.659
xenoGroup.add(Xeno)
        }

if(keyDown("space")){
    if(frameCount %15=== 0){


    
    

    bullet = createSprite(Soldier.x+70,Soldier.y-28.6,4,4)
    bullet.velocityX = 2
bulletsGroup.add(bullet)
    
    
    }
    }
    if(frameCount%10000 === 0){
Godzilla = createSprite(windowWidth, windowHeight-300,50,50)
Godzilla.addImage(godzillaImg)
Godzilla.velocityX = -1.4
Godzilla.scale = 1.1
godzillaGroup.add(Godzilla)


    }
    for(var j = 0; j < alienGroup.length; j = j+1){
        if(bulletsGroup.isTouching(alienGroup)){
            for(var i = 0; i<alienGroup.length;i = i+1){
            if(bulletsGroup.isTouching(alienGroup[i])){
            bulletsGroup.destroyEach()
            alienBullet = alienBullet + 1
            if(alienBullet >= 3){
                alienGroup[i].destroy()
                score = score + 10
alienBullet = 0
            }
            
        
            }
            
            
           }
            
            
            
                }


    }
    

if(bulletsGroup.isTouching(godzillaGroup)){
   for(var i = 0; i<godzillaGroup.length;i = i+1){
    if(bulletsGroup.isTouching(godzillaGroup[i])){
    bulletsGroup.destroy()
    godzillaBullet = godzillaBullet + 1
if(godzillaBullet >= 10){
godzillaGroup[i].destroy()
score = score + 100
godzillaBullet = 0

}
    }
    
    
   }
    
    
    
        }
        if(bulletsGroup.isTouching(xenoGroup)){
            for(var i = 0; i<xenoGroup.length;i = i+1){
             if(bulletsGroup.isTouching(xenoGroup[i])){
             bulletsGroup.destroy()
             xenoBullet = xenoBullet + 1
         if(xenoBullet >= 5){
         xenoGroup[i].destroy()
         score = score + 40
         xenoBullet = 0


        }
    }
    
    
   }
    
    
    
        }
   



  





    
Soldier.velocityY = Soldier.velocityY + 0.5
if(Soldier.isTouching(alienGroup)||Soldier.isTouching(xenoGroup)||Soldier.isTouching(godzillaGroup) ){
    lives = lives - 1
    
    alienGroup.destroyEach()
    xenoGroup.destroyEach()
        godzillaGroup.destroyEach()
    
    console.log(lives)
    
    
    
              }

if(lives==3){
  
    heart1.visible=true;
heart2.visible=true;
heart3.visible=true
}
 else if(lives==2){
console.log("vdhfdfhdgfhdgfh")
    
heart1.visible=true;
heart2.visible=true;
heart3.visible=false;

}   
if(lives==1){
    heart1.visible=true;
    heart2.visible=false
    heart3.visible=false
} 
else if(lives==0){
    heart1.visible=false
    heart2.visible=false
    heart3.visible=false
    alienGroup.destroyEach()
    xenoGroup.destroyEach()
        godzillaGroup.destroyEach()
        bulletsGroup.destroyEach()
var gameOver = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
    gameOver.addImage(gameOverImg)
gameOver.scale = 1.85
}
    

drawSprites();
    Soldier.collide(invisGround)
    textSize(23)
    text("score: "+ score,windowWidth-1100,50)

            }
  