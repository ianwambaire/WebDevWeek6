let isBlue = true;
//Added a button that toggles the background color of the webpage between two colors.
function changebackgroundcolour(){
    document.getElementById("home").style.backgroundColor = isBlue ? '#f4f4f4' : 'antiquewhite';
            isBlue = !isBlue;

}