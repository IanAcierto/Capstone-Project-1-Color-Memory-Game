const buttonColors = ['red', 'green', 'yellow', 'blue']

let gamePattern =[]
let userClickedPattern = []

let level = 0
let maxlvl = 0
let started = false

function onLoad(){
  document.querySelector('body').classList.remove('game-over')
  document.getElementById('level-title').innerHTML = `<h1> Color Memory Game</h1>\n<h2> Please Select a Game Mode to Continue</h2> \n <div class=\"mode-container\"> \n <div id=\"easy\" onclick=\"startGame(5)\" class=\" btn mode easy-mode\"> \n<p>easy</p> \n </div> \n <div id=\"medium\" onclick=\"startGame(10)\" class=\" btn mode medium-mode\"\n<p>medium</p> \n </div> \n <div id=\"hard\" class=\"btn mode hard-mode\" onclick=\"startGame(10)\">\n<p>hard</p>\n</div>`;  
}

function startGame(lvl){
  if(!started){
    document.getElementById('level-title').innerHTML = `level ${level}`
    started = true;
    nextSequence();
    
  }
  console.log(`game started with ${lvl} levels`)
  return maxlvl = lvl;
}

//check if the player has chosen the right answer
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if(userClickedPattern.length === gamePattern.length){
      //player wins the game
      if(level === maxlvl){
        document.getElementById('level-title').innerHTML = `congrats! you've won!`
        setTimeout(()=>{document.querySelector('body').addEventListener('click', startOver())}, 10000)
        return;
      }
      //player gets the answer right
      setTimeout(()=>{
        nextSequence();
      },1000)
    }
  }
  else{
    document.querySelector('body').classList.add('game-over')
    document.getElementById('level-title').innerHTML = "Game Over!, click or tap restart to play again!"
  }
}
//logic for starting the next level 
function nextSequence(){
  userClickedPattern = []
  userClickedPattern.length = 0
  level++
  document.getElementById('level-title').innerHTML = `level ${level}`
  let randomNumber = Math.floor(Math.random()*4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  fadeIn(300, randomChosenColor)
  fadeOut(400, randomChosenColor)
}

function startOver(){
  level = 0;
  gamePattern = []
  playerClickedPattern = []
  onLoad();
  started = false;
}

//logic for having the player select the buttons
document.querySelectorAll('.btn').forEach((item)=>{
  item.addEventListener("click",(event)=>{
    if(started){
      userClickedPattern.push(event.target.id);
      animateClick(event.target.id)
      checkAnswer(userClickedPattern.length-1)
    }
  })    
})

//animations
function animateClick(currentColor){
  document.getElementById(currentColor).classList.add('clicked')
  setTimeout(()=>{
    document.getElementById(currentColor).classList.remove('clicked')
  }, 100)
}
function fadeIn(time, id){
  let fade = document.getElementById(id);
  setTimeout(()=>{
    fade.style.opacity=0.1
  }, time)
}
function fadeOut(time, id){
  let fade = document.getElementById(id);
  setTimeout(()=>{
    fade.style.opacity=1
  }, time)
}