import React from 'react'
import img1 from '../assets/images/pic2.png'
import img2 from '../assets/images/pic3.png'
import img3 from '../assets/images/pic4.png'
import img4 from '../assets/images/pic5.png'
import img5 from '../assets/images/pic6.png'
import img6 from '../assets/images/pic7.avif'
const Brands = () => {
  return (
    <div>
      <div className='bg-amber-300 h-16'>
       <div className='flex flex-row w-16 p-2 space-x-40 pt-2'>
      <img className='pl-5 w-26' src={img1}></img>
      <img src={img2}></img>
      <img src={img3}></img>
      <img src={img4}></img>
      <img src={img5}></img>
      <img src={img6}></img>
       </div>
      </div>
    </div>
  )
}

export default Brands
