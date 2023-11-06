import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Favourites = () => {
  return (
    <div className=" font-bold text-xl pt-5 px-5 ">
      Young's Favourite
      {/* setting images */}
      <div className="flex justify-center items-center gap-6 pt-5 ">
        <div className="w-1/3">
          <img
            className="rounded-md "
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

        <div className="w-1/3">
          <img
            className="rounded-md "
            src="https://img.freepik.com/free-photo/serious-sad-doubtful-thoughtful-teen-girl-atanding-studio_155003-28728.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697500800&semt=ais"
          ></img>

          <div className="pt-3 flex justify-between">
            <div>
              <p className="text-base font-normal">All Under $400</p>
            </div>

            <div>
              <AiOutlineArrowRight />
            </div>
          </div>
          <p className="text-base font-normal text-slate-400">Explore Now</p>
        </div>
      </div>
      {/* setting images end */}
    </div>
  );
};

export default Favourites;
