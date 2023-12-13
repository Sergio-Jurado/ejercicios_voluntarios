/**
 * @author Sergio Jurado Trillo
 */

// ------- Imports --------
import { renderCardFoods } from "./src/components/renderCardFoods/renderCardFoods";
import { renderCardOrder } from "./src/components/renderCardOrder/renderCardOrder";
import { findFoodApi } from "./src/helper/findFoodApi";
import { getFoodApi } from "./src/helper/getFoodApi";
import { saveOrder } from "./src/helper/saveOrderApi";

const URL_categories = `${import.meta.env.VITE_URL}/categories`;
const URL_orders = `${import.meta.env.VITE_URL}/order`;

// ---------- Variables globales ---------
const divFoods = document.querySelector(".divFoods");
const divOrder = document.querySelector(".divOrder");
const buscador = document.querySelector(".buscador");
const btnPagar = document.querySelector(".pagar");

const order = [];

// ------ AÑADIR A ORDER FOODS -------
divFoods.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.type == "button") {
    const c = e.target.parentElement;
    const father = c.parentElement;

    let numC = e.target.parentElement.id;
    numC = numC.split("-");
    let id = numC[1];

    fetch(`${URL_categories}/${id}`)
      .then((respon) => {
        if (respon.ok) {
          return respon.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then((data) => {
        let pediObj = {
          id: data.id,
          name: data.strCategory,
          price: data.price,
        };
        order.push(pediObj);

        renderCardOrder(divOrder, data);
        father.classList.remove("volverAver");
        father.classList.add("desbanecer");
        e.target.disabled = true;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
});

// ------ QUITAR DE ORDER FOODS -------
divOrder.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.type == "button" && e.target.id == "idComida") {

    let numC = e.target.parentElement.id;
    numC = numC.split("-");
    let id = numC[1];

    const father = e.target.parentElement;
    father.remove();

    const foodDiv = document.querySelector(`.divTodas-${id}`);
    foodDiv.classList.remove("desbanecer");
    foodDiv.classList.add("volverAver");

    const btnBuy = document.querySelector(`.btnFoods-${id}`);
    btnBuy.disabled = false;

    let indexPe = pedido.map(ped => ped.id).indexOf(numC);
    pedido.splice(indexPe, 1);
    console.log(pedido);
  }
});
/*divOrder.addEventListener("click", async (e) => {
  e.preventDefault()
  let precioTot = document.querySelector(".comidaPrec")
  console.log(precioTot);
  if (e.target.type == "button" && e.target.id == "idComida") {

    let numC = e.target.parentElement.id;
    numC = numC.split("-");
    numC = numC[1];


    const padre = e.target.parentElement;
    padre.remove();

    const comiDiv = document.querySelector(`.divTodas-${numC}`);
    comiDiv.classList.remove("desbanecer");
    comiDiv.classList.add("volverAver");
    document.getElementById("total").innerHTML = "Total: $";


    const btnCom = document.querySelector(`.btnFoods-${numC}`);
    btnCom.disabled = false;

    let indexPe = pedido.map(ped => ped.id).indexOf(numC)
    pedido.splice(indexPe, 1);
    console.log(pedido);

  }

})*/
// ------ BUSCADOR -------
buscador.addEventListener("keyup", () => {
  findFoodApi(URL_categories, buscador.value.toLowerCase(), (data) => {
    renderCardFoods(divFoods, data)
  });
});

// ------ PAGAR -------
btnPagar.addEventListener("click", () => {
  saveOrder(URL_orders, order);
});

// ------ FUNCIÓN INIT --------
function init() {
  getFoodApi(URL_categories, (data) => {
    renderCardFoods(divFoods, data);
  });
}

// ---- PARA INICIAR TODO ----
document.addEventListener("DOMContentLoaded", init);