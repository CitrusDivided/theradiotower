$(document).ready(function(){
    $("#targetMe").hover(function(){
        $(this).filter(':not(:animated)').animate({
            "top":"400",
        },'slow')

    });
    
});