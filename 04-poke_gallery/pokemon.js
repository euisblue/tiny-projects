const cards = document.querySelectorAll('.card');
const rows = document.querySelectorAll(".row");
const POKEMON_MAX = 898;
const CARD_PAIRS = 4;
let pokemons = getPokemonCards(CARD_PAIRS);

function getPokemonID() {
    return Math.floor(Math.random() * POKEMON_MAX) + 1;
}

function getPokemonCards(n) {
    let arr = [];
    while(true) {
        let num = getPokemonID();
        if(!arr.includes(num)) arr.push(num);
        if(arr.length == n) break;
    }

    return arr;
}

async function getPokemonInfo(id) {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderPokemon(pokemon, index, row) {
    const rowA = rows[row];
    const cards = rowA.querySelectorAll('.card');
    
    let pokeInfo = await getPokemonInfo(pokemon);
    let path = pokeInfo.sprites.other;
    path = path['official-artwork'];
    path = path['front_default'];

    cards[index].querySelector(".pokemon-image").style.backgroundImage = `url(${path})`;
    cards[index].querySelector(".pokemon-name").textContent = pokeInfo.name;

    cards[index].querySelector('.pokemon-image').classList.add('back');

    // @TODO 
    cards[index].querySelector('.pokemon-image').addEventListener('click', (e) =>console.log(e))
}

pokemons.forEach((pokemon, idx) => {
    renderPokemon(pokemon, idx, 0);
});

// randomize - hardcoded for now
[pokemons[0], pokemons[2]] = [pokemons[2], pokemons[0]];
[pokemons[1], pokemons[3]] = [pokemons[3], pokemons[1]];

// display pokemon cards
pokemons.forEach((pokemon, idx) => {
    renderPokemon(pokemon, idx, 1);
});

console.log(cards);