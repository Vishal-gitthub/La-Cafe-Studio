import React from "react";
import bookinBg from "../../LA_Cafe_Images/Home/Booking-section-image/booking-section-bg.jpg";
export default function Booking() {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${bookinBg})` }}
      >
        <div className="bg-black/50 py-40 w-full h-full text-center">
          <h1 className="font-greatVibes text-8xl text-customGold">
            Book your Table
          </h1>
          <h3 className="py-5 font-semibold text-3xl text-white">
            MAKE A RESERVATION
          </h3>
          <div className="flex flex-col gap-2 mt-20">
            <div className="flex justify-center items-center gap-6 my-1">
              <input
                className="bg-white px-4 py-2 w-2/5 text-base text-black outline-none"
                type="text"
                placeholder="Enter Your Name"
              />
              <input
                className="bg-white px-4 py-2 w-2/5 text-base text-black outline-none"
                type="text"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex justify-center items-center gap-6 mb-4">
              <input
                className="bg-white px-4 py-2 w-2/5 text-base text-black outline-none"
                type="text"
                placeholder="Enter Your Phone Number"
              />
              <input
                className="bg-white px-4 py-2 w-2/5 text-base text-black outline-none"
                type="text"
                placeholder="Choose Table Number"
              />
            </div>
          </div>
          <button className="bg-customGold bg-white/40 hover:bg-black/80 px-3 py-4 rounded-lg w-1/3 text-2xl text-black hover:text-white transition duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
