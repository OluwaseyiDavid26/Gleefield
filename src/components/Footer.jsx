import React from "react";
import logo from "../assets/Logo-Name-White-1.png"; // your logo
import instagramIcon from "../assets/icons8-instagram-logo-50.png"; // Instagram icon
import linkedinIcon from "../assets/icons8-linkedin-50.png"; // LinkedIn icon
import facebookIcon from "../assets/icons8-facebook-logo-50.png"; // Facebook icon
import twitterIcon from "../assets/icons8-twitter-bird-50.png"; // Twitter icon
import locationIcon from "../assets/locatio-icon.png"; // fixed typo
import emailIcon from "../assets/email-icon.png";
import phoneIcon from "../assets/phone-icon.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#009B6E] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* LOGO + TAGLINE + SOCIAL ICONS */}
        <div>
          <img src={logo} alt="Gleefield Logo" className="h-12 mb-4" />
          <p className="text-sm mb-6 max-w-xs">
            We’re here to guide you — clearly, calmly, and with direction you
            can trust.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitterIcon}
                alt="Twitter"
                className="w-6 h-6 hover:opacity-80"
              />
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
            <img src={locationIcon} alt="Location" className="w-5 h-5" />
            <span className="text-sm">Lagos, Nigeria</span>
          </div>
          <div className="flex items-center space-x-3 mb-3">
            <img src={emailIcon} alt="Email" className="w-5 h-5" />
            <span className="text-sm">info@gleefield.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
            <span className="text-sm">+2349136450244</span>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm">
        © Copyright Gleefield {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
