//Business Logic

var pizzaIngredients  = {
  toppings: [
    {
      name: "Pepperoni",
      imgId: "pepperoniImg",
      inputId: "pepperoniInput"
    },
    {
      name: "Cheese",
      imgId: "pepperoniImg",
      inputId: "pepperoniInput"
    },
    {
      name: "Tomato",
      imgId: "tomatoImg",
      inputId: "tomatoInput"
    }
  ]
}

function Pizza(basePrice, toppingsPrice, size, total) {
  this.basePrice = 8;
  this.toppingsPrice = toppingsPrice;
  this.size = size;
  this.total = 0;
}

Pizza.prototype.totalPrice = function(){
  return this.basePrice + this.toppingsPrice + this.size;
}


//Grab values from inputted fiels, such as size and toppings
//Create prototype method to calculate toppings and size
//Output total to client

//User Interface Logic
$(document).ready(function(){
  var inputToppingsTotal = 0;
  $('form').submit(function(e){
    e.preventDefault();
    //grab toppings input
    $("input:checkbox[name=toppings]:checked").each(function(topping){
      var $this=$(this).val();
       inputToppingsTotal = inputToppingsTotal + Number($this);
       return inputToppingsTotal;
       console.log(inputToppingsTotal);
    });
    //grab size
    var inputSize = Number($("select#size option:selected").val());
    var newPrice  = new Pizza(this.basePrice, inputToppingsTotal , inputSize);
    //console
    console.log(inputSize);
    console.log(newPrice);
    console.log(newPrice.totalPrice());
    //console
    newPrice.total = newPrice.totalPrice()
    console.log('pizzaTotal', newPrice.total);
    $('.output').text(newPrice.total);
  });
});