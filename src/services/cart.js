// quais ações me carrinho pode fazer 

// casos de uso 
// -> adicionar item ao carrinho
// -> remover item do carrinho
// -> limpar carrinho
// -> adicionar quantidade de item
// -> remover quantidade de item
// -> listar itens do carrinho
// -> calcular total do carrinho

async function addItemToCart(userCart, item) {
  // lógica para adicionar item ao carrinho
  userCart.push(item);
  //console.log('Adicionando item ao carrinho:' + item);
}

async function removeItemFromCart(userCart, name) {
  // lógica para remover item do carrinho
  //console.log('Removendo item do carrinho' + item);
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    }
    else {
        console.log('Item não encontrado');
    }
}

async function clearCart(myCart) {
    // lógica para limpar carrinho
    console.log('Limpando carrinho');
    }

async function addQuantityToItem(userCart, item, quantity) {
    // lógica para adicionar quantidade de item
    console.log('Adicionando quantidade ao item' + item);
}

async function removeQuantityFromItem(userCart, index) {
    // lógica para remover quantidade de item
    //console.log('Removendo quantidade do item' + item);
    const deleteIndex = index -1; // transfoma o index do usuário para o index do array
    if (index >= 0 && index <= userCart.length) {    
        userCart.splice(deleteIndex, 1);
    }
    
}

async function listItemsFromCart(userCart) {
    // lógica para listar itens do carrinho
    console.log('\nListando itens do carrinho Shopee');
    userCart.forEach((item, index) => {
        console.log(`${index + 1} - ${item.name} | Quant. ${item.quantity} x R$ ${item.price} - Subtotal = ${item.subtotal()}`);
    });
}

async function calculateTotalCart(userCart) {
    // lógica para calcular total do carrinho
    //return userCart.reduce((total, item) => total + item.subtotal(),0);
    const result = userCart.reduce((total, item) => total + item.subtotal(),0);
    console.log(`\n🛒 Shopee cart total: R$ ${result} \n`);
    
}

export {
    addItemToCart,
    calculateTotalCart,
    removeItemFromCart,
    listItemsFromCart,
    clearCart,
    removeQuantityFromItem
}







