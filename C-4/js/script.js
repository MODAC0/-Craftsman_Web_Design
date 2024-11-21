$(function(){
    console.log('start');

    // menu
    $(".cat").mouseenter(function(){
        $('.sub_menu').removeClass("sub_menu_on");
        $(this).children(".sub_menu").addClass("sub_menu_on");
    })

    $('.cat').mouseleave(function(){
        $('.sub_menu').removeClass("sub_menu_on");
    })

    // popup

    // side


})