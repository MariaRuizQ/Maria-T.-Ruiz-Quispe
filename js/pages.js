$(document).ready(function(){
    $(".begin").on("click",function(){
        $(".sec-A").addClass("showing");
        $(".head").hide();
    });
    $(".down").on("click",function(){
        $(".head").addClass("head-hide");
    });
    $(".home").on("click",function(){
        $(".side").removeClass("showing");
    });
    $(".code-btn").on("click",function(){
        $(".sec-B").addClass("showing");
    });
    $(".back-btn").on("click",function(){
        $(".sec-B").removeClass("showing");
    });
    $(".code-2-btn").on("click",function(){
        $(".sec-C").addClass("showing");
    });
    $(".back-2-btn").on("click",function(){
        $(".sec-C").removeClass("showing");
    });
});
