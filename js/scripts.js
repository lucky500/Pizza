//Business Logic

var pizzaIngredients  = {
  toppings: [
    {
      imgId: "pepperoniImg",
      inputId: "pepperoniInput"
    },
    {
      imgId: "cheeseImg",
      inputId: "cheeseInput"
    },
    {
      imgId: "blackOlivesImg",
      inputId: "blackOlivesInput"
    },
    {
      imgId: "hamImg",
      inputId: "hamInput"
    },
    {
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
$(document).ready(init);

function init(){
  matchingValues();
};

  var inputToppingsTotal = 0;
  function matchingValues(){
    for (var i=0; i < pizzaIngredients.toppings.length; i++){
  (function(){
      var imgId = pizzaIngredients.toppings[i].imgId;
      var imgDiv = document.getElementById(imgId);

      var inputId = pizzaIngredients.toppings[i].inputId;
      var inputDiv = document.getElementById(inputId);

      $(inputDiv).on('click', function(){
        if (inputDiv.checked){
          console.log('checked');
          $(imgDiv).removeClass('hide');
        } else {
          console.log('not checked');
          $(imgDiv).addClass('hide');
        }
      });
        console.log(pizzaIngredients.toppings[i].name);
  }(i));
    }
  }
  
  $('form').submit(function(e){
    e.preventDefault();
    //grab toppings input
    $("input:checkbox[name=toppings]:checked").each(function(topping){
      var $this=$(this).val();
      console.log('this:', $this);
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