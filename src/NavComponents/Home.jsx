import React from "react";
import Slider_1 from "../NavComponents/Home-components/Slider_1";
import About_us from "./Home-components/About_us";
import chefLogo from "../LA_Cafe_Images/Home/section-header-sep.png";
import platePng from "../LA_Cafe_Images/Home/platePng.png";
import Services from "./Home-components/Services";
import ShineText from "./Home-components/Test";
import Counters from "./Home-components/Counters";
export default function Home() {
  return (
    <div>
      <Slider_1 />
      <About_us />
      <div className="relative surprise-bg">
        <h1 className="bg-black/40 pt-40 pb-[340px] font-greatVibes text-8xl text-center text-white max-sm:text-4xl max-md:text-6xl">
          Surprise For Your Plate
        </h1>
        <img
          src={chefLogo}
          className="top-1/2 left-2/4 absolute -translate-x-2/4 -translate-y-2/4"
          alt=""
        />
        <img
          src={platePng}
          className="top-[70%] left-2/4 absolute -translate-x-2/4 -translate-y-2/4"
          alt=""
        />
      </div>
      <Services />
      {/* <ShineText /> */}
      <Counters />
    </div>
  );
}
