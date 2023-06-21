$(function(){
    // Top按鈕，按鈕淡出淡入
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
            fixedTop.stop().fadeTo('',1);
        }else{
            //如果沒有，隱藏TOP方塊
            fixedTop.stop().fadeOut('fast');
           
        }
    });
    //---漢堡按鈕---
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });
    
// 側選單淡出淡入
    $(window).scroll(function () {

        if ($(this).scrollTop() > 500) {
            $('.sticky_sidebar').stop().fadeTo('fast',1);
        } else {
            $('.sticky_sidebar').stop().fadeOut('fast');
        }

    });
    // 上方選單滑動至指定區塊位置
    $('.feature_menu ul li a').click(function () {
        var btn = $(this).attr('href');
        var pos = $(btn).offset();
        $('html,body').animate({ scrollTop: pos.top }, 1500);

    });

    // 點選側選單滑動至指定區塊位置
    $('.side_menu a').click(function () {

        var btn = $(this).attr('href');
        var pos = $(btn).offset();
        $('html,body').animate({ scrollTop: pos.top }, 1000);

    });
     // active點選的側選單選項
    $('.side_menu li').click(function(){
        if(!($(this).hasClass('active'))){
            //清除所有按鈕上的active類別
            $('.side_menu li').removeClass('active');
            //將目前的按鈕加上active類別
            $(this).addClass('active');
        }
    });
    // active點選的側選單選項文字顏色
    $('.side_menu a').click(function(){
        if(!($(this).hasClass('active'))){
            //清除所有按鈕a上的active類別
            $('.side_menu a').removeClass('active');
            //將目前的按鈕a加上active類別
            $(this).addClass('active');
        }
    });
});
    // lightbox
    lightbox.option({
        'wrapAround': true
    });
