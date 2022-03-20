var gallery = [
    '../../resources/lighter/1.png',
    '../../resources/lighter/2.png',
    '../../resources/lighter/3.png'
]

imgOne.apply(gallery);
imgTwo.apply(gallery);
imgThree.apply(gallery);
imgOne();
function imgOne() {$('.gallery').css('background-image', 'url('+ gallery[0] +')');}
function imgTwo() {$('.gallery').css('background-image', 'url('+ gallery[1] +')');}
function imgThree() {$('.gallery').css('background-image', 'url('+ gallery[2] +')');}