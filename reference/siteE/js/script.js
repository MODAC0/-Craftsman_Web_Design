$(()=>{
    $("#nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    })
    $("#nav > ul > li").mouseleave(function(){
        $(this).find(".submenu").stop().slideUp();
    })

    $("#slider > ul").append($(".slider").first().clone(true));
    let index = 0;

    setInterval(() => {
        index++;
        $("#slider > ul").animate({marginLeft:`${-100*index}%`},600)
        if (index === 3) {
            setTimeout(() => {
                $("#slider > ul").animate({marginLeft:0},0) 
                index = 0;
            }, 0);
        }
    }, 3000)
})

    