$(document).ready(function(){
    function preLoader (){
        $(".preload-container").show()
        $(".hero-img").hide()
        $(".preload-container").fadeOut(00) 
        $(".hero-img").fadeIn(00)
    }
    preLoader()

    $(".fa-bars").click(function(){
        $(".bg-img").addClass("fade-bg")
        $(".hero-section").addClass("hero-size")
        $(this).hide()
        $(".times").show()
        $(".nav-menu").show()
        if($(window).width() <= 772){
            $(".socials").hide() 
            $(".logo").hide()
            $(".hero-text").hide()
        }else{
            $(".socials").show()
            $(".logo").show()
        }
        $(".logo").hide()
        $(".socials").hide()
        $(".bg-img").animate({marginLeft: "50%"})
        $("ul").prepend("<p class='nav-text'> Welcome to Moz Pizza Place </p>")// bug is here//
    })
    $(".times").click(function(){
        $(".times").hide()
        $(".bg-img").removeClass("fade-bg")
        $(".fa-bars").show()
        $(".nav-menu").hide()
        $(".bg-img").animate({marginLeft: "0"})
        if($(window).width() <= 772){
            $(".socials").hide() 
            $(".logo").hide()
            $(".hero-text").show()
        } else{
            $(".socials").show()
            $(".logo").show()
            $(".hero-text").hide()
        }
        
    })
    

})