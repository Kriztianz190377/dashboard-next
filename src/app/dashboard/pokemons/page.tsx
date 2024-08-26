// import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons"

import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";





const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {

  const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

  const data: PokemonsResponse = await fetch(URL)
    .then(res => res.json())

  const pokemons = data.results.map(pokemon => ({

    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,

  }))

  // throw new Error('esto es un error del servidor')

  return pokemons;

}


export default async function PokemonsPage() {

  const pokemons = await getPokemons(151)


  return (
    <div className="my-10">
      <div className="flex flex-col">
        <span className="text-5xl text-center mb-10"> List Pokemons <small>static</small></span>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <PokemonsGrid
            pokemons={pokemons}
          />

        </div>


      </div>




    </div>
  );
}