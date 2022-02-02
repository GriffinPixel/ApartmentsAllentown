$(window).scroll(function () {
    if ($(this).scrollTop() > 106) {
        $(".index-title-wrapper").show(100);
        $(".griffinpixel-wrapper").show(100);
    }
    else {
        $(".index-title-wrapper").hide(100);
        $(".griffinpixel-wrapper").hide(100);
    }
});