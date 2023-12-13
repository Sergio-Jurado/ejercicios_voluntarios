
/**
 * Función utilizada para sacar cards en el apartado de order foods
 * @param {InnerHTML} element 
 * @param {card} card
 */

let total = 0;
export function renderCardOrder(element, card) {
    let divFood = "";
    divFood = `
        <div class="card" id="idorC-${card.id}">
            <img src="${card.strCategoryThumb}" class="card-img-top" alt="Imagen de comida"/>
            <h5 class="card-title">${card.strCategory}</h5>
            <p class="card-price">Precio: ${card.price}</p>
            <input type="button" value="Quitar" id="idComida">
        </div>`;
    total += card.price;
    element.innerHTML += divFood;
    document.getElementById("total").innerHTML = "Total: $" + total;
}