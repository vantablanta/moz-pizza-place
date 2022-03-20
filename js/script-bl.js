
function Pizza(crust, toppings, size, delivery, quantity){
    this.crust = crust 
    this.toppings = toppings //array
    this.size = size
    this.delivery = delivery // bool
    this.quantity = quantity
}


Pizza.prototype.calculatePrice = function(){
    
    let toppingsCost = this.toppings.reduce(getSum, 0)
    function getSum(count, topping) {
        return count + parseInt(topping);
    }
    let totalCost = toppingsCost + parseInt(this.crust) + parseInt(this.size) + (this.quantity * parseInt(this.size))
    console.log(totalCost)
}