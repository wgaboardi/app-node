import createItem from './services/item.js'
import * as cartService from './services/cart.js'
const cart = []
const myWishList = []

console.log("Welcome to the your Shopee Cart\n")
const item1 = await createItem("hotwheels ferrari", 20.99, 1)
const item2 = await createItem("hotwheels lamborghini", 39.99, 3)
//console.log(item1.subtotal())
//console.log(item2.subtotal())
await cartService.addItem(cart, item1)
await cartService.addItem(cart, item2)
await cartService.removeItem(cart, item2)
await cartService.removeItem(cart, item2)
//await cartService.addItem(myWishList, item2)
await cartService.displayCart(cart)
console.log("🎁 Shopee Cart Total is:")

console.log(await cartService.calculateTotal(cart))


