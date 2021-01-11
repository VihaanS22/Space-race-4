var VI, HA, AN
var Vi, Ha, An
var stone, stone2, stoneImg
var create, createImg
var space, tell, tellImg, space2, space3, space4, space5
var story, storyImg
var portal, portalImg
var astro, astroImg
var button, buttonImg, goal, goalImg
var race, raceImg, ship, shipImg, ship2, shipImg
var instruct, instructImg, instruct1, instruct1Img
var back, backImg
var themeSound
var shipSound
var start, startButton
var asteroids
var collect, collect2, collectImg, collect2Img
var congrats, congratsImg
var cover1, cover2, cover3, coverImg, cover2Img, cover3Img
var playerScore = 0
var player2Score = 0

function preload(){
themeSound = loadSound("theme.mp3")
shipSound = loadSound("shipSound.mp3")
Vi = loadImage("Vi.png")
    Ha = loadImage("Ha.png")
An = loadImage("An.png")
stoneImg = loadImage("stone.png")
createImg = loadImage("create.png")
space = loadImage("space.png")
space2 = loadImage("space2.png")
space3 = loadImage("space3.png")
space4 = loadImage("space4.png")
space5 = loadImage("space5.png")
tellImg = loadImage("tell.png")
storyImg = loadImage("play.png")
portalImg = loadImage("portal2.png")
astroImg = loadImage("astro.png")
buttonImg = loadImage("button.png")
goalImg = loadImage("goal.png")
raceImg = loadImage("race.png")
shipImg = loadImage("ship.png")
instructImg = loadImage("instruct.png")
instruct1Img = loadImage("instruct1.png")
backImg = loadImage("back.png")
start = loadImage("sound.png")
collectImg = loadImage("collect.png")
collect2Img = loadImage("collect2.png")
congratsImg = loadImage("congrats.png")
coverImg = loadImage("cover.png")
cover2Img  = loadImage("cover2.png")
cover3Img = loadImage("cover3.png")
}

function setup(){
createCanvas(displayWidth, displayHeight-200)   
  


fill("white")
cover1 = createSprite(1300, 180, 10, 10)
cover1.addAnimation("covering", coverImg)
cover1.addAnimation("covering2", cover2Img)
cover1.addAnimation("covering3", cover3Img)

VI = createSprite(displayWidth/2-200, -20, 50, 50)
VI.addAnimation("Vi", Vi)
VI.velocityY = 4
HA = createSprite(displayWidth/2-70, -20, 50, 50)
HA.addAnimation("Ha", Ha)
HA.velocityY = 4
AN = createSprite(740, -20, 50, 50)
AN.addAnimation("An", An)
AN.velocityY = 4

stone = createSprite(-100, 400, 10, 10)
stone.addAnimation("stone", stoneImg)
stone.scale = 0.3
stone2 = createSprite(1435, 400, 10, 10)
stone2.addAnimation("stone", stoneImg)
stone2.scale = 0.3

create = createSprite(-30, 200, 10, 10)
create.addAnimation("create", createImg)
create.velocityX = 7


tell = createSprite(500, 100, 20, 20)
tell.addAnimation("intro", tellImg)

portal = createSprite(displayWidth/2, 1000, 50, 50)
portal.addAnimation("portal", portalImg)

story = createSprite(1600, 100, 50, 50)
story.addAnimation("story",storyImg)

astro = createSprite(-240, 500, 20, 20)
astro.addAnimation("astronaut", astroImg)
astro.scale = 0.5

button = createSprite(650, 400, 20, 20)
button.addAnimation("play", buttonImg)
button.visible = false

goal = createSprite(400, -200, 20,20)
goal.addAnimation("goal", goalImg)

race = createSprite(650, 200, 10, 10)
race.addAnimation("poster", raceImg)
race.visible = false

instruct = createSprite(650, 510, 20, 20)
instruct.addAnimation("instructions", instructImg)
instruct.scale = 0.5
instruct.visible = false

ship = createSprite(50, 300, 10, 10)
ship.addAnimation("spaceship", shipImg)
ship.visible = false
ship.scale = 0.7

/*ship2 = createSprite(-3050, 500, 10, 10)
ship2.addAnimation("spaceship", shipImg)
ship2.visible = false
ship2.scale = 0.7
ship2.velocityX = 0
ship2.setCollider("circle", 0, 0, 50)
ship2.debug = true
*/
instruct1 = createSprite(650, 200, 20, 20)
instruct1.addAnimation("instructions2", instruct1Img)
instruct1.visible = false

back = createSprite(780, 400, 20, 20)
back.addAnimation("go back", backImg)
back.visible = false
back.scale = 0.2

startButton = createSprite(50, 500, 10, 10)
startButton.addAnimation("click", start)

collect = createSprite(650, 500, 10, 10)
collect.addAnimation("h2", collectImg)
collect.visible = false
collect2 = createSprite(650, 500, 10, 10)
collect2.addAnimation("soil", collect2Img)
collect2.visible = false

congrats = createSprite(650, 500, 10, 10)
congrats.addAnimation("congratulations", congratsImg)
congrats.visible = false



asteroids = new Group()
asteroids2 = new Group()
asteroids3 = new Group()
asteroids4 = new Group()
}

