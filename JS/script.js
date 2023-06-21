// $(function(){
//     // active點選的選項
//     $('.menu a').click(function(){
//         if(!($(this).hasClass('active'))){
//             //清除所有按鈕上的active類別
//             $('.menu a').removeClass('active');
//             //將目前的按鈕加上active類別
//             $(this).addClass('.menu a');
//         }
//     });
// });
//---漢堡按鈕---
$('.hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('.navigation').toggleClass('show');
});