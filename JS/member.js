// top按鈕
$(function(){
    $('body').append('<a href="#" id="fixedTop"><img src="./image/icon/upbtn.svg" alt=""></a>');
    //建立一個fixedTop變數
    let fixedTop = $('#fixedTop');
    //當top方塊被左鍵點一下時
    fixedTop.on('click',function(){
        //用半秒鐘的時間捲動畫面到最上面
        $('html,body').animate({scrollTop:'0'},500);
    });
    //載入(網頁開啟時)、捲動、調整視窗大小時
    $(window).on('load scroll resize',function(){
        //預設捲動點的高度超過1000時，出現Top方塊
        let showTop = 1000;
        //得到目前捲動的值
        let curScrollTop=$(window).scrollTop();
        //檢查是否超過預測高度，如果有，顯示Top方塊
        if(curScrollTop>showTop){
            fixedTop.fadeIn('fast');
        }else{
            //如果沒有，隱藏TOP方塊
            fixedTop.fadeOut('fast');
        }
    });
    
});
// 計數器
// 啟動
$('.counter').countUp();

// 會員圖片輪播
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
    if($(this).scrollTop() > $('#banner').offset().top + 200){
      $('.yellowBlock').stop().fadeTo('normal',1);
    }else{
      $('.yellowBlock').stop().fadeOut('fast');
    }
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > $('#count').offset().top + 200){
      $('.orangeBlock').stop().fadeTo('normal',1);
    }else{
      $('.orangeBlock').stop().fadeOut('fast');
    }
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > ($('#banner').offset().top)){
      $('.pinkBlock').stop().fadeTo('normal',1);
    }else{
      $('.pinkBlock').stop().fadeOut('fast');
    }
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > ($('#experience').offset().top)){
      $('.yellowBlock2').stop().fadeTo('normal',1);
    }else{
      $('.yellowBlock2').stop().fadeOut('fast');
    }
  });