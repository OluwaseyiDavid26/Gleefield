import React from "react";
import { Sparkles, Star, ShieldCheck, Layers } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-6 h-6 text-green-600" />,
    title: "Business Intelligence",
  },
  {
    icon: <Star className="w-6 h-6 text-green-600" />,
    title: "Personalized Support",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
    title: "Customized Training Support",
  },
  {
    icon: <Layers className="w-6 h-6 text-green-600" />,
    title: "Integrated Solutions",
  },
];

function WhatSetsUsApart() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-green-800 font-bold uppercase text-sm mb-3">
          What Sets Us Apart
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Let’s turn ambition into action. Our services are designed to help
          businesses like yours grow smarter, move faster, and lead boldly.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 border-b border-gray-200 pb-4"
            >
              <div className="flex-shrink-0 bg-green-100 p-2 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-black text-lg">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatSetsUsApart;
