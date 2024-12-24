import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img_1 from "../../LA_Cafe_Images/Home/Slider-Image/image-1.jpg";
import img_2 from "../../LA_Cafe_Images/Home/Slider-Image/image-2.jpg";
import img_3 from "../../LA_Cafe_Images/Home/Slider-Image/image-3.jpg";

export default function Slider_1() {
  return (
    <div className="overflow-hidden select-none">
      <Swiper
        pagination={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        grabCursor={true}
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="max-h-[80%]">
            <img
              src={img_1}
              alt="Slide 1"
              className="w-full h-[80vh] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-h-[80%]">
            <img
              src={img_2}
              alt="Slide 2"
              className="w-full h-[80vh] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-h-[80%]">
            <img
              src={img_3}
              alt="Slide 3"
              className="w-full h-[80vh] object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
