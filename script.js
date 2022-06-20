const buttonColors = ['red', 'green', 'yellow', 'blue']

let gamePattern =[]
let playerSelectedPattern = []

let gameStarted = false
let level = 0
let maxlvl = 0
let started = false
//event handler for having the divs react when you hover over them
function onHover(){

}
//event handler for having the divs react when you click them
//event handlers for starting the game, the game must meet a win condition so that's what the mode is for
function onLoad(){
  document.getElementById('level-title').innerHTML = `<h1> Color Memory Game</h1>\n<h2> Please Select a Game Mode to Continue</h2> \n <div class=\"mode-container\"> \n <div id=\"easy\" onclick=\"startGame(5)\" class=\" btn mode easy-mode\"> \n<p>easy</p> \n </div> \n <div id=\"medium\" onclick=\"startGame(10)\" class=\" btn mode medium-mode\"\n<p>medium</p> \n </div> \n <div id=\"hard\" class=\"btn mode hard-mode\" onclick=\"startGame(10)\">\n<p>hard</p>\n</div>`;
}
function startGame(maxlvl){
  if(!started){
    document.getElementById('level-title').innerHTML = `level ${level}`
    started = true;
    nextSequence();
  }
  console.log(`game started with ${maxlvl} levels`)
  return maxlvl;
}
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if(user.ClickedPattern.length === gamePattern.length){
      if(level === maxlvl){
        document.getElementById('level-title').innerHTML = `congrats! you've won! click or tap anywhere to play again!`
        startOver();
        return;
      }
    }
  }
}
//logic for starting the next level 
function nextSequence(){
  userClickedPattern = []
  level++
  document.getElementById('level-title').innerHTML = `leve ${level}`
  let randomNumber = Math.floor(Math.random()*4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
}
function startOver(){
onload();
started = false;
}
//animations
function animatePress(){

}
function fadeIn(){

}
function fadeOut(){
  
}