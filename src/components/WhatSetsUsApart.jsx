import React from "react";
import { Sparkles, Star, ShieldCheck, Layers } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Sparkles, title: "Business Intelligence" },
  { icon: Star, title: "Personalized Support" },
  { icon: ShieldCheck, title: "Customized Training Support" },
  { icon: Layers, title: "Integrated Solutions" },
];

function WhatSetsUsApart() {
  return (
    <section className="py-20 bg-white" id="why-choose-us">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-green-700 font-extrabold uppercase tracking-wide text-3xl sm:text-4xl mb-4">
          What Sets Us Apart
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
          Let’s turn ambition into action. Our services are designed to help
          businesses grow smarter, move faster, and lead boldly.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Animated Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-green-100 to-green-200"
                >
                  <Icon className="w-8 h-8 text-green-700" />
                </motion.div>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 text-lg">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatSetsUsApart;
