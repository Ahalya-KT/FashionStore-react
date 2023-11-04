import React from 'react'
import Button from '../layouts/Button'


const Sales = () => {
  return (
    <div className='pt-44'>
      <div className="bg-[url('./assets/images/pic9.jpg')] h-96 bg-cover  ">
        <div className='float-right pt-16 '>
        <p className='font-bold text-5xl mr-48  bg-white w-60 px-4'>PAYDAY</p>
        <p className='font-bold text-5xl'>SALE NOW</p>
        <p className='w-60 break-all pt-5'>Spend minimal $100 get 30% off voucher code for next purchase</p>
        <p className='pt-4 font-bold '>1 June-10 June 2021</p>
        <p>*Terms $ Condition apply</p>

        <div className='pt-4 pl-5'>
        <Button title="SHOP NOW"/>
        </div>
        </div>
      </div>
    </div>
  )
}


export default Sales
