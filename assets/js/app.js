const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


var mobileMenu = function() {
    var elementMobileMenu = $('.mobile-menu');
    if(elementMobileMenu) {
        elementMobileMenu.onclick = function() {
            if($('.nav-bar.hidend')) {
                $('.nav-bar').classList.remove('hidend');
                $('.nav-bar ul').style.animation = "top-down 0.3s forwards";
                $('.container').style.animation = "top-down2 0.3s forwards";

            }else {
                $('.nav-bar').classList.add('hidend');
                $('.nav-bar ul').style.animation = "down-top 0.3s forwards";
                $('.container').style.animation = "down-top2 0.3s forwards";
            }
        }
    }
}
var takeVideo = function() {
    var playIcon = $('.play-icon');
    if(playIcon) {
        playIcon.onclick = function() {
            $('.section-video').classList.remove('close');
        }
    }
    var colseVideo = $('.close-video');
    if(colseVideo) {
        colseVideo.onclick = function() {
            $('.section-video').classList.add('close');
        }
    }
}
takeVideo();
mobileMenu();