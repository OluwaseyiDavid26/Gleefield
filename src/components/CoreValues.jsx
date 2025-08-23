import React from "react";
import { motion } from "framer-motion";

import integrity from "../assets/integrity-2-removebg-preview.png";
import excellence from "../assets/excellence-2.jpg";
import handshake from "../assets/handshake-2.png";

// Values Data
const coreValues = [
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty, transparency, and ethical conduct in everything we do.",
    image: integrity,
  },
  {
    title: "Excellence",
    description:
      "We strive for the highest quality in our work, delivering outstanding results that exceed expectations.",
    image: excellence,
  },
  {
    title: "Partnership",
    description:
      "We collaborate closely with our clients, building trust and long-term relationships for mutual success.",
    image: handshake,
  },
];

// Animation Variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const CoreValues = () => {
  return (
    <section className="bg-gray-100 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl hover:scale-105 transition duration-300"
              variants={cardVariant}
            >
              {/* Image */}
              <div className="w-20 h-20 mx-auto mb-6 overflow-hidden rounded-full border-4 border-green-500">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
