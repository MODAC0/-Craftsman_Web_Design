$(() => {

     //탭메뉴
      $(".tabButton").click(function(){
            var i = $(this).index();
            $(".tabButton").removeClass('on');
            $(this).addClass('on');
        $(".table").removeClass("active");
        $(".table").eq(i).addClass("active");          
    })

    //메뉴
    $("#header > nav > ul > li").mouseenter(()=>{
       $(".subMenu").stop().slideDown();
    })
    $("#header > nav > ul > li").mouseleave(()=>{
        $(".subMenu").stop().slideUp();
     })
     //슬라이드
     let index = 0;
     $("#slideWrapper").append($(".slider").first().clone(true));

     setInterval(() => {
        index++;
        $("#slideWrapper").animate({marginLeft: `${-100 * index}%`}, 600);
        if (index === 3) {
            setTimeout(() => {
                $("#slideWrapper").animate({marginLeft: 0}, 0);
                index = 0;
            }, 600);
        }
     },3000)

})