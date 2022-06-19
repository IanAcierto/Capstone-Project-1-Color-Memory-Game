const buttonColors = ['red', 'green', 'yellow', 'blue']

let gamePattern =[]
let playerSelectedPattern = []

let gameStarted = false
let level = 0
let maxlvl = 0
let titleDiv = document.querySelector()
//event handler for having the divs react when you hover over them

//event handler for having the divs react when you click them
//event handlers for starting the game, the game must meet a win condition so that's what the mode is for
function startGame(){
  if(!started){
    document.getElementById('level-title').innerHTML = `level ${level}`
    started = true;
    nextSequence();
  }
}
function modeSelect(){

}
//logic for starting the next level 
function nextSequence(){

}
function animatePress(){

}
function checkAnswer(){

}
//indicate to the player the next sequence