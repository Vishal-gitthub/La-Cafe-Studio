import React from "react";
import img_1 from "../../LA_Cafe_Images/Home/about-section-image/about-img1.jpg";
import img_2 from "../../LA_Cafe_Images/Home/about-section-image/about-img2.jpg";

export default function About_us() {
  return (
    <div>
      <div className="flex max-md:flex-col justify-center items-center px-72 py-16 max-sm:p-5 max-md:p-10 w-full">
        <div className="max-md:pb-5">
          <h1 className="font-greatVibes text-8xl">About</h1>
          <div className="font-raleway">
            <h2 className="font-semibold text-5xl">
              we are the best quality and traditional restaurant
            </h2>
            <p className="bg-slate-800 my-6 w-56 h-[3px]"></p>
            <p className="font-lato font-medium text-black/70 text-sm">
              These days are all Happy and Free. These days are all share them
              with me oh baby. Till the one day when the lady met this fellow
              and they knew it was much more than a hunch. Good bye gray sky
              hello blue. There's nothing can hold me when I hold you.
              <br />
              <br />
              Now the world don't move to the beat of just one drum. What might
              be right for you may not be right for some. No phone no lights no
              motor car not a single luxury. Like Robinson Crusoe it's primitive
              as can be. Goodbye gray sky hello blue.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="min-w-[400px] max-sm:min-w-full max-w-[564px]">
            <img src={img_1} className="w-full" alt="image-1" />
          </div>
          <div className="min-w-[400px] max-sm:min-w-full max-w-[564px]">
            <img src={img_2} alt="image-2" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
