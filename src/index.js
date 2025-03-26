import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishlist = [];
console.log(`\n 🎁 Welcome to the your Shopee Cart! 🎁`);

const item1 = await createItem("Hotwheels ferrari", 20.99, 2);
const item2 = await createItem("Barbie", 35.99, 3);
const item3 = await createItem("Lego", 50.99, 1);
const item4 = await createItem("Playmobil", 10.99, 4);

await cartService.addItemToCart(myCart, item1);
await cartService.addItemToCart(myCart, item2);
await cartService.addItemToCart(myWishlist, item3);
await cartService.addItemToCart(myCart, item4);


await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item2);

//await cartService.removeItemFromCart(myCart, item2.name);
//await cartService.removeItemFromCart(myCart, item2.name);
await cartService.listItemsFromCart(myCart);

await cartService.calculateTotalCart(myCart);

//await cartService.removeQuantityFromItem(myCart, 2);

//await cartService.listItemsFromCart(myCart);

//await cartService.calculateTotalCart(myCart);


//await cartService.listItemsFromCart(myWishlist); 
