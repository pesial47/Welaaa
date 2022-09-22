$(".accordion_header").click(function(){
    $(".accordion_anser").stop().slideUp();
    $(this).next().stop().slideDown();
});


//fqa
$(".ques").click(function () {
    $(".ans").stop().slideUp();
    $(this).next().stop().slideDown();
    $(".ques").removeClass("on");
    $(this).addClass("on");
});