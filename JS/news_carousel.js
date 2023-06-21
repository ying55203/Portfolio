// 圖片輪播
var options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
    }
};

var carousel = document.querySelector('[data-carousel]');
var slides = document.getElementsByClassName('carousel-cell');
var flkty = new Flickity(carousel, options);

flkty.on('scroll', function () {
    flkty.slides.forEach(function (slide, i) {
        var image = slides[i];
        var x = (slide.target + flkty.x) * -1/3;
        image.style.backgroundPosition = x + 'px';
    });
});
//---漢堡按鈕---
$('.hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('.navigation').toggleClass('show');
});
// 色塊淡入
  $(window).scroll(function(){
    if($(this).scrollTop() > $('#banner').offset().top){
      $('.yellowBlock').stop().fadeTo('normal',1);
    }else{
      $('.yellowBlock').stop().fadeOut('fast');
    }
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > $('#news').offset().top){
      $('.orangeBlock').stop().fadeTo('normal',1);
    }else{
      $('.orangeBlock').stop().fadeOut('fast');
    }
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > ($('#button').offset().top - 1200)){
      $('.pinkBlock').stop().fadeTo('normal',1);
    }else{
      $('.pinkBlock').stop().fadeOut('fast');
    }
  });