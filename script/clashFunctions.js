function showElementById(element){
  const showElement = document.getElementById(element);
  showElement.classList.remove('hidden');
}
function hideElementById(element){
  const hideElement = document.getElementById(element)
  hideElement.classList.add('hidden');
}