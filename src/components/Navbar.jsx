import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import logo from "../assets/Logo-Name-Black-2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 p-1 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-base space-x-8 text-[#008A5E] font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-[#006b4b]"
              >
                {link.name}
              </a>
              {/* <a
                href={link.href}
                className="relative transition-colors duration-300 hover:text-[#006b4b] 
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#008A5E] 
                after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a> */}
            </li>
          ))}
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
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 rounded-md focus:outline-none"
        >
          <Menu className="w-6 h-6 text-green-700" />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-50 flex flex-col p-6"
          >
            {/* Close Button */}
            <button onClick={() => setIsOpen(false)} className="self-end mb-8">
              <X className="w-6 h-6 text-green-700" />
            </button>

            {/* Links */}
            <ul className="flex flex-col space-y-6 text-lg text-[#008A5E] font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[#006b4b] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#008A5E] text-white px-5 py-2 rounded-xl shadow-md hover:bg-[#006b4b] transition duration-300 block text-center"
                >
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Social Icons just beneath Contact Us */}
            <div className="mt-6 flex justify-center space-x-6 text-[#008A5E]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#006b4b] transition-colors"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#006b4b] transition-colors"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#006b4b] transition-colors"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#006b4b] transition-colors"
              >
                <FaTwitter size={22} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
