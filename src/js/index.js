import { pokedex } from "./pokemons.js";

const pokemonsContainer = document.getElementById("pokemonsContainer");

const listPokemons = () => {
    return (
        pokedex.map(pokemon => {
        pokemonsContainer.innerHTML += `
            <div class="pokemon ${pokemon.type[0]}">
            <img src=${pokemon.image} alt=${pokemon.name}>

            <div class="pokemon-data">
                <h2>${pokemon.name}</h2>
                <span class="id">#${pokemon.id}</span>

                <span class="type">${pokemon.type}</span>

                <div class="description">
                <p>${pokemon.description}</p>
                </div>
            </div>
        </div>
        `
    })
    )
}

listPokemons()

const themeToggler = document.querySelector("header button");
const body = document.querySelector("body");
const pokemonCard = document.querySelector(".pokemon")

themeToggler.addEventListener("click", () => {
    body.classList.toggle("dark")
    pokemonCard.classList.toggle("dark")
})
