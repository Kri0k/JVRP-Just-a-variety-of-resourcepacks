var gallery = [
    '../../resources/glowcraft/1.png',
    '../../resources/glowcraft/2.png',
    '../../resources/glowcraft/3.png',
    '../../resources/glowcraft/4.png'
]

imgOne.apply(gallery);
imgTwo.apply(gallery);
imgThree.apply(gallery);
imgOne();
function imgOne() {$('.gallery').css('background-image', 'url('+ gallery[0] +')');}
function imgTwo() {$('.gallery').css('background-image', 'url('+ gallery[1] +')');}
function imgThree() {$('.gallery').css('background-image', 'url('+ gallery[2] +')');}
function imgFour() {$('.gallery').css('background-image', 'url('+ gallery[3] +')');}