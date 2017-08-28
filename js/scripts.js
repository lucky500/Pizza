//Business Logic

var pizzaIngredients  = {
  toppings: [
    {
      imgId: "cheeseImg",
      inputId: "cheeseInput"
    },
    {
      imgId: "pepperoniImg",
      inputId: "pepperoniInput"
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
      imgId: "hamburgerImg",
      inputId: "hamburgerInput"
    },
    {
      imgId: "baconImg",
      inputId: "baconInput"
    }
    ,
    {
      imgId: "onionsImg",
      inputId: "onionsInput"
    },
    {
      imgId: "spinashImg",
      inputId: "spinashInput"
    },
    {
      imgId: "tomatoImg",
      inputId: "tomatoInput"
    },
    {
      imgId: "mushroomsImg",
      inputId: "mushroomsInput"
    },
    {
      imgId: "pineapplesImg",
      inputId: "pineapplesInput"
    }
  ]
}

// class Pizza {

// }


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
  var inputToppingsList = [];
  function matchingValues(){
    for (var i=0; i < pizzaIngredients.toppings.length; i++){
  (function(){
      var imgId = pizzaIngredients.toppings[i].imgId;
      var imgDiv = document.getElementById(imgId);

      var inputId = pizzaIngredients.toppings[i].inputId;
      var inputDiv = document.getElementById(inputId);

      $(inputDiv).on('click', function(){
        if (inputDiv.checked){
          $(imgDiv).removeClass('hide');
        } else {
          $(imgDiv).addClass('hide');
        }
      });
  }(i));
    }
  }
  
  $('form').submit(function(e){
    e.preventDefault();
    //grab toppings input
    $("input:checkbox[name=toppings]:checked").each(function(topping){
      var $this=$(this); 
     inputToppingsList.push($this.next('label').text());
     inputToppingsList.join(', ');
     inputToppingsTotal = inputToppingsTotal + Number($this.val());
     return inputToppingsTotal;
    });

    //grab size
    var inputSize = Number($("select#size option:selected").val());
    var newPrice  = new Pizza(this.basePrice, inputToppingsTotal , inputSize);
    newPrice.total = newPrice.totalPrice()
    $('.output').text(`Your ${inputToppingsList} pizza will be: ${newPrice.total}`);
  });