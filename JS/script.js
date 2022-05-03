$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y < 600) {
    $(".div3, .div4, .div5").fadeIn();
    } else {
        $(".div3, .div4, .div5").fadeOut();
    }
});