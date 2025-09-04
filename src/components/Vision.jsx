import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";
import { motion } from "framer-motion";
import bgImage from "../assets/hero-img.png"; // adjust path

const Vision = () => {
  const visionMission = [
    {
      title: "Vision",
      description: "To become a global business enabler",
      icon: <FaEye size={26} className="text-green-700" />,
    },
    {
      title: "Mission",
      description:
        "To deliver smart, scalable solutions that keep businesses thriving",
      icon: <FaBullseye size={26} className="text-green-700" />,
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900/70"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-extrabold mb-16"
        >
          Our Vision & Mission
        </motion.h2>

        {/* Vision & Mission Boxes */}
        <div className="grid md:grid-cols-2 gap-10">
          {visionMission.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
