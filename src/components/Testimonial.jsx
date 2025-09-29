import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react"; // modern quote icon

const testimonials = [
  {
    name: "Innocent Joseph (Head, NipeX)",
    message:
      "GLEEFIELD demonstrated outstanding professionalism and a commitment to excellence through our engagement. Their ability to deliver high-quality solutions as reinforced their reputation has a trusted partner in business consultancy and management",
    // image: client2,
  },
  {
    name: "Abiodun",
    message:
      "Thanks a lot, GLEEFIELD. We really enjoyed your training. We look forward to doing more business with your company soon. Regards.",
    // image: client1,
  },
  {
    name: "Bello",
    message:
      "Excellent Service delivery. The training organization was very professional and facilitator was practical in delivery.",
    // image: client3,
  },
];

const Testimonial = () => {
  return (
    <section className="relative bg-gradient-to-t from-[#009B6E] to-[#007A55] py-20 overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-repeat"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          What Our Clients Say
        </motion.h2>

        {/* <p className="text-white/80 mb-12 max-w-2xl mx-auto">
          Hear from our happy customers who love the Serene experience.
        </p> */}

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-white/90 backdrop-blur-md text-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-6 h-6 text-[#009B6E]/70" />

              {/* User info */}
              <div className="flex items-center mb-4">
                {/* <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-[#009B6E]"
                /> */}
                <div className="text-left">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>

              {/* Review text */}
              <p className="text-gray-700 leading-relaxed">
                {testimonial.message}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
