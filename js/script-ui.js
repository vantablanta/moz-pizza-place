$(document).ready(function(){
    function preLoader (){
        $(".preload-container").show()
        $(".hero-img").hide()
        $(".preload-container").fadeOut(00) 
        $(".hero-img").fadeIn(00)
    }
    preLoader()




    $("#meat").on('click', function(){
       // $(".modal").show()
    })

    $("#meat").mouseover(function(){
        $(this).addClass("menu-img")

        
    }) 
    $("#meat").mouseout(function(){
        $(this).removeClass("menu-img")
        
    }) 
    $("#hawaian").mouseover(function(){
        $(this).addClass("menu-img")
        
    })
    $("#hawaian").mouseout(function(){
        $(this).removeClass("menu-img")
        
    })
    $("#cheese").mouseover(function(){
        $(this).addClass("menu-img")
        
    }) 
    $("#cheese").mouseout(function(){
        $(this).removeClass("menu-img")
        
    }) 
    $("#pepperoni").mouseover(function(){
        $(".menu-text").show()
        $(this).addClass("menu-img")
        
    })
    $("#pepperoni").mouseout(function(){
        $(".menu-text").hide()
        $(this).removeClass("menu-img")
        
    }) 
    $("#bbqChicken").mouseover(function(){
        $(".menu-text").show()
        $(this).addClass("menu-img")
        
    })
    $("#bbqChicken").mouseout(function(){
        $(".menu-text").hide()
        $(this).removeClass("menu-img")
        
    })
    $("#veggie").mouseover(function(){
        $(".menu-text").show()
        $(this).addClass("menu-img")
        
    })
    $("#veggie").mouseout(function(){
        $(".menu-text").hide()
        $(this).removeClass("menu-img")
        
    }) 
    

    $(".orderBtn1").on('click', function(){
        $(".modal-title").text('Meat Pizza')
    })
    $(".orderBtn2").on('click', function(){
        $(".modal-title").text('Hawaian Pizza')
    })
    $(".orderBtn3").on('click', function(){
        $(".modal-title").text('Cheese Pizza')
    })
    $(".orderBtn4").on('click', function(){
        $(".modal-title").text('Veggie Pizza')
    })
    $(".orderBtn5").on('click', function(){
        $(".modal-title").text('BBQ Chicken Pizza')
    })
    $(".orderBtn6").on('click', function(){
        $(".modal-title").text('Pepperoni Pizza')
    })
})

   






