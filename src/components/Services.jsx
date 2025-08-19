// import React, { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// const services = [
//   {
//     title: "Business Development & Growth Strategy",
//     description:
//       "We help businesses expand sustainably through market analysis, growth frameworks, and innovative strategies tailored to your needs.",
//   },
//   {
//     title: "Business Management & Operations",
//     description:
//       "From process optimization to operational excellence, we ensure your business runs smoothly and profitably.",
//   },
//   {
//     title: "Consulting & Advisory",
//     description:
//       "Expert guidance to navigate complex business challenges and make informed decisions.",
//   },
//   {
//     title: "Brand Identity & Communication Strategy",
//     description:
//       "We create powerful brand strategies and communication plans that resonate with your audience.",
//   },
//   {
//     title: "Corporate Travel Management",
//     description:
//       "End-to-end management of business travel to reduce costs and improve efficiency.",
//   },
//   {
//     title: "Professional Training & Capacity Building",
//     description:
//       "Empowering teams with the skills and knowledge required to thrive in today’s competitive environment.",
//   },
// ];

// function Services() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleService = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-green-700 font-bold uppercase text-sm mb-8">
//           Our Services
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="border-b border-gray-300 pb-4 cursor-pointer"
//               onClick={() => toggleService(index)}
//             >
//               {/* Service Header */}
//               <div className="flex justify-between items-center">
//                 <h3 className="font-semibold text-black text-lg">
//                   {service.title}
//                 </h3>
//                 {openIndex === index ? (
//                   <ChevronUp className="w-5 h-5 text-gray-700" />
//                 ) : (
//                   <ChevronDown className="w-5 h-5 text-gray-700" />
//                 )}
//               </div>

//               {/* Expanded Content */}
//               {openIndex === index && (
//                 <p className="text-gray-800 mt-3 text-sm leading-relaxed">
//                   {service.description}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;

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
        <h2 className="text-green-700 font-bold uppercase text-sm mb-4">
          Our Services
        </h2>
        <h3 className="text-2xl font-bold text-gray-900 mb-12">
          What We Offer
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                {/* Icon Circle */}
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-green-700" />
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
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
