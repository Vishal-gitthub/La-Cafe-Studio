import React, { useEffect, useState } from "react";
import logo from "/logo-png-format.png";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  const Links = [
    { navigate: "Home", to: "/" },
    { navigate: "About", to: "/about" },
    { navigate: "Menu", to: "/menu" },
    { navigate: "Services", to: "/services" },
    { navigate: "Gallery", to: "/gallery" },
    { navigate: "Contact", to: "/contact" },
  ];

  // Scroll handler for sticky state
  const handleScroll = () => {
    setSticky(window.scrollY > 128);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        sticky ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      {/* Navbar Container */}
      <div className="flex justify-between items-center px-6 py-4 text-white">
        {/* Logo */}
        <div className="w-20 h-20">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>

        {/* Desktop Links */}
        <nav className="md:flex gap-6 hidden font-raleway font-semibold">
          {Links.map((link, index) => (
            <a
              key={index}
              href={link.to}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              {link.navigate}
            </a>
          ))}
        </nav>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="flex flex-col justify-center items-center gap-1 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={toggleMenu}
        >
          <div
            className={`w-6 h-0.5 bg-white transform transition-all ${
              toggleMenu ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all ${
              toggleMenu ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transform transition-all ${
              toggleMenu ? "-rotate-45 -translate-y-[0.3rem]" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 w-full bg-black/80 text-white overflow-hidden transition-all duration-500 ease-in-out ${
          toggleMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 py-4">
          {Links.map((link, index) => (
            <a
              key={index}
              href={link.to}
              className="hover:bg-white/10 py-3 w-full font-medium font-raleway text-center text-lg transition-colors duration-300"
              onClick={() => setToggleMenu(false)}
            >
              {link.navigate}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
