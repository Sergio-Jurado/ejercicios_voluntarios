/**
 * Función para guardar las ordenes que se han realizado anteriormente
 * @param {pedido} pedido
 */
export function saveOrder(url, pedido) {
    let total = 0;
    pedido.map(food => {
        total = total + food.price;
    });

    pedido.push({ "Total": total });

    fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pedido)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Fallo al realizar el pedido");
            }
        })
        .catch(error => { reject(error); });
}

