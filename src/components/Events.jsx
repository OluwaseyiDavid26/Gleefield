// // src/components/Events.jsx
// import { useEffect, useState } from "react";
// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";
// import { motion } from "framer-motion";
// import { supabase } from "../supabaseClient";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// function Events() {
//   const [events, setEvents] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       const { data, error } = await supabase
//         .from("events")
//         .select("*")
//         .order("created_at", { ascending: false });

//       if (error) console.error("Error fetching events:", error);
//       else setEvents(data || []);
//     };
//     fetchEvents();
//   }, []);

//   const nextSlide = () => {
//     setActiveIndex((prev) => (prev + 1) % events.length);
//   };

//   const prevSlide = () => {
//     setActiveIndex((prev) => (prev - 1 + events.length) % events.length);
//   };

//   const openGallery = (gallery) => {
//     if (!gallery?.length) return;
//     Fancybox.show(
//       gallery.map((img) => ({ src: img, thumb: img })),
//       { loop: true }
//     );
//   };

//   const activeEvent = events[activeIndex];
//   const bgImage = activeEvent?.gallery?.[0] ?? null;

//   const visibleCards = events.slice(activeIndex, activeIndex + 4).length
//     ? events.slice(activeIndex, activeIndex + 4)
//     : [
//         ...events.slice(activeIndex),
//         ...events.slice(0, 4 - (events.length - activeIndex)),
//       ];

//   return (
//     <section
//       id="events"
//       className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden"
//       style={{
//         backgroundImage: bgImage ? `url(${bgImage})` : "",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Content wrapper with margins */}
//       <div className="relative z-10 max-w-6xl mx-auto w-full px-6 lg:px-12">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="mb-12 lg:mb-20 flex flex-col items-center text-center -mt-20"
//         >
//           <h4 className="text-2xl lg:text-3xl  mb-2 uppercase tracking-wide text-gray-300 text-shadow-strong">
//             Our Events
//           </h4>
//           <h2 className="text-3xl lg:text-5xl font-bold mt-3 text-shadow-strong">
//             Experiences That Transform
//           </h2>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left: Active Event Details */}
//           {activeEvent && (
//             <motion.div
//               key={activeEvent.id}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-shadow-strong">
//                 {activeEvent.title}
//               </h2>
//               <p className="text-lg text-gray-200 mb-8 text-shadow-strong">
//                 {activeEvent.description || ""}
//               </p>

//               {/* Show button on desktop here */}
//               {activeEvent.gallery?.length > 0 && (
//                 <button
//                   onClick={() => openGallery(activeEvent.gallery)}
//                   className="hidden lg:inline-block border border-white px-8 py-3 rounded-full font-medium hover:bg-[#007a5] hover:border-[#007a5] transition"
//                 >
//                   Discover More
//                 </button>
//               )}
//             </motion.div>
//           )}

//           {/* Right: Event Cards */}
//           <div className="relative">
//             <div className="flex space-x-4">
//               {visibleCards.map((event, index) => {
//                 const main = event?.gallery?.[0];
//                 const globalIndex = (activeIndex + index) % events.length;
//                 return (
//                   <motion.div
//                     key={event.id}
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     onClick={() => setActiveIndex(globalIndex)}
//                     className={`w-[220px] cursor-pointer rounded-xl overflow-hidden shadow-lg relative ${
//                       globalIndex === activeIndex ? "ring-4 ring-[#007a5]" : ""
//                     }`}
//                   >
//                     {main ? (
//                       <img
//                         src={main}
//                         alt={event.title}
//                         className="w-full h-64 object-cover"
//                       />
//                     ) : (
//                       <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-600">
//                         No Image
//                       </div>
//                     )}
//                     {/* Title overlay */}
//                     <div className="absolute top-0 left-0 right-0 bg-black/40 p-2">
//                       <h3 className="text-lg font-semibold text-shadow-strong">
//                         {event.title}
//                       </h3>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* Arrows + Progress */}
//             <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex items-center space-x-6">
//               <button
//                 onClick={prevSlide}
//                 className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-[#007a5] transition"
//               >
//                 <ChevronLeft />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-[#007a5] transition"
//               >
//                 <ChevronRight />
//               </button>

//               <div className="w-40 h-[2px] bg-white/30 relative">
//                 <div
//                   className="absolute top-0 left-0 h-full bg-[#007a5] transition-all duration-500"
//                   style={{
//                     width: events.length
//                       ? `${((activeIndex + 1) / events.length) * 100}%`
//                       : "0%",
//                   }}
//                 ></div>
//               </div>
//             </div>

