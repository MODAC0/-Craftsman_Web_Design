

$(function(){
    // slide 영역
    function slide () {
        $('.slide_wrapper').animate({top:'-300px'},1000, function(){
            $('.slide_wrapper').append($('.slide_wrapper li').first());
            $('.slide_wrapper').css({top: '0px'})
        })
    }

    setInterval(slide, 3000);

    // tabmenu 영역
    $('.tab_button').click(function(){
        var i = $(this).index();
        $('.tab_button').removeClass('act_tab');
        $(this).addClass('act_tab');
        $('.tab_menu>ul').removeClass('on');
        $('.tab_menu>ul').eq(i).addClass('on');     
    })
   // menu 영역
   $('.cat').mouseenter(function(){ 
    $('.sub').stop().slideDown();
   })

   $('.cat').mouseleave(function(){
    $('.sub').stop().slideUp();
   })

    // popup 영역   
    $('.item').click(function(){
       $('.popup').show();
       return false;
    })

    $('.popup_close_button').click(function(){
        $('.popup').hide();
    })
})