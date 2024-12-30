import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Loader from "../Loader";

// Lazy loaded components
const About_us = lazy(() => import("./Home-components/About_us"));
const Counters = lazy(() => import("./Home-components/Counters"));
const Testimonials = lazy(() => import("./Home-components/Testimonials"));

// Preload images
const header = new URL("../LA_Cafe_Images/Home/about-section-image/portions-various-delicious-ovenbaked-pizzas.jpg", import.meta.url);
const chefHat = new URL("../LA_Cafe_Images/Home/section-header-sep.png", import.meta.url);
const team1 = new URL("../LA_Cafe_Images/Home/about-section-image/team1.jpg", import.meta.url);
const team2 = new URL("../LA_Cafe_Images/Home/about-section-image/team2.jpg", import.meta.url);
const team3 = new URL("../LA_Cafe_Images/Home/about-section-image/team3.jpg", import.meta.url);

const chefData = [
  { name: "Chef 1", job: "Managing Director", img: team1 },
  { name: "Chef 2", job: "Managing Director", img: team2 },
  { name: "Chef 3", job: "Managing Director", img: team3 },
];

export default function About() {
  return (
    <>
      {/* <Helmet>
        <title>About Us - LA Cafe</title>
        <meta name="description" content="Meet our expert chefs and learn about LA Cafe's culinary excellence" />
        <link rel="preload" as="image" href={header} />
        <link rel="preload" as="image" href={chefHat} />
        <style>{`
          .chef-image { opacity: 1; transition: opacity 0.3s; }
          .chef-overlay { background: rgba(0,0,0,0.6); opacity: 0; transition: opacity 0.3s; }
        `}</style>
      </Helmet> */}

      <div style={{ backgroundImage: `url(${header})` }} className="bg-cover bg-center">
        <div className="bg-black/40 py-36 text-center text-white">
          <h1 className="font-semibold text-3xl">ABOUT</h1>
          <div className="flex justify-center text-lg">
            <Link to="/" className="font-bold">HOME</Link>
            <span className="mx-2">/</span>
            <span className="text-customGold">ABOUT</span>
          </div>
        </div>
      </div>

      <Suspense fallback={<Loader />}>
        <About_us />
        <Counters />
        <section className="py-20">
          <h1 className="font-greatVibes text-6xl text-center text-customGold md:text-8xl">
            Meet Our Chefs
          </h1>
          <p className="mt-4 font-semibold text-2xl text-center">OUR TEAM</p>
          <img src={chefHat} alt="Chef Hat" className="mx-auto mt-5" width="150" height="50" />
          
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-12 px-4 max-w-6xl">
            {chefData.map((chef, index) => (
              <div key={index} className="relative overflow-hidden aspect-[3/4] group">
                <img
                  src={chef.img}
                  alt={chef.name}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="bottom-4 group-hover:bottom-0 absolute inset-x-0 group-hover:inset-0 flex flex-col group-hover:justify-center items-center p-4 text-white transform transition-all duration-500 ease-in-out">
                  <h1 className="mb-2 font-semibold text-xl transform transition-transform duration-500 ease-in-out">
                    {chef.name}
                  </h1>
                  <p className="mb-4 text-gray-200 transform transition-transform duration-500 ease-in-out">
                    {chef.job}
                  </p>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transform transition-all translate-y-4 group-hover:translate-y-0 duration-500 ease-in-out">
                    <a
                      href="#"
                      className="text-white hover:text-orange-400 transition-colors duration-300"
                    >
                      <i className="fa-facebook-f fab"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-orange-400 transition-colors duration-300"
                    >
                      <i className="fa-twitter fab"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-orange-400 transition-colors duration-300"
                    >
                      <i className="fa-instagram fab"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Testimonials />
      </Suspense>
    </>
  );
}
