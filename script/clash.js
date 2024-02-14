function playBtn() {
  hideElementById('Home_screen');
  showElementById('play_screen');
  displayRandomAlhabet();
}
function randomAlphabetGenarate(){
  const alphabetList = 'abcdefghijklmnopqrstuvwxyz';
 const randomNumber = Math.random()*25;
 const index = Math.round(randomNumber);
 const alphabet = alphabetList[index];
 return alphabet;
}

function displayRandomAlhabet(){
  const displayAlphabet = randomAlphabetGenarate();
  const displayScreen = document.getElementById('display-board');
  displayScreen.innerText = displayAlphabet;
}