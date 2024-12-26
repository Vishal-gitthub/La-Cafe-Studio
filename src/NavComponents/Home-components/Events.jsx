import React from "react";
import hatLogo from "../../LA_Cafe_Images/Home/section-header-sep.png";
import food_1 from "../../LA_Cafe_Images/Home/Events-section-image/food-1.jpeg";
import food_2 from "../../LA_Cafe_Images/Home/Events-section-image/food-2.jpg";
import food_3 from "../../LA_Cafe_Images/Home/Events-section-image/food-3.jpg";
export default function Events() {
  const cards = [
    {
      title: "Daily Special Foods For Your Health",
      description:
        "Michael Knight a young loner on a crusade to champion the cause of the innocent.",
      image: food_1,
      Date: "Posted Dec 20,2016 10:23 am",
    },
    {
      title: "Daily Special Foods For Your Health",
      description:
        "Michael Knight a young loner on a crusade to champion the cause of the innocent.",
      image: food_2,
      Date: "Posted Mar 21,2016 12:00 pm",
    },
    {
      title: "The Spiecialy Chicken Fry With RiceFood",
      description:
        "Michael Knight a young loner on a crusade to champion the cause of the innocent.",
      image: food_3,
      Date: "Posted Mar 21,2016 12:00 pm",
    },
  ];

  return (
    <div className="py-16">
      <div className="text-center">
        <h1 className="font-greatVibes text-8xl text-customGold">
          Latest Events
        </h1>
        <h3 className="font-bold font-raleway text-2xl">DO NOT MISS</h3>
        <div className="flex flex-col justify-center items-center py-5">
          <img src={hatLogo} alt="Section Header Logo" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-5">
          {cards.map((card, index) => (
            <div key={index} className="w-80">
              <div className="relative w-full h-[500px] overflow-hidden group">
                <img
                  src={card.image}
                  className="rounded-lg w-full h-full object-cover"
                  alt={card.title}
                />
                <div className="bottom-0 left-0 absolute bg-white/70 opacity-0 group-hover:opacity-100 backdrop-blur-sm px-4 py-8 rounded-t-2xl w-full transition-all translate-y-full group-hover:translate-y-0 duration-500">
                  <div className="flex flex-col justify-center items-center">
                    <p className="top-2 absolute bg-black/50 rounded-full w-10 h-1"></p>
                    <h1 className="font-semibold text-xl">{card.title}</h1>
                    <p className="bg-orange-400 my-2 w-full h-1" />
                    <p className="text-sm">{card.description}</p>
                    <p className="py-2 text-gray-500">{card.Date}</p>
                    <div className="group-hover:scale-100 bg-[#c59d5f] mt-2 px-4 py-3 font-semibold text-white transition-all duration-200 scale-0">
                      <button>Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
