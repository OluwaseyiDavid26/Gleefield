import React from "react";
import { motion } from "framer-motion";
import azureImg from "../assets/hero-14.jpg";

// Animation variants
const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const About = () => {
  return (
    <section
      className="relative bg-gradient-to-r from-[#009b6f69] to-[#007A55] py-20 overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 relative z-10">
        {/* LEFT SIDE: TEXT */}
        <motion.div
          className="flex-1 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Fancy Small Title with Stroke Line */}
          <motion.div
            className="mb-6 flex items-center gap-4"
            variants={textVariant}
            custom={0.2}
          >
            <div className="h-[2px] w-12 bg-white/60"></div>
            <span className="uppercase tracking-widest text-sm font-semibold text-green-100">
              About Us
            </span>
            <div className="h-[2px] flex-1 bg-white/20"></div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold leading-snug mb-6"
            variants={textVariant}
            custom={0.4}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-green-100 to-green-300">
              Gleefield Global Services Limited
            </span>
          </motion.h2>

          {/* Sub Heading */}
          <motion.h3
            className="text-xl md:text-2xl font-semibold text-green-50 mb-6"
            variants={textVariant}
            custom={0.6}
          >
            A strategy-led consulting firm providing end-to-end business
            management solutions for a rapidly changing world.
          </motion.h3>

          {/* Paragraph */}
          <motion.p
            className="text-base md:text-lg text-green-50/90 leading-7"
            variants={textVariant}
            custom={0.8}
          >
            We are dedicated to helping businesses grow smarter, operate better,
            and lead with clarity. With deep insights into market shifts,
            organizational needs, and global trends, we partner with clients to
            solve real problems, unlock new value, and build resilient systems.
            <br /> <br />
            Every engagement is driven by global expertise, local relevance, and
            an unwavering commitment to excellence.
          </motion.p>
        </motion.div>

        {/* RIGHT SIDE: IMAGE */}
        <motion.div
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="absolute -top-6 -right-6 w-40 h-40 border-4 border-green-200/40 rounded-lg -z-0"></div>
          <img
            src={azureImg}
            alt="About Gleefield"
            className="rounded-2xl shadow-2xl max-w-md w-full relative z-10 transform hover:scale-105 transition duration-500"
          />
        </motion.div>
      </div>

      {/* Decorative gradient circles with floating animation */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -z-0"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-green-900/20 rounded-full blur-3xl -z-0"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      ></motion.div>
    </section>
  );
};

export default About;
