import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Briefcase,
  Lightbulb,
  Megaphone,
  Plane,
  Users,
} from "lucide-react";

// Services Data
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

// Animation Variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Services() {
  return (
    <section
      className="relative bg-gradient-to-b from-[#003B28] to-[#008A5E] py-20 overflow-hidden"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center 
                  bg-white/10 backdrop-blur-md border border-white/20 
                  p-8 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl 
                  transition duration-300"
                variants={cardVariant}
              >
                {/* Icon Box */}
                <motion.div
                  className="w-20 h-20 bg-white/20 flex items-center justify-center 
                    rounded-xl shadow-md mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  viewport={{ once: true }}
                >
                  <Icon className="w-10 h-10 text-[#00C389]" />
                </motion.div>

                {/* Text */}
                <h4 className="font-semibold text-lg text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Decorative Glow Backgrounds */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-900/30 rounded-full blur-3xl"></div>
    </section>
  );
}

export default Services;
