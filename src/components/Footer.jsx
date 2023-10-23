import React from 'react'
import {BiLogoFacebook} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BiLogoLinkedin} from 'react-icons/bi'


const Footer = () => {
  return (
    <div className=' bg-black text-white h-72 '>
      <div className='ml-14 pt-20 '>
        <p className='font-bold text-2xl'>FASHION</p>
        <p className='w-60 break-words pt-4'>Complte your style with aswsome  clothes from us</p>

        <div className='flex gap-3 pt-4 text-black '>
            <BiLogoFacebook className=' bg-yellow-500 w-5'/>
            < BsInstagram  className=' bg-yellow-500 w-5'/>
            < BsTwitter  className=' bg-yellow-500 w-5'/>
            < BiLogoLinkedin  className=' bg-yellow-500 w-5'/>
        </div>

        {/* footer start */}
        {/* <div className='flex flex-row gap-6 '>
            <div>
                <p>Company</p>
                <p>About</p>
                <p>Contact Us</p>
                <p>Support</p>
                <p>Career</p>
            </div>

            <div>
                <p>Quick Link</p>
                <p>Share Location</p>
                <p>Order Tracking</p>
                <p>Size</p>
                <p>FAQs</p>
            </div>

            <div>
                <p>Legal</p>
                <p>Terms & condition</p>
                <p>Privacy Policy</p>
                <p>Support</p>
                <p>Career</p>
            </div>
        </div> */}
        {/* footer end */}

        
      </div>
    </div>
  )
}

export default Footer
