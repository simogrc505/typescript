"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var food_1 = require("./classes/food");
var cart_1 = require("./classes/cart");
var food1 = new food_1.Food('1', 'formaggio', 18, 3, "latticini");
var food2 = new food_1.Food('2', 'formaggio', 18, 3, "carne");
var food3 = new food_1.Food('3', 'formaggio di capra', 18, 1, "latticini");
var cart = new cart_1.Cart([food1, food2, food3]);
//console.log(cart)
console.log(cart.sendData([1, 2, 3, 18]).then(function (c) { return console.log(c); }));
// console.log(cart.emptyCart())
// console.log(cart.getTotalPrice())
// console.log(cart.addProduct(food3))
// console.log(cart.getTotalPrice('latticini'))
// console.log(cart.deleteProduct('2'))
// console.log(cart.updateProduct('1', {}))
//# sourceMappingURL=index.js.map