// RWD教練滑動頁面
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
// section faq dropdown FAQ DROPDOWN
$(document).ready(function () {
    $('.widget__link').click(function () {
        $('.widget__link').not(this).children('.fa-down').removeClass('active');
        $(this).children('.fa-down').toggleClass("active");

        if ($(this).parent().is('.fa_down')) {
            $(this).closest('.widget__list').find('.widget__drop').slideUp();
            $(this).closest('.widget__list').removeClass('fa_down');
        } else {
            $('.widget__drop').slideUp();
            $('.widget__list').removeClass('fa_down');
            $(this).closest('.widget__list').find('.widget__drop').slideDown();
            $(this).closest('.widget__list').addClass('fa_down');
        }
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
          $('.orangeBlock').stop().fadeTo('normal',1);
        }else{
          $('.yellowBlock').stop().fadeOut('fast');
          $('.orangeBlock').stop().fadeOut('fast');
        }
      });
      $(window).scroll(function(){
        if($(this).scrollTop() > ($('#banner').offset().top + 500)){
          $('.orangeBlock').stop().fadeTo('normal',1);
        }else{
          $('.orangeBlock').stop().fadeOut('fast');
        }
      });
});
        // 教練點開頁面顯示

        $("#teach_1").click(function () {
            $("#teacher_1").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#teach_2").click(function () {
            $("#teacher_2").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#teach_3").click(function () {
            $("#teacher_3").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#teach_4").click(function () {
            $("#teacher_4").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#teach_5").click(function () {
            $("#teacher_5").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#teach_6").click(function () {
            $("#teacher_6").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#teach_7").click(function () {
            $("#teacher_7").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#teach_8").click(function () {
            $("#teacher_8").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#teach_9").click(function () {
            $("#teacher_9").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#teach_10").click(function () {
            $("#teacher_10").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#teach_11").click(function () {
            $("#teacher_11").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#teach_12").click(function () {
            $("#teacher_12").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        // RWD-768頁面
        $("#rw_teach_1").click(function () {
            $("#teacher_1").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#rw_teach_2").click(function () {
            $("#teacher_2").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#rw_teach_3").click(function () {
            $("#teacher_3").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#rw_teach_4").click(function () {
            $("#teacher_4").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#rw_teach_5").click(function () {
            $("#teacher_5").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#rw_teach_6").click(function () {
            $("#teacher_6").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#rw_teach_7").click(function () {
            $("#teacher_7").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#rw_teach_8").click(function () {
            $("#teacher_8").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#rw_teach_9").click(function () {
            $("#teacher_9").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#rw_teach_10").click(function () {
            $("#teacher_10").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#rw_teach_11").click(function () {
            $("#teacher_11").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        $("#rw_teach_12").click(function () {
            $("#teacher_12").show("fade",500);
            $(".t_mask").show("fade",500);
        });
        // 按x後回到原始頁面
        $(".close").click(function () {
            $(".intro_t").hide(100);
            $(".t_mask").hide(100);
        });