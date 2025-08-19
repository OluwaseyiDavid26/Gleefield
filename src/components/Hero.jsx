import React from "react";
import heroImg from "../assets/hero-img.png";

function Hero() {
  return (
    <section
      className="bg-white w-full h-[800px] py-46 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Removed max-width constraint, using full width */}
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-10 px-6 md:px-12 lg:px-20">
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-green-700">
            Guarding Your Growth <br /> with Clarity and Direction
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            We are more than a consulting firm, we are your strategic growth
            partner. <br /> We combine visionary thinking with actionable
            strategy and hands-on <br /> execution to help businesses thrive.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Side - Image (removed, background is used instead) */}
        {/* <div className="flex-1 flex justify-center">
          <img
            src={heroImg}
            alt="Hero Illustration"
            className="w-full h-[500px] rounded-2xl"
          />
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
