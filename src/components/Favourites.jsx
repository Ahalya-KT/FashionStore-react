import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Favourites = () => {
  return (
    <div>
      <div className="p-10 font-bold text-xl ">
        Young's Favourite
        {/* setting images */}
        <div className="flex justify-center items-center  pt-5 ">
          <div>
            <img
              className="rounded-md w-3/4"
              src="https://static.vecteezy.com/system/resources/thumbnails/020/483/705/small_2x/beautiful-little-girl-in-a-chic-pink-dress-poses-sitting-on-a-gray-background-and-throws-confetti-fashion-and-style-space-for-text-in-the-studio-high-quality-photo.jpg"
            ></img>
            <div className="pt-3 flex justify-between">
              <p className="text-base font-normal">Trending on Instagram</p>

              <div>
                <AiOutlineArrowRight />
              </div>
            </div>
            <p className="text-base font-normal text-slate-400">Explore Now</p>
          </div>

          <div>
            <img
              className="rounded-md w-3/4"
              src="https://img.freepik.com/free-photo/serious-sad-doubtful-thoughtful-teen-girl-atanding-studio_155003-28728.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697500800&semt=ais"
            ></img>

            <div className="pt-3 flex justify-between">
              <p className="text-base font-normal">All Under $400</p>

              <div>
                <AiOutlineArrowRight />
              </div>
            </div>
            <p className="text-base font-normal text-slate-400">Explore Now</p>
          </div>
        </div>
        {/* setting images end */}
      </div>
    </div>
  );
};

export default Favourites;
