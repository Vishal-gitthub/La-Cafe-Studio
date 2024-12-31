import React from "react";
import ftrPot from "../LA_Cafe_Images/Home/ftr-link-ic.png";
import { NavLink } from "react-router-dom";
const links = [
  { label: "HOME", to: "/" },
  { label: "MENU", to: "/menu" },
  { label: "ABOUT", to: "/about" },
  { label: "GALLERY", to: "/gallery" },
  { label: "CONTACT", to: "/contact" },
];
export default function Footer() {
  return (
    <footer className="w-full h-full">
      <div className="mx-auto px-4 py-12 container">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="flex flex-col h-[300px]">
            <h1 className="h-10 font-raleway font-semibold text-2xl">
              ABOUT US
            </h1>
            <div className="bg-orange-400 mb-4 w-20 h-[2px]"></div>
            <p className="mb-6 h-[100px] font-lato font-semibold text-base text-gray-800/80 leading-relaxed">
              The Love Boat soon will be making another run. The Love Boat
              promises something for everyone.
            </p>
            <div className="flex gap-6 mt-auto h-8">
              {/* Social Icons */}
              {["facebook", "instagram", "twitter", "linkedin"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="flex justify-center items-center w-8 h-8 hover:text-customGold transition-colors"
                >
                  <i className={`text-xl fa-brands fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col h-[300px]">
            <h1 className="h-10 font-raleway font-semibold text-2xl">
              QUICK LINKS
            </h1>
            <div className="bg-orange-400 mb-4 w-20 h-[2px]"></div>
            <div className="gap-2 grid">
              {links.map((link, index) => (
                <div key={index} className="flex items-center gap-2 h-8">
                  <img src={ftrPot} alt="" className="" />
                  <p className="font-semibold text-base text-gray-800/80 hover:text-customGold transition-colors">
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        isActive ? "text-customGold" : ""
                      }
                    >
                      {link.label}
                    </NavLink>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Working Time Section */}
          <div className="flex flex-col h-[300px]">
            <h1 className="h-10 font-raleway font-semibold text-2xl">
              WORKING TIME
            </h1>
            <div className="bg-customGold mb-4 w-20 h-[2px]"></div>
            <div className="gap-2 grid">
              {[
                ["Monday - Tuesday", "09.00 - 22.00"],
                ["Wednesday", "08.30 - 20.30"],
                ["Thursday - Friday", "09.45 - 19.55"],
                ["Saturday", "10.00 - 20.45"],
                ["Sunday", "08.00 - 19.10"],
                ["Public Holidays", "Closed"],
              ].map(([day, time]) => (
                <div
                  key={day}
                  className="flex items-center gap-5 h-8 font-lato font-semibold text-gray-800/80 shrink-0"
                >
                  <h3 className="flex w-32 shrink-0">{day}</h3>
                  <span>--</span>
                  <h3>{time}</h3>
                </div>
              ))}
            </div>
          </div>
          <h1 className="border w-full h-full font-bold font-raleway text-4xl text-black/40 text-center">
            INSTA POST WILL BE HERE
          </h1>
        </div>
      </div>
    </footer>
  );
}
