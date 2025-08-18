import React from "react";
import heroImg from "../assets/hero-img.png";

function Hero() {
  return (
    <section className="bg-white w-full py-46">
      {/* Removed max-width constraint, using full width */}
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-10 px-6 md:px-12 lg:px-20">
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-green-700">
            Guarding Your Growth with Clarity and Direction
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            We are more than a consulting firm, we are your strategic growth
            partner. We combine visionary thinking with actionable strategy and
            hands-on execution to help businesses thrive.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
              Learn More
            </button>
            <button className="border border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={heroImg}
            alt="Hero Illustration"
            className="w-full max-w-xl" // bigger max width for desktop
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
