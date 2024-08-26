import Link from "next/link"
import { SimplePokemon } from "../interface/simple-pokemon";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";


interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

    const { name, id } = pokemon

    return (

        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col justify-between items-center p-6 bg-gray-800 border-b">
                    <Image
                        key={pokemon.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        alt={pokemon.name}
                        width= {0}
                        height={0}
                        className="py-3"
                        priority={false}
                        style={{ width: '100px', height: '100px' }}
                    />


                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}{id}</p>

                    <div className="mt-5 flex justify-center items-center">
                        <Link href={`pokemon/${id}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Manage your Account
                        </Link>
                    </div>
                </div>

                <div className="border-b">
                    <Link href={`pokemon/${id}`} className="px-4 py-2 hover:bg-gray-100 flex">

                        <div className="text-red-600">
                            <IoHeartOutline size={25} />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                is not a favorite
                            </p>
                            <p className="text-xs text-gray-500">View your campaigns</p>
                        </div>

                    </Link>

                </div>


            </div>
        </div>
    )
}
