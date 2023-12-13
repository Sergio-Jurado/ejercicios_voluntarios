// ------------ node-fetch ---------------
//const { default: fetch } = require("node-fetch");
import fetch from "node-fetch";
import fs from "fs/promises";


const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const filePath = "./server/db.json";

async function fetchAndSave() {
    try {

        const response = await fetch(apiUrl);
        const data = await response.json();
        const { a, b, c, results } = data;
        // ahora guardo esa infromación en la DB de mi api.
        await fs.writeFile(filePath, JSON.stringify({ results }), null, 2);
    } catch (error) {
        console.log("Error al acceder a PokeApi: " + error.message);
    }
}

fetchAndSave();