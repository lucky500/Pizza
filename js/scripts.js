//Business Logic

function Pizza(basePrice, toppingsPrice, size, total) {
  this.basePrice = 8;
  this.toppingsPrice = toppingsPrice;
  this.size = size;
  this.total = 0;
}

Pizza.prototype.totalPrice = function(){
  return this.basePrice + this.toppingsPrice + this.size;
}


// function Toppings(topping1, topping2, topping3, topping4, topping5, topping6, topping7){
//   this.topping1 = topping1;
//   this.topping2 = topping2;
//   this.topping3 = topping3;
//   this.topping4 = topping4;
//   this.topping5 = topping5;
//   this.topping6 = topping6;
//   this.topping7 = topping7;
// }

// var pizzaToppings = new Toppings ('Cheese', 'Pepperoni', 'Bacon', 'Artichoke', 'Tomatoes', 'Spinash', 'Onion');









//Grab values from inputted fiels, such as size and toppings
//Create prototype method to calculate toppings and size
//Output total to client

//User Interface Logic
$(document).ready(function(){
  var inputToppingsTotal = 0;
  console.log('here: ', inputToppingsTotal)
  
  $('form').submit(function(e){
    e.preventDefault();
    //grab toppings input
    $("input:checkbox[name=toppings]:checked").each(function(){
      var $this=$(this).val();
       inputToppingsTotal = inputToppingsTotal + Number($this);
       return inputToppingsTotal;
    });
    //grap size
    var inputSize = Number($("select#size option:selected").val());
    console.log(inputSize);
    var newPrice  = new Pizza(this.basePrice, inputToppingsTotal , inputSize);
    console.log(newPrice);
    console.log(newPrice.totalPrice());
    newPrice.total = newPrice.totalPrice()
    console.log('pizzaTotal', newPrice.total);
    $('.output').text(newPrice.total);
  });
});