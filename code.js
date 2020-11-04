var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var line1 = createSprite(200, 110,400,5);
line1.shapeColor="red"

var line2 = createSprite(200, 290,400,5);
line2.shapeColor="red"

var line3 = createSprite(200, 15,400,5);
line3.shapeColor="red"

var line4 = createSprite(200, 385,400,5);
line4.shapeColor="red"

var line5 = createSprite(387, 200,5,400);
line5.shapeColor="blue"

var line3 = createSprite(13, 200,5,400);
line3.shapeColor="blue"

var goal1= createSprite(200, 28,100,20);
goal1.shapeColor="yellow"

var goal2= createSprite(200, 372,100,20);
goal2.shapeColor="yellow"

var striker= createSprite(200,200,10,10);
striker.shapeColor="green"

var playermallet= createSprite(200,50,50,10);
playermallet.shapeColor="black"

var computermallet= createSprite(200, 350,50,10);
computermallet.shapeColor="black"

var gameState = "serve";


 var compScore = 0;
var playerScore = 0;

striker.velocityX=5
striker.velocityY=5

striker.velocityX=0
striker.velocityY=0


function draw() {
  background("white")
  
   if(striker.isTouching(computermallet) || striker.isTouching(playermallet)) {
   playSound("assets/category_board_games/card_shuffle_2.mp3");
   }

if(striker.isTouching(goal1) || striker.isTouching(goal2)) {
   playSound("assets/category_achievements/lighthearted_bonus_objective_5.mp3");
  
}


createEdgeSprites();
striker.bounceOff(playermallet)
striker.bounceOff(computermallet)
striker.bounceOff(edges)
playermallet.bounceOff(rightEdge)
playermallet.bounceOff(leftEdge)
computermallet.bounceOff(rightEdge)
computermallet.bounceOff(leftEdge)


playermallet.velocityX=0
playermallet.velocityY=0



if (gameState === "serve") {
    text("Press Space to Serve",150,180);
  }
   
text(playerScore,25,170);
  text(compScore,25,230);
  

 if (keyDown("left")) {
   playermallet.x=playermallet.x-10
 }
 
 if (keyDown("right")) {
   playermallet.x=playermallet.x+10
 }
 computermallet.x=striker.x
 
if (goal1.isTouching(striker)||goal2.isTouching(striker)) {
   striker.x=200
   striker.y=200
   striker.velocityX=0
   striker.velocityY=0

 }
 if (keyDown("space") &&  gameState === "serve") {
    serve();
    
    gameState = "play";
  
 }
  //Score
 if(striker.isTouching(goal1)||striker.isTouching(goal2) )
{
 if (goal1.isTouching(striker)) 
  {
    compScore=compScore + 1
  }  
  if (goal2.isTouching(striker)) 
  {
    playerScore=playerScore + 1
  }  


   if (playerScore === 5 || compScore === 5){
    gameState = "over";
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  
  if (keyDown("r") && gameState === "over") {
    gameState = "serve";
    compScore = 0;
    playerScore = 0;
  }
     
  if(striker.y > 400) {
      

            
    }
    
    if(striker.y < 0) {
      
    }
      
   reset();
    gameState = "serve";
  
  }
    
  for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
 
   
drawSprites();
  
}
function serve() {
  striker.velocityX = 5;
  striker.velocityY = 5;
}

function reset() {
  striker.x = 200;
  striker.y = 200;
  striker.velocityX = 0;
  striker.velocityY = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
