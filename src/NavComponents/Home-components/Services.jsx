import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import mock1 from "../../LA_Cafe_Images/Home/service-section-image/2148614457.jpg";
import mock2 from "../../LA_Cafe_Images/Home/service-section-image/44854.jpg";
import mock3 from "../../LA_Cafe_Images/Home/service-section-image/53075.jpg";
import mock4 from "../../LA_Cafe_Images/Home/service-section-image/6195.jpg";
import starsBg from "../../LA_Cafe_Images/Home/service-section-image/stars-changing-colors.gif";
const mockupData = [
  { name: "pizza", img: mock3 },
  { name: "burger", img: mock4 },
  { name: "Sandwich", img: mock2 },
  { name: "Wrap", img: mock1 },
];

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  useEffect(() => {
    gsap.fromTo(
      ".imgLoad",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".imgLoad",
          start: "top 90%",
          end: "top 10%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="py-20 text-center">
      <h1 className="font-greatVibes text-8xl text-customGold">Services</h1>
      <div>
        {mockupData.map((data, index) => (
          <div key={index} className="inline-flex flex-col m-4 imgLoad">
            <div
              className="relative p-10 border h-w-72 w-72 overflow-hidden group"
              // style={{ backgroundImage: `url(${starsBg})` }}
            >
              <img
                src={data.img}
                className="group-hover:scale-125 w-full h-full transition-all duration-500"
                alt={data.name}
              />
              <div className="bottom-0 left-0 absolute bg-black/50 py-10 w-full text-white transition-transform translate-y-full group-hover:translate-y-0 duration-500">
                <h1 className="font-medium font-raleway text-xl uppercase">
                  Order Now On Call
                </h1>
                <p>+91 1234567890</p>
              </div>
            </div>
            <h2 className="font-lato font-semibold text-xl uppercase">
              {data.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
