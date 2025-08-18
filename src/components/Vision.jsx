import React from "react";
import { Eye, Target } from "lucide-react";
import backgroundImage from "../assets/hero-img.png";

function Vision() {
  return (
    <section
      className="relative  bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: `url(${backgroundImage})`, // ✅ Use imported image here
      }}
    >
      {/* Green overlay */}
      <div className="absolute inset-0 bg-green-800 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Vision & Mission
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                <Eye className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Vision</h3>
            </div>
            <p className="text-white text-base leading-relaxed">
              To cultivate a future where farming thrives through innovation and
              collaboration, empowering farmers for sustainable growth.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                <Target className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Mission</h3>
            </div>
            <p className="text-white text-base leading-relaxed">
              To be the backbone of Nigerian farmers by providing finance,
              market access, and sustainable agricultural solutions that drive
              productivity and profitability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
