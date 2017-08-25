//Business Logic
var Pizza = {
  basePrice: 12
}

function Toppings(topping1, topping2, topping3, topping4, topping5, topping6, topping7){
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.topping4 = topping4;
  this.topping5 = topping5;
  this.topping6 = topping6;
  this.topping7 = topping7;
}

var pizzaToppings = new Toppings ('Cheese', 'Pepperoni', 'Bacon', 'Artichoke', 'Tomatoes', 'Spinash', 'Onion');

console.log(pizzaToppings);

var Size = {
  small: "Small",
  medium: "Medium",
  large: "Large"
}

console.log(Size.large);

//Grab values from inputted fiels, such as size and toppings
//Create prototype method to calculate toppings and size
//Output total to client

//User Interface Logic
$(document).ready(function(){
  
});