//             {/* Mobile-only Discover More btn */}
//             {activeEvent?.gallery?.length > 0 && (
//               <div className="mt-16 block lg:hidden text-center">
//                 <button
//                   onClick={() => openGallery(activeEvent.gallery)}
//                   className="border border-white px-8 py-3 rounded-full font-medium hover:bg-[#007a5] hover:border-[#007a5] transition"
//                 >
//                   Discover More
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Events;
// src/components/Events.jsx
import { useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { motion } from "framer-motion";
import { supabase } from "../supabaseClient";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Events() {
  const [events, setEvents] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error("Error fetching events:", error);
      else setEvents(data || []);
    };
    fetchEvents();
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const openGallery = (gallery) => {
    if (!gallery?.length) return;
    Fancybox.show(
      gallery.map((img) => ({ src: img, thumb: img })),
      { loop: true }
    );
  };

  const activeEvent = events[activeIndex];
  const bgImage = activeEvent?.gallery?.[0] ?? null;

  const visibleCards = events.slice(activeIndex, activeIndex + 4).length
    ? events.slice(activeIndex, activeIndex + 4)
    : [
        ...events.slice(activeIndex),
        ...events.slice(0, 4 - (events.length - activeIndex)),
      ];

  return (
    <section
      id="events"
      className="relative w-full min-h-screen flex items-start lg:items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content wrapper with margins */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 lg:px-12 pt-12 lg:pt-0">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 lg:mb-20 flex flex-col items-center text-center lg:-mt-20"
        >
          <h4 className="text-xl sm:text-2xl lg:text-3xl mb-2 uppercase tracking-wide text-gray-300 drop-shadow-lg">
            Our Events
          </h4>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mt-3 drop-shadow-xl">
            Experiences That Transform
          </h2>
        </motion.div>

        {/* Mobile: stack | Desktop: side by side */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Active Event Details */}
          {activeEvent && (
            <motion.div
              key={activeEvent.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-xl">
                {activeEvent.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-200 mb-8 drop-shadow-md">
                {activeEvent.description || ""}
              </p>

              {/* Show button on desktop */}
              {activeEvent.gallery?.length > 0 && (
                <button
                  onClick={() => openGallery(activeEvent.gallery)}
                  className="hidden lg:inline-block border border-white px-8 py-3 rounded-full font-medium hover:bg-[#007a5] hover:border-[#007a5] transition"
                >
                  Discover More Images
                </button>
              )}
            </motion.div>
          )}

          {/* Right: Event Cards */}
          <div className="relative w-full">
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-6 lg:space-y-0">
              {visibleCards.map((event, index) => {
                const main = event?.gallery?.[0];
                const globalIndex = (activeIndex + index) % events.length;

                const handleCardClick = () => {
                  setActiveIndex(globalIndex);
                  if (event.gallery?.length > 0) {
                    openGallery(event.gallery);
                  }
                };

                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    onClick={handleCardClick}
                    className={`w-full lg:w-[220px] cursor-pointer rounded-xl overflow-hidden shadow-lg relative ${
                      globalIndex === activeIndex ? "ring-4 ring-[#007a5]" : ""
                    }`}
                  >
                    {main ? (
                      <img
                        src={main}
                        alt={event.title}
                        className="w-full h-64 object-cover"
                      />
                    ) : (
                      <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-600">
                        No Image
                      </div>
                    )}
                    {/* Title overlay */}
                    <div className="absolute top-0 left-0 right-0 bg-black/40 p-2">
                      <h3 className="text-lg font-semibold drop-shadow-md">
                        {event.title}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Arrows + Progress (hidden on mobile) */}
            <div className="hidden lg:flex absolute -bottom-14 left-1/2 -translate-x-1/2 items-center space-x-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-[#007a5] transition"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-[#007a5] transition"
              >
                <ChevronRight />
              </button>

              <div className="w-40 h-[2px] bg-white/30 relative">
                <div
                  className="absolute top-0 left-0 h-full bg-[#007a5] transition-all duration-500"
                  style={{
                    width: events.length
                      ? `${((activeIndex + 1) / events.length) * 100}%`
                      : "0%",
                  }}
                ></div>
              </div>
            </div>

            {/* Mobile-only Discover More btn */}
            {activeEvent?.gallery?.length > 0 && (
              <div className="mt-8 block lg:hidden text-center w-full">
                <button
                  onClick={() => openGallery(activeEvent.gallery)}
                  className="border border-white px-8 py-3 rounded-full font-medium hover:bg-[#007a5] hover:border-[#007a5] transition"
                >
                  Discover More Images
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
