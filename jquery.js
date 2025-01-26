document.addEventListener("DOMContentLoaded", function () {
    $("#nav-toggle").on("click", function (event) {
        event.preventDefault(); 

        $(".nav-elements, .btns").toggleClass("active"); 
    });
});

$(function () { 
    $(".header__image__card").css({
        "opacity": "0",
        "transform": "translateY(50px)" 
    });

    
    $(".header__image__card-1").css("transform", "translateX(-100px)").animate({ opacity: "1", transform: "translateX(0)" }, 3000);
    $(".header__image__card-2").css("transform", "translateY(-100px)").animate({ opacity: "1", transform: "translateY(0)" }, 3000);
    $(".header__image__card-3").css("transform", "translateX(100px)").animate({ opacity: "1", transform: "translateX(0)" }, 3000);
    $(".header__image__card-4").css("transform", "translateY(100px)").animate({ opacity: "1", transform: "translateY(0)" }, 3000);
});
