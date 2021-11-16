function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza
}
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives","onions"]);

var p3 = pizzaOven("thin", "white", ["mozzarella", "goat"], ["bacon", "pinapple",]);

var p4 = pizzaOven("deep dish", "alfredo", ["cheddar",], ["meatballs", "peppers",]);

var choices = [];
choices.push(p1, p2, p3, p4)

function randomPizza(){
    return choices[Math.floor(Math.random() * choices.length)]
}
var answer = randomPizza();
console.log(answer);