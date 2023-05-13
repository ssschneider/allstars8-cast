import { queens } from "./queensList.js";

const queensContainer = document.getElementById("queensContainer");

const listQueens = () => {
    return (
        queens.map(queen => {
        const ranks = queen.ranks.map(rank => `<span class="rank">#${rank}</span>`)
        const seasons = queen.seasons.map(season => `<span class="season">${season}</span>`)
        queensContainer.innerHTML += `
            <div class="queen">
            <img src=${queen.image} alt=${queen.name}>

            <div class="queen-data">
                <h2>${queen.name}</h2>
                <div class="ranks">
                    ${ranks}
                </div>

                <div class="seasons">
                ${seasons}
                </div>

                <div class="description">
                <p>${queen.description}</p>
                </div>
            </div>
        </div>
        `
    })
    )
}

listQueens()

const themeToggler = document.querySelector("header button");
const body = document.querySelector("body");
const queenCard = document.querySelector(".queen")

themeToggler.addEventListener("click", () => {
    body.classList.toggle("dark")
    queenCard.classList.toggle("dark")
    console.log(queenCard);
})
