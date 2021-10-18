const rows = document.querySelectorAll(".row");
const POKEMON_MAX = 898;
let pokeIndex = Math.floor(Math.random() * POKEMON_MAX) + 1;

async function getPokemonInfo(id) {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderPokemon() {
  let pokeInfo = await getPokemonInfo(pokeIndex);
  let path = pokeInfo.sprites.other;
  path = path['official-artwork'];
  path = path['front_default'];

  const rowA = rows[0];
  const cards = rowA.querySelectorAll('.card');
  console.log(cards);
  cards.forEach((card) => {
      card.querySelector(".pokemon-image").style.backgroundImage = `url(${path})`;
      card.querySelector(".pokemon-name").textContent = pokeInfo.name;
  })
}
renderPokemon();
