
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";






export default function PokemonPage(props:any) {

  // const pathname = usePathname()

  console.log({props})
  
  return (
    <div>
      <h1>Pokemon  Page soy el 10</h1>



      {/* <Link href={`dashboard/pokemons`} className="px-4 py-2 hover:bg-gray-100 flex">

        <div className="text-red-600">
          <IoArrowBack size={25} />
        </div>
        <div className="pl-3">
          <p className="text-sm font-medium text-gray-800 leading-none">
            is not a favorite
          </p>
          <p className="text-xs text-gray-500">View your campaigns</p>
        </div>

      </Link> */}



    </div>
  );
}