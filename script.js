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
