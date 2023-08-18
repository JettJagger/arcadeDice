let gameOver = false;
let roundScore = 0;

// const roll = document.getElementById('roll');
const reset = document.getElementById('reset');
const scoreTotal = document.getElementById('scoreTotal');
const diceImage = document.getElementById('diceImage');
const newGame = document.getElementById ('newGame');
const instructions = document.getElementById ('instructions')
const p1Roll = document.getElementById ('p1Roll')


newGame.addEventListener('click', () => {
    newGame.style.display = "none"
  reset.style.display = "block"
  scoreTotal.style.display ="block"
  instructions.style.display = "none"
  diceImage.src = `./image/dice6.gif`;
  roundScore = 0;
})


p1Roll.addEventListener('click', () =>{
  let dice1 = Math.floor(Math.random() * 6) + 1;
  diceImage.src = `./image/dice${dice1}.gif`;
   if (!gameOver){
        if (dice1 == 1) {
            roundScore = 0;
            // lose
            scoreTotal.innerHTML = "Game Over - You Loose!"
            gameOver = true;
            roll.disabled = true;
          
        }else {
            roundScore += dice1;
            scoreTotal.innerHTML = "Total Score" + roundScore;
            if (roundScore >= 20){
                // Win!
                scoreTotal.innerHTML = "You Win!"
                gameOver = true;
                roll.disabled = true;
                
            }

        }
    }
});

reset.addEventListener('click', () => {
  newGame.style.display = "block"
  instructions.style.display = "block"
  scoreTotal.style.display = "none"
  reset.style.display = "none"
    roundScore = 0;
    diceImage.src = './dice/11.gif';
    roll.disabled = false;
    scoreTotal.innerHTML = "Total Score: 0"
    gameOver = false;
});