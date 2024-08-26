import Image from 'next/image'
import ME from '@/aassets/images/castaneda.jpg'
import { IoBrowsers, IoCalculator, IoFootball, IoLogoReact } from 'react-icons/io5'
import SidebarMenu from './SidebarMenuItem'


const menuItems=[
  {
    path:'/dashboard/main',
    icons:<IoBrowsers size={40}/>,
    title:'Dashboard',
    subtitle:'Visualisacion',
  },
  {
    path:'/dashboard/counter',
    icons:<IoCalculator size={40}/>,
    title:'Counter',
    subtitle:'Counter Client Side',
  },
  {
    path:'/dashboard/pokemons',
    icons:<IoFootball size={40}/>,
    title:'Pokemons',
    subtitle:'Generation static',
  },
]


export const Sidebar = () => {
  return (
    <div
      id='menu'
      style={{ width: '400px' }}
      className='bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0  overflow-y-scroll'
    >
      <div id='logo' className='my-4 px-6'>
        <h1 className='flex  items-center text-lg md:text-2xl font-bold text-white'>
          <span className='mr-2'>
            <IoLogoReact />
          </span>
          Kriztianz<span className='text-blue-500'>DEV</span>
        </h1>
        <p className='text-slate-500 text-sm'>
          Manage your actions and activities
        </p>
      </div>
      <div id='profile' className='px-6 py-10'>
        <p className='text-slate-500'>Welcome back,</p>
        <a href='#' className='inline-flex space-x-2 items-center'>
          <span>
            <Image
              className='rounded-lg'
              src={ME}
              //   src='https://ccldev.com/assets/castaneda2-B_EuBYE8.jpg'
              width={50}
              height={50}
              alt='Christian castaneada'
              style={{width:'auto',height:'auto'}}
              priority
            />
          </span>
          <span className='text-sm md:text-base font-bold tx'>
            Christian Caastaneda
          </span>
        </a>
      </div>

      <div id='nav' className='w-full px-6'>

        {menuItems.map(item=>(
          
          <SidebarMenu
          key={item.path}
          {...item}

          // path = {item.path}
          // icons = {item.icons}
          // title = {item.title}
          // subtitle = {item.subtitle}
          />

        ))}


       
      </div>
    </div>
  )
}