function draw(){
    
    background(space) 
 
   
   VI.display()
   HA.display()
   AN.display()
   stone.display()
   stone2.display()
   create.display()
   tell.display()
   story.display()
   portal.display()
startButton.display()
  


   if(VI.y>300){
 
    stone2.velocityX = -14
    stone.velocityX = 14
    stone.lifetime = 50
    stone2.lifetime = 50
    create.lifetime  = 200
   }

if(stone.isTouching(VI)){
    VI.velocityX = 5
    VI.velocityY = -6
    VI.lifetime = 50
  
}
if(stone.isTouching(HA)){
    HA.velocityX = 3
    HA.velocityY = -10
    HA.lifetime = 50

}
if(stone2.isTouching(AN)){
    AN.velocityX = 8
    AN.velocityY = -2
tell.velocityY = -5
AN.lifetime = 50
tell.lifetime = 30
 
}

if(create.x>displayWidth+50){
   story.velocityX = -4
   portal.velocityY = -3
   story.lifetime = 200
   portal.lifetime = 100
}
if(portal.isTouching(story)){
    story.visible = false
}
if(portal.y<= -10){
    cover1.changeAnimation("covering2", cover2Img)
background(space2)
goal.display()
astro.velocityX = 6
astro.lifetime = 200
textSize(25)
text("YOU LAND AT A ROUGH SURFACE AND LOOK AROUND...IS THAT..JUPITER?", 10, 340)
text("YOU HELP YOUR FRIENDS UP AND SEE YOURSELF IN SPACE SUITS!AND THERE ARE SPACESHIPS TOO!!!", 10, 370)


}



if(create.x>displayWidth+50){
 textSize(25)
    text("MARS, 2070...EARTH IS NO MORE A PLACE FOR LIVING. IT'S BECOME A PLACE ONLY FOR RESEARCH.", 10, 100)
text("YOU ARE AT THE MARS GAMING CENTRE WITH YOUR FRIENDS. SUDDENLY....", 20, 130)
}
if(astro.x>1400){
    goal.velocityY = 5
     goal.lifetime = 100
    
    text("A MESSAGE APPEARS IN FRONT OF YOU AND SAYS;'WELCOME TO THE SPACE RACE.'", 10, 400)
    text("'BE THE SAVIOUR OF THE PLANETS!'", 10, 430)
    //text("YOU AND YOUR FRIENDS ARE EXCITED TO SEE THIS AND THINK IT IS A GAME..", 10, 460)
    //text("BUT LITTLE DO YOU KNOW THAT THIS IS NOT A GAME", 10, 490)
 
}

if(mousePressedOver(startButton)){
    themeSound.play()
    startButton.destroy()

    }


if(goal.y>1350){
 
    background(space3)
    cover1.changeAnimation("covering3", cover3Img)
    AsteroidGroup()
    Asteroid2Group()
    Asteroid3Group()
    Asteroid4Group()
    race.visible = true
ship.display()
//ship2.display()
button.visible = true
instruct.visible = true
instruct1.display()
back.display()

//timer.display()

}
    
 


if(mousePressedOver(instruct)){
instruct1.visible = true
back.visible = true
race.visible = false
button.visible = false
instruct.visible = false
}
if(mousePressedOver(back)){
    back.visible = false
    instruct1.visible = false
    instruct.visible = true
    race.visible = true
    button.visible = true

    
}
    
if(mousePressedOver(button)){
 
    themeSound.stop()
    race.destroy()
    startButton.destroy()
    ship.visible = true
  //  ship2.visible = true
    button.destroy()
    instruct.destroy()
    instruct1.destroy()
    back.destroy()
cover1.visible = false
   // themeSound.play()
   // timer.visible = true
 // timer.velocityY = 0.8
 
    }


   
    if(keyDown("left")){
        ship.x = ship.x - 6
    //  shipSound.play()
    }
        if(keyDown("right")){
            ship.x = ship.x+6
      //      shipSound.play()
        }
      

if(ship.x>1400 ){
ship.x = 50
playerScore = playerScore + 1
}
if(playerScore>=2){
background(space)
collect.visible = true
}
if(playerScore>=5){
   background(space4)
    collect.visible = false
    collect2.visible = true
}
if(playerScore>=8){
background(space5)
collect2.visible = false
congrats.visible = true
asteroids.destroyEach()
asteroids2.destroyEach()
asteroids3.destroyEach()
asteroids4.destroyEach()
ship.destroy()


}

/*if(ship2.x>1400){
ship2.x = 50
player2Score = player2Score + 1
}
if(player2Score>=2){
    background("red")

}
*/

if(asteroids.isTouching(ship)){
ship.x = 50
}
if(asteroids2.isTouching(ship)){
    ship.x = 50
    }

    if(asteroids3.isTouching(ship)){
        ship.x = 50
        }

        if(asteroids4.isTouching(ship)){
            ship.x = 50
            }

 /*           if(asteroids.isTouching(ship2) || asteroids2.isTouching(ship2) ||asteroids3.isTouching(ship2) || asteroids4.isTouching(ship2)){
ship2.x = ship2.x-8
ship2.velocityX= 0
}
else{
    ship2.velocityX = 3
}
   */
      
astro.display()
textSize(25)
fill("white");

text(playerScore, 1300, 250);
 

drawSprites()

  
    



}

