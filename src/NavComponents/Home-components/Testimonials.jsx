import React from "react";
import testimonials_bg from "../../LA_Cafe_Images/Home/Testimonials-section-image/testimonials-bg.jpg";
import hatLogo from "../../LA_Cafe_Images/Home/section-header-sep.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "test-1",
    description:
      "These days are all Happy and Free. These days are all share them with me oh baby. Come and listen to a story about a man named Jed - a poor mountaineer barely kept his family fed. Here's the story of a lovely lady who was bringing up three very lovely girls.",
  },
  {
    name: "test-2",
    description:
      "These days are all Happy and Free. These days are all share them with me oh baby. Come and listen to a story about a man named Jed - a poor mountaineer barely kept his family fed. Here's the story of a lovely lady who was bringing up three very lovely girls.",
  },
  {
    name: "test-3",
    description:
      "These days are all Happy and Free. These days are all share them with me oh baby. Come and listen to a story about a man named Jed - a poor mountaineer barely kept his family fed. Here's the story of a lovely lady who was bringing up three very lovely girls.",
  },
  {
    name: "test-4",
    description:
      "These days are all Happy and Free. These days are all share them with me oh baby. Come and listen to a story about a man named Jed - a poor mountaineer barely kept his family fed. Here's the story of a lovely lady who was bringing up three very lovely girls.",
  },
];
export default function Testimonials() {
  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: `url(${testimonials_bg})` }}
        className="relative bg-cover bg-no-repeat bg-center"
      >
        <div className="bg-black/60 py-20 w-full">
          <div className="mx-auto px-4 container">
            <h1 className="mb-4 font-greatVibes text-8xl text-center text-customGold max-sm:text-5xl max-md:text-6xl">
              Our Customer Says
            </h1>
            <h3 className="mb-8 font-lato font-semibold text-3xl text-center text-white max-md:text-2xl">
              TESTIMONIALS
            </h3>
            <div className="flex justify-center mb-12">
              <img src={hatLogo} alt="Hat Logo" />
            </div>

            <Swiper
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              modules={[Pagination, Autoplay]}
              loop={true}
              className="mx-auto max-w-4xl"
            >
              {testimonials.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="px-4 py-8 text-center">
                    <p className="mb-6 text-lg text-white">
                      {data.description}
                    </p>
                    <h2 className="pb-8 font-medium text-customGold text-xl">
                      {data.name}
                    </h2>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
