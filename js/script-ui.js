/*preLoader()
function preLoader (){
    $("body").css("overflow", "hidden")
    $(".preload-container").fadeOut(4000) 
    $(".hero-container").fadeIn(6000)
    $(".menu").show()
    $(".reviews").show()
    $(".footer").show()
    $("body").css("overflow-y", "scroll")
    
}*/
$(document).ready(function () {
    $("#meat").on('click', function () {
        // $(".modal").show()
    })

    $("#meat").mouseover(function () {
        $(this).addClass("menu-img")


    })
    $("#meat").mouseout(function () {
        $(this).removeClass("menu-img")

    })
    $("#hawaian").mouseover(function () {
        $(this).addClass("menu-img")

    })
    $("#hawaian").mouseout(function () {
        $(this).removeClass("menu-img")

    })
    $("#cheese").mouseover(function () {
        $(this).addClass("menu-img")

    })
    $("#cheese").mouseout(function () {
        $(this).removeClass("menu-img")

    })
    $("#pepperoni").mouseover(function () {
        $(".menu-text").show()
        $(this).addClass("menu-img")

    })
    $("#pepperoni").mouseout(function () {
        $(".menu-text").hide()
        $(this).removeClass("menu-img")

    })
    $("#bbqChicken").mouseover(function () {
        $(".menu-text").show()
        $(this).addClass("menu-img")

    })
    $("#bbqChicken").mouseout(function () {
        $(".menu-text").hide()
        $(this).removeClass("menu-img")

    })
    $("#veggie").mouseover(function () {
        $(".menu-text").show()
        $(this).addClass("menu-img")

    })
    $("#veggie").mouseout(function () {
        $(".menu-text").hide()
        $(this).removeClass("menu-img")

    })


    $(".orderBtn1").on('click', function () {
        $(".modal-title").text('Meat Pizza')
    })
    $(".orderBtn2").on('click', function () {
        $(".modal-title").text('Hawaian Pizza')
    })
    $(".orderBtn3").on('click', function () {
        $(".modal-title").text('Cheese Pizza')
    })
    $(".orderBtn4").on('click', function () {
        $(".modal-title").text('Veggie Pizza')
    })
    $(".orderBtn5").on('click', function () {
        $(".modal-title").text('BBQ Chicken Pizza')
    })
    $(".orderBtn6").on('click', function () {
        $(".modal-title").text('Pepperoni Pizza')
    })

    $("#modalSubmit").click(function () {
        formSubmit(e => e.preventDefault())

    })
    $('#formCancelBtn').on('click', function () {
        $('form')[0].reset()
    })
    $("#deliveryCanceled").on('click', function () {
        //delivery canceled

    })


    function formSubmit() {
        
        let crust = $('input[name=crust]:checked', 'form').val()
        let toppings = new Array
        $('input[name=toppings]:checked', 'form').map(function () {
            toppings.push($(this).val())
        })
        let size = $('input[name=size]:checked', 'form').val()
        let delivery = $('input[name=delivery]:checked', 'form').val()
        let quantity = $('#pizzaQuantity', 'form').val()
        let pizzaPicked = new Pizza(crust, toppings, size, delivery, quantity)
        

        let cost = pizzaPicked.calculatePrice()
        let costBd = cost - 200

        let crustName
        let sizeName
        let toppingsNames = new Array

        switch (crust) {
            case "300":
                crustName = "Crispy Crust";
                break;
            case "400":
                crustName = "Stuffed Crust";
                break;
            case "500":
                crustName = "Gluten Free Crust";
                break;

        }
        switch (size) {
            case "300":
                sizeName = "Small";
                break;
            case "600":
                sizeName = "Medium";
                break;
            case "900":
                sizeName = "Large";
                break;
        }
        toppings.map(function (i) {
            if (i == $("#extraCheese").val()) {
                toppingsNames.push("Extra Cheese")
            }
            else if (i == $("#pepperoni").val()) {
                toppingsNames.push("Pepperoni")
            }
            else if (i == $("#bacon").val()) {
                toppingsNames.push("Bacon")
            } else if (i == $("#mushroom").val()) {
                toppingsNames.push("Mushroom")
            }
        })
        if (crustName == undefined || sizeName == undefined || toppingsNames == [] || delivery == undefined) {
            //cancel delivery
        } else {
            if (pizzaPicked.delivery == "true") {
                $("#deliveryBtn").click() //ask to proceed with delivery or not
                $("#deliveryProceed").on('click', function () {
                    $("#deliveryInfo").click()
                    $("#deliveryDetailsFormBtn").on("click", function () {
                        $("#pizzaDeliveryTotalBtn").click()
                        $(".content").html(`
                            <p>Size: ${sizeName}</p>
                            <p>Crust: ${crustName}</p>
                            <p>Toppings: ${toppingsNames} </p>
                            <p>Quantity of Pizza: ${quantity} </p>
                            <p>Total Order Payable: ${costBd}</p>
                            <p>Delivery Location: ${$("#inputAddress").val()}</p>
                            <p>Delivery: Ksh 200 </p>
                            <p>Total: ${cost}</p>`
                        )
                    })

                })
                $("#continueShopping").on('click', function () {
                    $('#pizzaDeliveryTotal').modal('hide');
                    $('form')[0].reset()
                })
                $("#closeOrderComplete").on('click', function () {
                    $('form')[0].reset()
                })
            } else {
                $("#pizzaDeliveryTotalBtn").click()
                $(".content").html(
                    `
                <p>Size: ${sizeName} </p>
                <p>Crust: ${crustName}</p>
                <p>Toppings: ${toppingsNames} </p>
                <p>Quantity of Pizza: ${quantity} </p>
                <p> Total Amount: ${costBd}</p>`
                )
                $("#continueShopping").on('click', function () {
                    $('#pizzaDeliveryTotal').modal('hide');
                    $('form')[0].reset()
                })
                $("#closeOrderComplete").on('click', function () {
                    $('form')[0].reset()
                })
            let totalQuantity 
            totalQuantity += quantity
            console.log(totalQuantity)

            }
        
        }
       
    }


})








