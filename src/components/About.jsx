import React from "react";
import azureImg from "../assets/about-img.png"; // replace with your image path

const About = () => {
  return (
    <section className="bg-[#009B6E] py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* LEFT SIDE: TEXT */}
        <div className="flex-1 text-white">
          <h3 className="uppercase font-semibold text-sm tracking-widest mb-2">
            Azure
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Empowering Businesses with Microsoft Azure Cloud Solutions
          </h2>
          <p className="text-base leading-relaxed">
            We help organizations leverage the power of Microsoft Azure to
            innovate, scale, and operate efficiently in the cloud. From
            infrastructure migration to AI integration, our Azure solutions are
            designed to meet your unique business needs while ensuring security,
            cost optimization, and performance excellence.
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
