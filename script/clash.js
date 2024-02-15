// reset()
// onload();
// function onload(){
//   let getscore = localStorage.getItem('score');
//   let score = getscore ? JSON.parse(getscore) : 0;
//   const winScore = document.getElementById('score');
//   winScore.innerText = score;
//   scoreSave();
// }

// let getscore = localStorage.getItem('score');
// let score = getscore?JSON.parse(getscore):0;

// }

// function reset(){
//   localStorage.clear();
// }

// ---------------------------------------------------------------------------------------
// function scoreSave(alphabet){
//   const winScore = document.getElementById('score')
//

//    })
//   }

// score++;
// localStorage.setItem('score',JSON.stringify(score));
//___________________________________________________________________________________
// play game__________________
function playBtn() {
  // hide and show element
  hideElementById("Home_screen");
  showElementById("play_screen");
  hideElementById("score-window");
  // reset life
  setElementById("life", 5);
  setElementById("score", 0);

  continueGame();
}
// key board event
document.addEventListener("keyup", (event) => {
  const playerPressed = event.key;
  const randomAlphabet = document.getElementById("display-board").innerText;
  const alphabet = randomAlphabet.toLowerCase();
  if (playerPressed === alphabet) {
    const currentScore = getTextElementValueById('score');
    let newscore = currentScore + 1;
    setElementById('score',newscore)
    removeBackgroundColor(alphabet);
    continueGame();
  } else {
    const currentLife = getTextElementValueById('life');
    let newLife = currentLife - 1;
    setElementById('life',newLife)
    if (newLife === 0) {
      gameOver();
      const currentAlphabet=getTextElementById(alphabet);
      removeBackgroundColor(currentAlphabet);
    }
  }
});

// game continue _____________________________________________
function continueGame() {
  const alphabet = randomAlphabetGenarate();
  const displayScreen = document.getElementById("display-board");
  displayScreen.innerText = alphabet;
}

function randomAlphabetGenarate() {
  const alphabetList = "abcdefghijklmnopqrstuvwxyz";
  const alphabetListArry = alphabetList.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabetListArry[index];
  setBackgroundColor(alphabet);
  return alphabet;
}

// set button color______________________
function setBackgroundColor(elementid) {
  const element = document.getElementById(elementid);
  element.classList.add("bg-red-400");
}
function removeBackgroundColor(elementid) {
  const element = document.getElementById(elementid);
  element.classList.remove("bg-red-400");
}
