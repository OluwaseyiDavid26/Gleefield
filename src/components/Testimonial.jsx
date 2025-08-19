import React from "react";
import client1 from "../assets/image-6.png"; // replace with your images
import client2 from "../assets/image-7.png";
import client3 from "../assets/image-8.png";

const testimonials = [
  {
    name: "Aisha Bello",
    //  role: "Client",
    message:
      "Serene made it so easy to get spa services at home. I love the convenience and professional quality!",
    image: client1,
  },
  {
    name: "David Eze",
    //  role: "Client",
    message:
      "Fast booking, great professionals, and amazing results. Highly recommended for anyone needing wellness care!",
    image: client2,
  },
  {
    name: "Mary Johnson",
    //  role: "Client",
    message:
      "I booked a massage for my mum and she loved it! The app made it super simple and efficient.",
    image: client3,
  },
];

const Testimonial = () => {
  return (
    <section className="bg-[#009B6E] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Testimonials</h2>
        {/* <p className="text-white/90 mb-12">
          Discover a world of vibrant Appointment Booking app with our User
          Friendly Interface
        </p> */}

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
            >
              {/* User photo + name */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-[#009B6E]"
                />
                <div className="text-left">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              {/* Review text */}
              <p className="text-gray-700">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
