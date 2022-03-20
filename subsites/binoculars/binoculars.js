var gallery = [
    '../../resources/binoculars/1.png',
    '../../resources/binoculars/2.png',
    '../../resources/binoculars/3.png'
]

imgOne.apply(gallery);
imgTwo.apply(gallery);
imgThree.apply(gallery);
imgOne();
function imgOne() {$('.gallery').css('background-image', 'url('+ gallery[0] +')');}
function imgTwo() {$('.gallery').css('background-image', 'url('+ gallery[1] +')');}
function imgThree() {$('.gallery').css('background-image', 'url('+ gallery[2] +')');}