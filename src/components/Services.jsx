import React from "react";
import {
  TrendingUp,
  Briefcase,
  Lightbulb,
  Megaphone,
  Plane,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Business Development & Growth Strategy",
    description:
      "We help businesses expand sustainably through market analysis, growth frameworks, and innovative strategies tailored to your needs.",
    icon: TrendingUp,
  },
  {
    title: "Business Management & Operations",
    description:
      "From process optimization to operational excellence, we ensure your business runs smoothly and profitably.",
    icon: Briefcase,
  },
  {
    title: "Consulting & Advisory",
    description:
      "Expert guidance to navigate complex business challenges and make informed decisions.",
    icon: Lightbulb,
  },
  {
    title: "Brand Identity & Communication Strategy",
    description:
      "We create powerful brand strategies and communication plans that resonate with your audience.",
    icon: Megaphone,
  },
  {
    title: "Corporate Travel Management",
    description:
      "End-to-end management of business travel to reduce costs and improve efficiency.",
    icon: Plane,
  },
  {
    title: "Professional Training & Capacity Building",
    description:
      "Empowering teams with the skills and knowledge required to thrive in today’s competitive environment.",
    icon: Users,
  },
];

function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-green-700 font-bold uppercase text-3xl mb-6">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center shadow-md">
                    <Icon className="w-10 h-10 text-green-700" />
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
