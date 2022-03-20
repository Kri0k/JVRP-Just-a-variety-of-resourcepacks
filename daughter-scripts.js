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
var gallery = [
    './resources/axolotle/1.png',
    './resources/axolotle/2.png'
]
themeTrigger.apply(backgroundDark, backgroundLight);

var themes = localStorage.getItem('theme')
if (themes == 'light') {localStorage.setItem('theme', 'dark'); themeChange();};
if (themes == 'dark') {localStorage.setItem('theme', 'light'); themeChange();};
if (themes != 'light' && themes != 'dark') {localStorage.setItem('theme', 'light'); themeChange();};


function themeTrigger() {
    var themes = localStorage.getItem('theme')
    if (themes == 'light') {localStorage.setItem('theme', 'dark'); themeChange();};
    if (themes == 'dark') {localStorage.setItem('theme', 'light'); themeChange();};
}

function themeChange() {
    var randomImg = Math.floor(Math.random()*6);
    var themes = localStorage.getItem('theme');
    if (themes == 'dark') {
        console.log(themes);
        document.body.background = backgroundDark[randomImg];
        $('.aside-sun').css('display', 'block');
        $('.aside-moon').css('display', 'none');
        $('.aside-back').removeClass('light-theme-properties');
        $('.aside-back').addClass('dark-theme-properties');
        $('.body').removeClass('light-theme-properties');
        $('.body').addClass('dark-theme-properties');
        $('.body-gallery').css('background-color', '#708f7c');
    }
    else {
        console.log(themes);
        document.body.background = backgroundLight[randomImg];
        $('.aside-moon').css('display', 'block');
        $('.aside-sun').css('display', 'none');
        $('.aside-back').addClass('light-theme-properties');
        $('.aside-back').removeClass('dark-theme-properties');
        $('.body').addClass('light-theme-properties');
        $('.body').removeClass('dark-theme-properties');
        $('.body-gallery').css('background-color', '#dbd2e0');
    };
}
imgOne.apply(gallery);
imgTwo.apply(gallery);
imgOne();
function imgOne() {$('.gallery').css('background-image', 'url('+ gallery[0] +')')}
function imgTwo() {$('.gallery').css('background-image', 'url('+ gallery[1] +')')}