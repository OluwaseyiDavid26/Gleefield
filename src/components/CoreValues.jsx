import React from "react";
import { motion } from "framer-motion";

import integrity from "../assets/int.jpg";
import excellence from "../assets/exc.jpg";
import handshake from "../assets/h3.jpg";

// Values Data
const coreValues = [
  {
    title: "Integrity",
    description:
      "Our operations are guided by unwavering integrity, marked by transparency and best ethical standards.",
    image: integrity,
  },
  {
    title: "Excellence",
    description:
      "Excellence defines our approach, enabling us to provide solutions of enduring value and distinction.",
    image: excellence,
  },
  {
    title: "Partnership",
    description:
      "Through close collaboration, we establish trusted, long-term relationships that create sustainable value for our clients.",
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
              <div className="w-20 h-20 mx-auto mb-6 overflow-hidden  border-green-200">
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
