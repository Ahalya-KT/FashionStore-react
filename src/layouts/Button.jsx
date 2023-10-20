import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='bg-black text-white px-3 py-1 rounded text-sm '>
       {props.title}
      </button>
    </div>
  )
}

export default Button
