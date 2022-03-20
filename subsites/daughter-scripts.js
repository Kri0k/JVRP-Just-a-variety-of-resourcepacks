var backgroundLight = [
    '../../resources/background/light/beacon.png',
    '../../resources/background/light/house.png',
    '../../resources/background/light/hotel.png',
    '../../resources/background/light/pyramid.png',
    '../../resources/background/light/truck.png',
    '../../resources/background/light/statue.png'
]
var backgroundDark = [
    '../../resources/background/dark/beacon.png',
    '../../resources/background/dark/house.png',
    '../../resources/background/dark/lake.png',
    '../../resources/background/dark/pyramid.png',
    '../../resources/background/dark/truck.png',
    '../../resources/background/dark/window.png'
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
        $('.footer-download').addClass('light-theme-properties');
        $('.footer-download').removeClass('dark-theme-properties');
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
        $('.footer-download').removeClass('light-theme-properties');
        $('.footer-download').addClass('dark-theme-properties');
    };
}