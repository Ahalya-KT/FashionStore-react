import React from 'react'
import Button from '../layouts/Button'
import img from '../assets/images/pic8.jpg'

const Home = () => {
  return (
    <div  className='bg-slate-100  p-4 max-w-screen-2xl rounded h-auto flex flex-row m-3' >

        <div className='mx-32 my-10 font-bold text-6xl leading-none '>
        <div className='bg-white w-60 px-4'>
        LET'S   
    </div>

    <div>
    EXPLORE
    </div>

    <div className='bg-amber-300 w-64 px-4'>
        UNIQUE
    </div>

    <div>
    CLOTHES.
    </div>

    <div className='text-base font-normal p-4'>
    Live for Influential and Innovative fashion!
    <div className='pt-2'>
    <Button title="SHOP NOW"/>

    </div>
    </div>

     
        </div>
    {/* images div */}
        <div className='pt-7'>
          <img className=' w-72 ml-24   ' src={img}></img>
        </div>
   
    </div>
  )
}

export default Home




