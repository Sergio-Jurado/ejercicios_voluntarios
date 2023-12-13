import "./style.css";
let divFood = "";
/**
 * Función utilizada para renderizar las cartas que aparecen dentro de todas las comidas que hay disponibles
 * @param {InnerHTML} element 
 * @param {<Object>card} cards 
 */
export function renderCardFoods(element, cards) {
    element.innerHTML = "";
    cards.forEach((card) => {
        divFood =
            `<div class="col-md-4">
                <div class="card divTodas-${card.id}">
                    <img src="${card.strCategoryThumb}" class="card-img-top" alt="Imagen de comida"/>
                    <div class="card-body" id="divC-${card.id}">
                        <h5 class="card-title">${card.strCategory}</h5>
                        <p class="card-text" id="precioP">Precio: $${card.price}</p>
                        <p class="card-text">${card.strCategoryDescription}</p>
                        <input type="button" class="btnFoods-${card.id} btn btn-link card-link" value="Añadir">
                    </div>
                </div>
            </div>`;
        element.innerHTML += divFood;
    });
}