import React from 'react'

const NewArrivals = () => {
  return (
    <div>
      <div className='p-10 font-bold text-xl' >
        NEW ARRIVALS

        {/* setting images */}
        <div className='flex gap-5 pt-8 h-52'>
        <div>
          <img  className='rounded-md 'src="https://img.freepik.com/free-photo/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing_197531-11045.jpg"></img>
          <div className='pt-3'>
            <p className='text-base font-normal'>Jean&Top</p>
            <p className='text-base font-normal text-slate-400'>Explore Now</p>
          </div>
        </div>

        <div>
          <img className='rounded-md ' src="https://img.freepik.com/free-photo/amazing-curly-girl-white-sunglasses-having-fun-with-best-friend-inspired-sisters-trendy-clothes-posing-orange_197531-10914.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696896000&semt=ais"></img>
          <div className='pt-3'>
            <p className='text-base font-normal'>Frocks</p>
            <p className='text-base font-normal text-slate-400'>Explore Now</p>
          </div>
        </div>

        <div>
          <img className='rounded-md ' src="https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg"></img>
          <div className='pt-3'>
            <p className='text-base font-normal'>Jacket</p>
            <p className='text-base font-normal text-slate-400'>Explore Now</p>
          </div>
        </div>
      </div>
     {/* setting images end */}
      </div>

     

    </div>

    
  )
}

export default NewArrivals