function AsteroidGroup(){
 
    if (frameCount % 120 === 0) {
      var asteroid = createSprite(420,820,40,10);
      asteroid.y = random(270,820);

      asteroid.addImage(stoneImg);
 asteroid.scale = 0.2
     
      asteroid.velocityY = -6
     
  //  car.depth = man.depth;
  //    man.depth = car.depth + 1;
  
     asteroid.setLifetime = 400;
    asteroids.add(asteroid);
      
    }
  }

  function Asteroid2Group(){
 
    if (frameCount % 90 === 0) {
      var asteroid2 = createSprite(650,820,40,10);
      asteroid2.y = random(310,820);

      asteroid2.addImage(stoneImg);
 asteroid2.scale = 0.2
     
      asteroid2.velocityY = -6
     
  //  car.depth = man.depth;
  //    man.depth = car.depth + 1;
  
     asteroid2.setLifetime = 400;
    asteroids2.add(asteroid2);
      
    }
  }

  function Asteroid3Group(){
 
    if (frameCount % 70 === 0) {
      var asteroid3 = createSprite(880,820,40,10);
      asteroid3.y = random(290,820);

      asteroid3.addImage(stoneImg);
 asteroid3.scale = 0.2
     
      asteroid3.velocityY = -6
     
  //  car.depth = man.depth;
  //    man.depth = car.depth + 1;
  
 asteroid3.setLifetime = 400;
    asteroids3.add(asteroid3);
      
    }
  }

  function Asteroid4Group(){
 
    if (frameCount % 70 === 0) {
      var asteroid4 = createSprite(1110,820,40,10);
      asteroid4.y = random(270,820);

      asteroid4.addImage(stoneImg);
 asteroid4.scale = 0.2
     
      asteroid4.velocityY = -6
     
  //  car.depth = man.depth;
  //    man.depth = car.depth + 1;
  
 asteroid4.setLifetime = 400;
    asteroids4.add(asteroid4);
      
    }
  }