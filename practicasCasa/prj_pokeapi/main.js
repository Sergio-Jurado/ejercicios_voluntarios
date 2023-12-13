// Imports
import './style.css';
import { renderCardPokemon } from './src/components/renderCardPokemon/renderCardPokemon';
import { getPokemon } from './src/helper/getPokemon';

// Variables globales
const url_pokemons = `${import.meta.env.URL_VITE}`;
const pokemons = await getPokemon(url_pokemons);
console.log(pokemons);


// Coger los elemntos del DOM que vamos a usar.
let pokeContainer = document.querySelector(".poke-list")

await renderCardPokemon(pokeContainer, pokemons);
