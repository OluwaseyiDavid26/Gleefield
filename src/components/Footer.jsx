import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/Logo-Name-White-1.png"; // your logo

const Footer = () => {
  return (
    <footer className="bg-[#009B6E] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* LOGO + TAGLINE + SOCIAL ICONS */}
        <div>
          <img src={logo} alt="Gleefield Logo" className="h-12 mb-6" />
          <p className="text-sm mb-8 max-w-xs">
            We’re here to guide you — clearly, calmly, and with direction you
            can trust.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaTwitter size={22} />
            </a>
          </div>
        </div>

        {/* OUR SERVICES */}
        <div>
          <h3 className="font-bold mb-4">OUR SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>Business Development & Growth Strategy</li>
            <li>Consulting & Advisory</li>
            <li>Corporate Travel Management</li>
            <li>Business Management & Operations</li>
            <li>Brand Identity & Communication Strategy</li>
            <li>Professional Training & Capacity Building</li>
          </ul>
        </div>

        {/* CONTACT US */}
        <div>
          <h3 className="font-bold mb-4">CONTACT US</h3>
          <div className="flex items-center space-x-3 mb-3">
            <FaMapMarkerAlt className="text-white w-5 h-5" />
            <span className="text-sm">Abuja, Nigeria</span>
          </div>
          <div className="flex items-center space-x-3 mb-3">
            <FaEnvelope className="text-white w-5 h-5" />
            <a
              href="mailto:info@gleefield.com"
              className="text-sm hover:underline"
            >
              info@gleefield.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-white w-5 h-5" />
            <a href="tel:+2349136450244" className="text-sm hover:underline">
              +2349136450244
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10  pt-4 text-center text-sm">
        © Copyright Gleefield {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
