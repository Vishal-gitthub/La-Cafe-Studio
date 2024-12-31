import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const header = new URL(
  "../LA_Cafe_Images/Home/about-section-image/portions-various-delicious-ovenbaked-pizzas.jpg",
  import.meta.url
);
const chefHat = new URL(
  "../LA_Cafe_Images/Home/section-header-sep.png",
  import.meta.url
);

const image = [
  "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg",
  "https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/105588/pexels-photo-105588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2955816/pexels-photo-2955816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3944311/pexels-photo-3944311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5182122/pexels-photo-5182122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/14853731/pexels-photo-14853731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/14853728/pexels-photo-14853728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4871111/pexels-photo-4871111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/772515/pexels-photo-772515.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6947303/pexels-photo-6947303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7736775/pexels-photo-7736775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (img) => {
    setSelectedImg(img);
  };

  const closeModal = () => {
    setSelectedImg(null);
  };

  return (
    <div>
      {/* Helmet for Metadata */}
      <Helmet>
        <title>Gallery | LA Cafe</title>
        <meta name="description" content="Explore the delicious gallery of LA Cafe, featuring stunning dishes and cozy ambiance photos." />
      </Helmet>

      {/* Header Section */}
      <div
        style={{ backgroundImage: `url(${header})` }}
        className="bg-cover bg-center"
      >
        <div className="bg-black/40 py-36 text-center text-white">
          <h1 className="font-semibold text-3xl">GALLERY</h1>
          <div className="flex justify-center text-lg">
            <Link to="/" className="font-bold">
              HOME
            </Link>
            <span className="mx-2">/</span>
            <span className="text-customGold">GALLERY</span>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="py-20">
        <h1 className="font-greatVibes text-6xl text-center text-customGold md:text-8xl">
          Our Gallery
        </h1>
        <p className="pt-5 font-lato font-semibold text-2xl text-center">
          GALLERY
        </p>
        <img
          src={chefHat}
          alt="Chef Hat"
          className="mx-auto mt-5"
          width="150"
          height="50"
        />
      </div>

      {/* Image Gallery */}
      <div className="flex flex-wrap justify-center items-center gap-6 mx-40 max-sm:mx-4 max-md:mx-20 mb-40 px-4">
        {image.map((img, index) => (
          <div
            key={index}
            className="flex shadow-xl rounded-md w-72 max-sm:w-full h-48 max-sm:h-full cursor-pointer overflow-hidden"
            onClick={() => openModal(img)}
          >
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full transition-transform duration-300 hover:scale-105 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImg && (
        <div
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative p-4 w-full max-w-3xl">
            <img
              src={selectedImg}
              className="shadow-2xl rounded-lg max-w-full max-h-full"
              alt="Selected"
            />
            <button
              onClick={closeModal}
              className="top-4 right-4 absolute bg-white p-3 rounded-full font-bold text-black"
              aria-label="Close"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
