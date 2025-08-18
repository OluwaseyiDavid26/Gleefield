import React, { useState } from "react";
import logo from "../assets/Logo-Name-Black-2.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          {/* <span className="font-bold text-lg">Gleefield Global Services</span> */}
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-green-700 font-medium">
          <li>
            <Link to="/" className="hover:text-green-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-500 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-green-500 transition">
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/why-choose-us"
              className="hover:text-green-500 transition"
            >
              Why Choose Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-500 transition">
              Contact Us
            </Link>
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
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow text-green-700 font-medium">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/why-choose-us" onClick={() => setIsOpen(false)}>
              Why Choose Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
