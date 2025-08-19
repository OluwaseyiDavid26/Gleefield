import React, { useState } from "react";
import logo from "../assets/Logo-Name-Black-2.png"; // main logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-18">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#008A5E] font-medium">
          <li>
            <a
              href="#home"
              className="relative transition-colors duration-300 hover:text-[#006b4b] 
              after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#008A5E] 
              after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="relative transition-colors duration-300 hover:text-[#006b4b] 
              after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#008A5E] 
              after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="relative transition-colors duration-300 hover:text-[#006b4b] 
              after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#008A5E] 
              after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#why-choose-us"
              className="relative transition-colors duration-300 hover:text-[#006b4b] 
              after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#008A5E] 
              after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
            >
              Why Choose Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-[#008A5E] text-white px-5 py-2 rounded-xl shadow-md hover:bg-[#006b4b] transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1"
        >
          <span className="w-6 h-0.5 bg-green-700"></span>
          <span className="w-6 h-0.5 bg-green-700"></span>
          <span className="w-6 h-0.5 bg-green-700"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow text-[#008A5E] font-medium">
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#why-choose-us" onClick={() => setIsOpen(false)}>
              Why Choose Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#008A5E] text-white px-5 py-2 rounded-xl shadow-md hover:bg-[#006b4b] transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
