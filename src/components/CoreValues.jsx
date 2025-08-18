import React from "react";
import { FaShieldAlt, FaAward, FaHandshake } from "react-icons/fa"; // Font Awesome icons

const coreValues = [
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty, transparency, and ethical conduct in everything we do.",
    icon: <FaShieldAlt size={40} className="text-[#009B6E]" />,
  },
  {
    title: "Excellence",
    description:
      "We strive for the highest quality in our work, delivering outstanding results that exceed expectations.",
    icon: <FaAward size={40} className="text-[#009B6E]" />,
  },
  {
    title: "Partnership",
    description:
      "We collaborate closely with our clients, building trust and long-term relationships for mutual success.",
    icon: <FaHandshake size={40} className="text-[#009B6E]" />,
  },
];

const CoreValues = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
