import React from "react";
import azureImg from "../assets/about-img.png"; // replace with your image path

const About = () => {
  return (
    <section className="bg-[#009B6E] py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* LEFT SIDE: TEXT */}
        <div className="flex-1 text-white">
          {/* Small Title */}
          <h2 className="uppercase text-3xl font-bold tracking-widest mb-4">
            About Us
          </h2>

          {/* Main Heading */}
          <h2 className="text-xl md:text-2xl font-bold leading-relaxed mb-6">
            Gleefield Global Services Limited is a strategy-led consulting firm
            that provides end-to-end consulting and business management services
            to organizations navigating a rapidly changing world.
          </h2>

          {/* Paragraph */}
          <p className="text-base leading-7 font-normal">
            We are dedicated to helping businesses grow smarter, operate better,
            and lead with clarity. With a deep understanding of market shifts,
            organizational needs, and global business trends, we work alongside
            clients to solve real problems, unlock new value, and build
            resilient systems. With every engagement, we bring global insight,
            local relevance, and a deep commitment to excellence.
          </p>
        </div>

        {/* RIGHT SIDE: IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src={azureImg}
            alt="Azure Cloud Services"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
