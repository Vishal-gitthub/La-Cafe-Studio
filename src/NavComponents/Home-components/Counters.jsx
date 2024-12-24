import React from "react";
import counterBg from "../../LA_Cafe_Images/Home/Counter-section-image/counter-bg.jpg";
import chefLogo from "../../LA_Cafe_Images/Home/section-header-sep.png";
import chickenPng from "../../LA_Cafe_Images/Home/Counter-section-image/chickenPng.png";
import fishPng from "../../LA_Cafe_Images/Home/Counter-section-image/fishPng.png";
import ServedPng from "../../LA_Cafe_Images/Home/Counter-section-image/ServedPng.png";
import chefHat from "../../LA_Cafe_Images/Home/Counter-section-image/chefHat.png";
export default function Counters() {
  return (
    <div
      style={{
        backgroundImage: `url(${counterBg})`,
      }}
      className="relative bg-cover bg-no-repeat bg-center text-center"
    >
      <div className="bg-black/60 py-[150px]">
        <h1 className="font-greatVibes text-8xl text-white">Counters</h1>
        <h2 className="font-bold font-lato text-4xl text-customGold uppercase">
          We Are Delicious Restaurant
        </h2>
        <img
          src={chefLogo}
          className="top-[52%] max-sm:top-[40%] left-2/4 absolute -translate-x-2/4 -translate-y-2/4"
          alt=""
        />
        <div className="flex max-md:flex-wrap justify-evenly items-baseline gap-10 pt-32"> 
          <div className="flex flex-col justify-center items-center">
            <img src={chickenPng} alt="" />
            <h1 className="py-5 font-lato font-semibold text-7xl text-white max-sm:text-2xl">4372</h1>
            <p className="font-bold font-raleway text-sm text-white tracking-wider">CHICKEN SERVED</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={fishPng} alt="" />
            <h1 className="py-5 font-lato font-semibold text-7xl text-white max-sm:text-2xl">4372</h1>
            <p className="font-bold font-raleway text-sm text-white tracking-wider">CHICKEN SERVED</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={ServedPng} alt="" />
            <h1 className="py-5 font-lato font-semibold text-7xl text-white max-sm:text-2xl">4372</h1>
            <p className="font-bold font-raleway text-sm text-white tracking-wider">CHICKEN SERVED</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={chefHat} alt="" />
            <h1 className="py-5 font-lato font-semibold text-7xl text-white max-sm:text-2xl">4372</h1>
            <p className="font-bold font-raleway text-sm text-white tracking-wider">CHICKEN SERVED</p>
          </div>
        </div>
      </div>
    </div>
  );
}
