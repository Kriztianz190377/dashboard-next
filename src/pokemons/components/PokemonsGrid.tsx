
import Image from 'next/image';
import { SimplePokemon } from '../interface/simple-pokemon';
import { PokemonCard } from './PokemonCard';


interface Props {
    pokemons: SimplePokemon[];
}


export const PokemonsGrid = ({ pokemons }: Props) => {
    return (
        <div className="flex flex-wrap gap-10  justify-center items-center">

            {pokemons.map(pokemon => (

                <PokemonCard 
                key={pokemon.id}
                pokemon={pokemon}
                />
                
                

            ))}
        </div>
    )
}
