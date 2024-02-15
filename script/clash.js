
//___________________________________________________________________________________
// play game__________________
// Modified playBtn function to start the timer
function playBtn() {
  // hide and show element
  hideElementById("Home_screen");
  showElementById("play_screen");
  hideElementById("score-window");
  // reset life
  setElementById("life", 5);
  setElementById("score", 0);

  // Start the timer when the game starts
  startTimer();
  continueGame();
}
// key board event
// Modified the keyup event listener to stop the timer when the game ends
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

// Modified reset function to reset the timer
function reset(){
  resetTimer();
  gameOver();
}

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
// Timer variables
let timeLeft = 30;
let timerInterval;

// Timer function
function startTimer() {
  const timerElement = document.getElementById("timer");
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timerElement.innerText = `Time Left: ${timeLeft} seconds`;
      timeLeft--;
    } else {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}
// Function to reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 30;
  const timerElement = document.getElementById("timer");
  timerElement.innerText = "";
}