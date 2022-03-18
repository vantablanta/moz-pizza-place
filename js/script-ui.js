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
        $(".hero-section").addClass("hero-size")
        $(this).hide()
        $(".times").show()
        $(".nav-menu").show()
        $(".logo").hide()
        $(".socials").hide()
        $(".bg-img").animate({marginLeft: "50%"})
        $("ul").prepend("<p class='nav-text'> Welcome to Moz Pizza Place </p>").stop()

    })
    $(".times").click(function(){
        $(".times").hide()
        $(".bg-img").removeClass("fade-bg")
        $(".fa-bars").show()
        $(".nav-menu").hide()
        $(".bg-img").animate({marginLeft: "0"})
        $(".logo").show()
        if($(window).width() <= 772){
            $(".socials").hide() 
        } else{
            $(".socials").show()
        }
        
    })
    



})