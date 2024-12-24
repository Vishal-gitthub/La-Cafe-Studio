import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function ShineText() {
  useEffect(() => {
    gsap.to(".shine-text", {
      backgroundPosition: "200% center",
      ease: "power2.inOut",
      duration: 2,
      repeat: -1, // Infinite loop
    });
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-900 min-h-screen">
      <h1
        className="bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 font-bold text-6xl text-transparent shine-text"
        style={{
          backgroundSize: "200%",
        }}
      >
        Gold Shine Text
      </h1>
    </div>
  );
}
