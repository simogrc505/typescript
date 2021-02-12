import { Food } from './classes/food'
import { Cart } from './classes/cart'

const food1 = new Food('1','formaggio', 18, 3, "latticini")
const food2 = new Food('2','formaggio', 18, 3, "carne")
const food3 = new Food('3','formaggio di capra', 18, 1, "latticini")
const cart = new Cart([food1, food2, food3])
//console.log(cart)
console.log(cart.sendData([{id:1, quantity: 18},{id: 12, quantity: 18}]).then(c => console.log(c)))
// console.log(cart.emptyCart())
// console.log(cart.getTotalPrice())
// console.log(cart.addProduct(food3))
// console.log(cart.getTotalPrice('latticini'))
// console.log(cart.deleteProduct('2'))
// console.log(cart.updateProduct('1', {}))