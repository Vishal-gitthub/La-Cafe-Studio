import React from "react";

export default function Contact() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${header})` }}
        className="bg-cover bg-center"
      >
        <div className="bg-black/40 py-36 text-center text-white">
          <h1 className="font-semibold text-3xl">CONTACT</h1>
          <div className="flex justify-center text-lg">
            <Link to="/" className="font-bold">
              HOME
            </Link>
            <span className="mx-2">/</span>
            <span className="text-customGold">CONTACT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
