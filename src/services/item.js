// casos de uso dos itens

// -> criar item com subtotal correto
async function createItem(name, price, quantity) {
    // lógica para criar item
    // console.log('Criando item');
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    };
};

export default createItem;
