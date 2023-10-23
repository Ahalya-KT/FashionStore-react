import React from 'react'

const Favourites = () => {
  return (
    <div>
      <div className='p-10 font-bold text-xl ' >
        Young's Favourite

        {/* setting images */}
        <div className='flex gap-5 pt-8 h-52 pl-60'>
        <div>
          <img  className='rounded-md w-80'src="https://static.vecteezy.com/system/resources/thumbnails/020/483/705/small_2x/beautiful-little-girl-in-a-chic-pink-dress-poses-sitting-on-a-gray-background-and-throws-confetti-fashion-and-style-space-for-text-in-the-studio-high-quality-photo.jpg"></img>
          <div className='pt-3'>
            <p className='text-base font-normal'>Trending on Instagram</p>
            <p className='text-base font-normal text-slate-400'>Explore Now</p>
          </div>
        </div>

        <div>
          <img className='rounded-md w-80' src="https://img.freepik.com/free-photo/serious-sad-doubtful-thoughtful-teen-girl-atanding-studio_155003-28728.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697500800&semt=ais"></img>
          <div className='pt-3'>
            <p className='text-base font-normal'>All Under $400</p>
            <p className='text-base font-normal text-slate-400'>Explore Now</p>
          </div>
        </div>
      </div>
     {/* setting images end */}
      </div>
    </div>
  )
}

export default Favourites
