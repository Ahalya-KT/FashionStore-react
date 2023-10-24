import React from 'react'
import {BiLogoFacebook} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BiLogoLinkedin} from 'react-icons/bi'


const Footer = () => {
  return (
    <div className=' bg-black text-white h-72 flex pt-20 gap-20 '>

      <div>
      <div className='ml-14  '>
        <p className='font-bold text-2xl'>FASHION</p>
        <p className='w-60 break-words pt-4  text-neutral-400'>Complte your style with aswsome  clothes from us</p>

        <div className='flex gap-3 pt-4 text-black'>
            <BiLogoFacebook className=' bg-yellow-500 w-7 h-6 rounded-md '/>
            < BsInstagram size={10}  className=' bg-yellow-500 w-7 h-6 rounded-md'/>
            < BsTwitter  className=' bg-yellow-500 w-7 h-6 rounded-md'/>
            < BiLogoLinkedin  className=' bg-yellow-500 w-7 h-6 rounded-md'/>
        </div>
        </div>
      </div>
      

        {/* footer start */}
            <div className='pl-32'>
                <p >Company</p>
                <p className='text-neutral-400 pt-2'>About</p>
                <p className='text-neutral-400 pt-2'>Contact Us</p>
                <p className='text-neutral-400 pt-2'>Support</p>
                <p className='text-neutral-400 pt-2'>Career</p>
            </div>

            <div>
                <p>Quick Link</p>
                <p className='text-neutral-400 pt-2'>Share Location</p>
                <p className='text-neutral-400 pt-2'>Order Tracking</p>
                <p className='text-neutral-400 pt-2'>Size</p>
                <p className='text-neutral-400 pt-2'>FAQs</p>
            </div>

            <div>
                <p>Legal</p>
                <p className='text-neutral-400 pt-2'>Terms & condition</p>
                <p className='text-neutral-400 pt-2'>Privacy Policy</p>
                <p className='text-neutral-400 pt-2'>Support</p>
                <p className='text-neutral-400 pt-2'>Career</p>
            </div>
        {/* footer end */}

        
    
    </div>
  )
}

export default Footer
