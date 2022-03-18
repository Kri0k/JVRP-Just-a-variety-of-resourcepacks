let theme = localStorage.getItem('theme');
console.log(theme)

var backgroundLight = [
    './resources/background/light/beacon.png',
    './resources/background/light/house.png',
    './resources/background/light/hotel.png',
    './resources/background/light/pyramid.png',
    './resources/background/light/truck.png',
    './resources/background/light/statue.png'
]
var backgroundDark = [
    './resources/background/dark/beacon.png',
    './resources/background/dark/house.png',
    './resources/background/dark/lake.png',
    './resources/background/dark/pyramid.png',
    './resources/background/dark/truck.png',
    './resources/background/dark/window.png'
]
var version = 18;
themeTrigger.apply(backgroundDark, backgroundLight);

var dropMenu = document.querySelectorAll('.dropMenu');
$('.dropMenu').hover(
    function() {$('.dropMenu').addClass('shown'); $('.dropMenuPlus').addClass('shownPlus')},
    function() {$('.dropMenu').removeClass('shown'); $('.dropMenuPlus').removeClass('shownPlus')},
)



function sortEight() {

}
function sortSeven() {
    
}

function themeTrigger(theme) {
    var randomImg = Math.floor(Math.random()*6);

    if (document.querySelector('#theme-button').checked == true || theme == 'dark') {
        document.body.background = backgroundDark[randomImg]
        $('.body-block-body').css('background-color', '#708f7c')
        localStorage.setItem(theme, 'dark')
        document.getElementById('theme-button').checked = true;
    }
    else {
        document.body.background = backgroundLight[randomImg]
        $('.body-block-body').css('background-color', '#dbd2e0')
        localStorage.setItem(theme, 'light')
        document.getElementById('theme-button').checked = false;
    };
    // if (theme == 1) {document.getElementById('testExample').checked = true;}
    // else {document.getElementById('testExample').checked = false;}
}