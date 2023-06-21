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