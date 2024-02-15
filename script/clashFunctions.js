function showElementById(element) {
  const showElement = document.getElementById(element);
  showElement.classList.remove("hidden");
}
function hideElementById(element) {
  const hideElement = document.getElementById(element);
  hideElement.classList.add("hidden");
}
// Modified gameOver function to reset the timer
function gameOver() {
  resetTimer();
  hideElementById("play_screen");
  showElementById("score-window");
  const lastScore = getTextElementValueById('score')
  setElementById('total-result',lastScore)
}

function setElementById(elementId,value){
 const element = document.getElementById(elementId);
 element.innerText= value;
}
function getTextElementValueById(elementId){
 const element = document.getElementById(elementId);
return value=parseInt(element.innerText);
}
function getTextElementById(elementId){
const element = document.getElementById(elementId);
const text = element.innerText;
return text;
}
