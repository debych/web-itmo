$(document).ready(function(){
    $("p").css("fontSize", "40px");
    $("a").css("color", "red");
    $("p").css("color", "#fabc12");
    $("p").css("fontWeight", "bold");
    $("a").prepend("↗");
    $("a").attr("target",'_blank');

    $("#b_hide").click(function(){
        $("#div1").hide(1000);
    });

    $("#b_animate").click(function () {
        $("#div2").animate({'margin-left': '20px'})
    })

    $("#b_fade").click(function () {
        $("#div3").fadeIn(1000)
    })

    $("#b_slide").click(function () {
        $("#div4").slideDown(1000)
    })

    $("#b_show").click(function () {
        $("#div5").slideUp(1000)
    })

    $('#elem:hidden');
});




