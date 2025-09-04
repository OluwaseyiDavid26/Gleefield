import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // install lucide-react if not already

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#008A5E] text-white p-3 rounded-full shadow-lg hover:bg-[#006b4b] transition duration-300"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
