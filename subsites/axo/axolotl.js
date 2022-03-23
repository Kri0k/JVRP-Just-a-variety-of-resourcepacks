var gallery = [
    '../../resources/axolotle/1.png',
    '../../resources/axolotle/2.png'
]

imgOne.apply(gallery);
imgTwo.apply(gallery);
imgOne();
function imgOne() {$('.gallery').css('background-image', 'url('+ gallery[0] +')');}
function imgTwo() {$('.gallery').css('background-image', 'url('+ gallery[1] +')');}