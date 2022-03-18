$(document).ready(function(){
    function preLoader (){
        $(".preload-container").show()
        $(".hero-img").hide()
        $(".preload-container").fadeOut(100) 
        $(".hero-img").fadeIn(100)
    }
    preLoader()

    $(".fa-bars").click(function(){
        $(".bg-img").addClass("fade-bg")
        $(this).hide()
        $(".times").show()
        $(".nav-menu").addClass("nav-menu-show")
        $(".logo").hide()
        $(".socials").hide()
        $(".bg-img").animate({marginLeft: "50%"})

    })
    $(".times").click(function(){
        $(".times").hide()
        $(".bg-img").removeClass("fade-bg")
        $(".fa-bars").show()
        $(".nav-menu").removeClass("nav-menu-show")
        $(".logo").show()
        $(".socials").show()
        $(".bg-img").animate({marginLeft: "0"})
    })



})