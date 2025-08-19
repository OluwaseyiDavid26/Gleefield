import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";
import bgImage from "../assets/hero-img.png"; // adjust path

const Vision = () => {
  const visionMission = [
    {
      title: "Vision",
      description: "To become a global business enabler",
      icon: <FaEye size={40} className="text-white" />,
    },
    {
      title: "Mission",
      description:
        "To deliver smart, scalable solutions that keep businesses thrivin",
      icon: <FaBullseye size={40} className="text-white" />,
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900/50"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Vision & Mission
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {visionMission.map((item, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg text-left flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/30 mr-3">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <p className="text-white/90">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
