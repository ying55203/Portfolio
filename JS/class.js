$(function () {
    // tabs頁籤功能
    $("#tabs").tabs();
    // top按鈕
    $('body').append('<a href="#" id="fixedTop"><img src="./image/icon/upbtn.svg" alt=""></a>');
    //建立一個fixedTop變數
    let fixedTop = $('#fixedTop');
    //當top方塊被左鍵點一下時
    fixedTop.on('click', function () {
        //用半秒鐘的時間捲動畫面到最上面
        $('html,body').animate({ scrollTop: '0' }, 500);
    });
    //載入(網頁開啟時)、捲動、調整視窗大小時
    $(window).on('load scroll resize', function () {
        //預設捲動點的高度超過1000時，出現Top方塊
        let showTop = 1000;
        //得到目前捲動的值
        let curScrollTop = $(window).scrollTop();
        //檢查是否超過預測高度，如果有，顯示Top方塊
        if (curScrollTop > showTop) {
            fixedTop.fadeIn('fast');
        } else {
            //如果沒有，隱藏TOP方塊
            fixedTop.fadeOut('fast');
        }
    });

    //---漢堡按鈕---
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });
    // 色塊淡入
    $(window).scroll(function(){
        if($(this).scrollTop() > $('#class_container').offset().top + 800){
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
//   點擊分類介紹跳轉滑到下方
    $('.content').click(function () {
        window.scrollTo({
            top: 2200,
            behavior: "smooth"
        });
    });
// 清除所有課程分類
    $("#tabs ul").click(function () {
        $(".group").hide("drop", { direction: "down" }, "fast");
        $(".personal").hide("drop", { direction: "down" }, "fast");
        $(".parentChild").hide("drop", { direction: "down" }, "fast");
        $(".kids").hide("drop", { direction: "down" }, "fast");
    });
    // 團體課分類介紹按鈕
    $(".yoga").click(function () {
        $("#group_yoga").show("blind", 100);
        $("#group_retrain").hide("drop", { direction: "down" }, "fast");
        $("#group_aerobic").hide("drop", { direction: "down" }, "fast");
    });
    $(".aerobic").click(function () {
        $("#group_aerobic").show("blind", 100);
        $("#group_yoga").hide("drop", { direction: "down" }, "fast");
        $("#group_retrain").hide("drop", { direction: "down" }, "fast");
    });
    $(".retrain").click(function () {
        $("#group_retrain").show("blind", 100);
        $("#group_yoga").hide("drop", { direction: "down" }, "fast");
        $("#group_aerobic").hide("drop", { direction: "down" }, "fast");
    });
    
    // 個人課分類介紹按鈕
    $(".free").click(function () {
        $("#personal_freeRetrain").show("blind", 100);
        $("#personal_retrain").hide("drop", { direction: "down" }, "fast");
        $("#personal_pugilism").hide("drop", { direction: "down" }, "fast");
    });
    $(".retrain2").click(function () {
        $("#personal_retrain").show("blind", 100);
        $("#personal_pugilism").hide("drop", { direction: "down" }, "fast");
        $("#personal_freeRetrain").hide("drop", { direction: "down" }, "fast");
    });
    $(".pugilism").click(function () {
        $("#personal_pugilism").show("blind", 100);
        $("#personal_freeRetrain").hide("drop", { direction: "down" }, "fast");
        $("#personal_retrain").hide("drop", { direction: "down" }, "fast");
    });
    
    // 親子課分類介紹按鈕
    $(".yoga2").click(function () {
        $("#parentChild_yoga").show("blind", 100);
        $("#parentChild_dance").hide("drop", { direction: "down" }, "fast");
        $("#parentChild_tabletennis").hide("drop", { direction: "down" }, "fast");
    });
    $(".dance").click(function () {
        $("#parentChild_dance").show("blind", 100);
        $("#parentChild_yoga").hide("drop", { direction: "down" }, "fast");
        $("#parentChild_tabletennis").hide("drop", { direction: "down" }, "fast");
    });
    $(".table").click(function () {
        $("#parentChild_tabletennis").show("blind", 100);
        $("#parentChild_yoga").hide("drop", { direction: "down" }, "fast");
        $("#parentChild_dance").hide("drop", { direction: "down" }, "fast");
    });
    // 兒童課分類介紹按鈕
    $(".gymnastics").click(function () {
        $("#kids_gymnastics").show("blind", 100);
        $("#kids_badminton").hide("drop", { direction: "down" }, "fast");
        $("#kids_yoga").hide("drop", { direction: "down" }, "fast");
    });
    $(".badminton").click(function () {
        $("#kids_badminton").show("blind", 100);
        $("#kids_gymnastics").hide("drop", { direction: "down" }, "fast");
        $("#kids_yoga").hide("drop", { direction: "down" }, "fast");
    });
    $(".yoga3").click(function () {
        $("#kids_yoga").show("blind", 100);
        $("#kids_gymnastics").hide("drop", { direction: "down" }, "fast");
        $("#kids_badminton").hide("drop", { direction: "down" }, "fast");
    });
    // 清除所有課程分類
        $("#tabs ul").click(function () {
            $(".group").hide("drop", { direction: "down" }, "fast");
            $(".personal").hide("drop", { direction: "down" }, "fast");
            $(".parentChild").hide("drop", { direction: "down" }, "fast");
            $(".kids").hide("drop", { direction: "down" }, "fast");
        });
    }); 