var gallery = [
    '../../resources/squid.png'
]

imgOne.apply(gallery);
imgOne();
function imgOne() {$('.gallery').css('background-image', 'url('+ gallery[0] +')');}