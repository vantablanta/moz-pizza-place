$(document).ready(function(){
    function preLoader (){
        $(".hero-img").hide()
        $(".preload-container").fadeOut(100) //set to 6000
        $(".hero-img").fadeIn(100)
    }
    preLoader()
    $(".fa-bars").click(function(){


        $(".nav-menu").toggle()
        $(".nav-menu").animate({left: '0',
                                right: '50px',
                            
                            
                            }, 2000)

    })
    

    
    
    





})