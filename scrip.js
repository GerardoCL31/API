const form = document.getElementById('pokemon-form');
const input = document.getElementById('pokemon-name');
const pokemponINfoDiv = document.getElementById('pokemon-info');

async function fecthPokemonData(pokemonName){
    try{
        const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)

        if (!reponse.ok){
            throw new error('Pokémon no encontrado');
        }
            const data = await reponse.json();
            displayPokemonInfo(data);
        } catch (error) {
            pokemponINfoDiv.innerHTML = `<p>${error.message}</p>`;
            pokemponINfoDiv.style.display = 'block';
        }
        function displayPokemonInfo(pokemon){
            const{name,sprites,types,abilities} = pokemon;
            pokemponINfoDiv.innerHTML = `
            <img src="${sprites.front_default} alt="${name}">
            <h3>${name}</h3>
            <p>Tipo:${types}</p>
            <p>habilidades:${abilities}</p>
            `;
            pokemponINfoDiv.style.display = 'block';
        }
        form.addEventListener('submit', function(event){
            event.preventDefault();
            const pokemonName = input.ariaValueMax.trim();
            if (pokemon){
                fecthPokemonData(pokemonName);
            }
        });
    }
    
