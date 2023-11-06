import React from "react";
import Button from "../layouts/Button";
import img from "../assets/images/pic8.jpg";

const Home = () => {
  return (
    <div className="bg-slate-100  p-4 max-w-screen-2xl rounded h-auto flex justify-between  m-3">
      <div className="  font-bold text-7xl leading-none  w-1/2 flex justify-center items-center ">
        <div>
          <div className="bg-white w-64 px-4">LET'S</div>

          <div>EXPLORE</div>

          <div className="bg-amber-300 w-80 px-4">UNIQUE</div>

          <div>CLOTHES.</div>

          <div className="text-base font-normal p-4">
            Live for Influential and Innovative fashion!
            <div className="pt-2">
              <Button title="SHOP NOW" />
            </div>
          </div>
        </div>
      </div>
      {/* images div */}
      <div className=" w-1/2 flex justify-center items-center">
        <img className=" w-1/2   " src={img}></img>
      </div>
    </div>
  );
};

export default Home;
