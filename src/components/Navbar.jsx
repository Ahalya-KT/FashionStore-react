import React from 'react'
import {Link} from 'react-scroll'
import {SiShopify} from 'react-icons/si'
import Button from '../layouts/Button'

const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row justify-between p-4 px-32 pt-6 items-center  bg-white h-12'>
        <div className='font-bold -tracking-2 '>
        <Link to="/" className='flex flex-row gap-1' >
          <SiShopify size={20}/> 
           FASHION
        </Link>
        </div>
        
        <nav className='space-x-6 text-sm flex flex-row items-center  '>
            <Link to="home">CATALOGUE</Link>
            <Link to="home">FASHION</Link>
            <Link to="home">FAVOURITE</Link>
             <Link to="home">LIFESTYLE</Link>
             
             <div>

             <Button title="SIGN UP"/>

             </div>  
        </nav>
      

      </div>
    </div>
  )
}

export default Navbar
