function showElementById(element) {
  const showElement = document.getElementById(element);
  showElement.classList.remove("hidden");
}
function hideElementById(element) {
  const hideElement = document.getElementById(element);
  hideElement.classList.add("hidden");
}
function gameOver() {
  hideElementById("play_screen");
  showElementById("score-window");
  
}

function setElementById(elementId,value){
 const element = document.getElementById(elementId);
 element.innerText= value;
}
