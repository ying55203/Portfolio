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
        $(".close").click(function () {
            $(".intro_t").hide(100);
            $(".t_mask").hide(100);
        });