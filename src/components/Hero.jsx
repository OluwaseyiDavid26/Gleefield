import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import card1 from "../assets/hero-1.jpg";
import card2 from "../assets/hero-2.jpg";
import card3 from "../assets/hero-3.jpg";
import card4 from "../assets/hero-4.jpg";
import card5 from "../assets/hero-5.jpg";
import card6 from "../assets/hero-6.jpg";
import card7 from "../assets/hero-7.jpg";
import card8 from "../assets/hero-8.jpg";
import card9 from "../assets/hero-13.jpg";
import card10 from "../assets/hero-10.jpg";
import card11 from "../assets/hero-11.jpg";
import card12 from "../assets/hero-12.jpg";

const images = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
];

// Variants for staggered grid animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Text animation variants
const textContainer = {
  hidden: { opacity: 0, x: -200 }, // slide from left
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Hero() {
  const initialCards = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    img: images[i % images.length],
  }));

  const [cards, setCards] = useState(initialCards);

  // Shuffle function
  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Shuffle every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => shuffleArray(prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full min-h-screen flex items-center bg-gradient-to-t from-[#003B28] to-[#008A5E] py-30"
      id="home"
    >
      <div className="w-full flex flex-col md:flex-row items-center gap-10   px-8 md:px-12 lg:px-20">
        {/* Text Section */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="flex-1 text-center md:text-left"
        >
          <motion.h1
            variants={textItem}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white"
          >
            Guarding Your Growth <br /> with Clarity and Direction
          </motion.h1>

          <motion.p
            variants={textItem}
            className="mt-4 text-white/90 text-base sm:text-lg"
          >
            We are more than a consulting firm, we are your strategic growth
            partner. <br /> We combine visionary thinking with actionable
            strategy and hands-on execution to help businesses thrive.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={textItem}
            className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start"
          >
            <motion.a
              href="#about" // 🔗 change to your actual route or section
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#008236] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition text-center"
            >
              Learn More
            </motion.a>

            <motion.a
              href="#contact" // 🔗 change to your actual route or section
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#008236] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-800 transition text-center"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>{" "}
        {/* ✅ properly closes text motion.div */}
        {/* Image Grid Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 w-full"
        >
          <motion.div
            layout
            className="grid grid-cols-4 grid-rows-4 gap-2 max-w-[400px] sm:max-w-[500px] mx-auto"
          >
            {cards.map((card) => (
              <motion.div
                key={card.id}
                variants={item}
                layout
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="aspect-square bg-cover bg-center rounded-md shadow-md"
                style={{ backgroundImage: `url(${card.img})` }}
              />
            ))}
          </motion.div>
        </motion.div>{" "}
        {/* ✅ properly closes image grid motion.div */}
      </div>
    </section>
  );
}

export default Hero;
