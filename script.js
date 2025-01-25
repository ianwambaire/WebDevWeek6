let isBlue = true;
//Added a button that toggles the background color of the webpage between two colors.
function changebackgroundcolour(){
    document.getElementById("home").style.backgroundColor = isBlue ? '#f4f4f4' : 'antiquewhite';
            isBlue = !isBlue;

}
//Added a slider that adjusts the size of a paragraph text dynamically.
function updateSliderValue(value) {
    document.getElementById('sliderValue').textContent = `Value: ${value}`;
}
function adjustTextSize(value) {
    const textElement = document.getElementById('subheadline');
    textElement.style.fontSize = `${value}px`;
    document.getElementById('textSizeValue').textContent = `Text Size: ${value}px`;
}
//Create a modal that displays when a button is clicked and hides when the user clicks a close button.
const modal = document.getElementById("modal");
  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closeModal");

  openModal.onclick = function () {
    modal.style.display = "block";
  };
  closeModal.onclick = function () {
    modal.style.display = "none";
  };