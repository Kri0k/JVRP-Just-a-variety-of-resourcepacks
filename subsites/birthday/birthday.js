var gallery = [
    '../../resources/bday/1.png',
    '../../resources/bday/2.png',
    '../../resources/bday/3.png',
    '../../resources/bday/4.png',
    '../../resources/bday/5.png'
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