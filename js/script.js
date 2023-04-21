$(document).ready(function(){

    // header - 스크롤효과
    $(window).scroll(function(){
        var sTop = $(this).scrollTop();
        var mTop = $("main").offset().top;
        if (sTop>mTop) {
            $("header").addClass("header2");
            $(".logo img").attr("src","img/logo2.png");
        } else {
            $("header").removeClass("header2");
            $(".logo img").attr("src","img/logo.png");
        };
    });

    // FAQ - 아코디언
    $("#section5 li").click(function(){
        $(this).children(".answer").slideToggle();    
        $("#section5 li").not(this).children(".answer").slideUp();    // .answer 
    });

    $(window).scroll(function() {
		if ($(window).scrollTop()>=3000) $('body').addClass('ai_mouse-leaves');
		else $('body').removeClass('ai_mouse-leaves');
	});
    $(window).scroll(function() {
		if ($(window).scrollTop()>=6500) $('body').addClass('flowers-leaves');
		else $('body').removeClass('flowers-leaves');
	});
});
