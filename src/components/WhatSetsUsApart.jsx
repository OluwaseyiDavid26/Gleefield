import React from "react";
import { Sparkles, Star, ShieldCheck, Layers } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Business Intelligence",
  },
  {
    icon: Star,
    title: "Personalized Support",
  },
  {
    icon: ShieldCheck,
    title: "Customized Training Support",
  },
  {
    icon: Layers,
    title: "Integrated Solutions",
  },
];

function WhatSetsUsApart() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-green-700 font-bold uppercase tracking-wide text-3xl mb-3">
          What Sets Us Apart
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
          Let’s turn ambition into action. Our services are designed to help
          businesses like yours grow smarter, move faster, and lead boldly.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-center gap-5">
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-green-100">
                  <Icon className="w-7 h-7 text-green-700" />
                </div>

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
