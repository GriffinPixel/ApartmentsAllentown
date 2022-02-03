$(window).scroll(function () {
    if ($(this).scrollTop() > 106) {
        $(".index-title-wrapper").show(80);
        $(".griffinpixel-wrapper").show(80);
    }
    else {
        $(".index-title-wrapper").hide(80);
        $(".griffinpixel-wrapper").hide(80);
    }
});