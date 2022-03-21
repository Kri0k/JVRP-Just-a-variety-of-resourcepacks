var gallery = [
    '../../resources/hblock/1.png',
    '../../resources/hblock/2.png'
]

imgOne.apply(gallery);
imgTwo.apply(gallery);
imgOne();
function imgOne() {$('.gallery').css('background-image', 'url('+ gallery[0] +')');}
function imgTwo() {$('.gallery').css('background-image', 'url('+ gallery[1] +')');}