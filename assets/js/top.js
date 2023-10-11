$(function () {
    //メニューボタン 参考⇒https://global-web-design.com/1093/
    $('.open-btn').click(function(){
        $('.open-btn, .close-btn').toggleClass('active');
    });
    //スライダー⇒ https://kenwheeler.github.io/slick/
    $('#slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false
    });
});