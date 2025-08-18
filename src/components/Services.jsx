import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const services = [
  {
    title: "Business Development & Growth Strategy",
    description:
      "We help businesses expand sustainably through market analysis, growth frameworks, and innovative strategies tailored to your needs.",
  },
  {
    title: "Business Management & Operations",
    description:
      "From process optimization to operational excellence, we ensure your business runs smoothly and profitably.",
  },
  {
    title: "Consulting & Advisory",
    description:
      "Expert guidance to navigate complex business challenges and make informed decisions.",
  },
  {
    title: "Brand Identity & Communication Strategy",
    description:
      "We create powerful brand strategies and communication plans that resonate with your audience.",
  },
  {
    title: "Corporate Travel Management",
    description:
      "End-to-end management of business travel to reduce costs and improve efficiency.",
  },
  {
    title: "Professional Training & Capacity Building",
    description:
      "Empowering teams with the skills and knowledge required to thrive in today’s competitive environment.",
  },
];

function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-green-700 font-bold uppercase text-sm mb-8">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4 cursor-pointer"
              onClick={() => toggleService(index)}
            >
              {/* Service Header */}
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-black text-lg">
                  {service.title}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-700" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-700" />
                )}
              </div>

              {/* Expanded Content */}
              {openIndex === index && (
                <p className="text-gray-800 mt-3 text-sm leading-relaxed">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
