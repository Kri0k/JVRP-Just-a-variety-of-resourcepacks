var gallery = [
    '../../resources/crossbow/1.png',
    '../../resources/crossbow/2.png',
    '../../resources/crossbow/3.png',
    '../../resources/crossbow/4.png',
    '../../resources/crossbow/5.png'
]

imgOne.apply(gallery);
imgTwo.apply(gallery);
imgThree.apply(gallery);
imgFour.apply(gallery);
imgFive.apply(gallery);
imgOne();
function imgOne() {$('.gallery').css('background-image', 'url('+ gallery[0] +')');}
function imgTwo() {$('.gallery').css('background-image', 'url('+ gallery[1] +')');}
function imgThree() {$('.gallery').css('background-image', 'url('+ gallery[2] +')');}
function imgFour() {$('.gallery').css('background-image', 'url('+ gallery[3] +')');}
function imgFive() {$('.gallery').css('background-image', 'url('+ gallery[4] +')');}