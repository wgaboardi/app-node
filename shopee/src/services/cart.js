// quais acoes meu carrinho pode fazer

//adicionarItemNoCarrinho
async function addItem(userCart, item) {
   userCart.push(item);
}
async function removeItem(userCart, item) {
  //userCart.filter((it) => it.name !== name)
  //return userCart
  //or
   const indexFound = userCart.findIndex((it) => it.name === item.name)
   if (indexFound === -1) {
    console.log("💣 Item não encontrado!")
    return;
   }
   if(userCart[indexFound].quantity>1) {
    userCart[indexFound].quantity -= 1;
    return
   }
   if(userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1)
   }
}

async function displayCart(userCart) {
  //console.table(userCart);
  //or
  console.log("Shopee cart list:")
  userCart.forEach((item, index) => {
    console.log(`${index+1} ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal R$ ${item.subtotal()}`)
  });
}

//calcularTotal
async function calculateTotal(userCart) {
    //let total = 0;
    //for (let item of userCart) {
    //    total += item.subtotal();
    //}
    //return total;
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

export { addItem, removeItem, calculateTotal, displayCart }