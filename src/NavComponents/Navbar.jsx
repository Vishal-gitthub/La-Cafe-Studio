import React, { useEffect, useState } from "react";
import logo from "/logo-png-format.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  const Links = [
    { navigate: "About", to: "/about" },
    { navigate: "Menu", to: "/menu" },
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
        toggleMenu ? "bg-black/60" : ""
      } ${sticky ? "bg-black/80" : ""}`}
    >
      {/* Navbar Container */}
      <div className="flex justify-between items-center px-6 py-4 text-white">
        {/* Logo */}
        <div className="w-20 h-20">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className={`w-full h-full object-contain transition-all ${
                toggleMenu ? "invert" : ""
              } ${sticky ? "invert" : ""}`}
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <nav className="md:flex gap-6 hidden font-raleway font-semibold">
          {Links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="hover:text-customGold transition duration-300"
            >
              {link.navigate}
            </Link>
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
            className={`w-6 h-0.5 bg-white transition-transform ${
              toggleMenu ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-opacity ${
              toggleMenu ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-transform ${
              toggleMenu ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 w-full text-white overflow-hidden transition-all duration-500 ease-in-out ${
          toggleMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } ${sticky ? "bg-black/80" : "bg-black/60"}`}
      >
        <nav className="flex flex-col items-center gap-4 py-4">
          {Links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="hover:bg-white/10 py-3 w-full font-medium font-raleway text-center text-lg transition duration-300"
              onClick={() => setToggleMenu(false)}
            >
              {link.navigate}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
