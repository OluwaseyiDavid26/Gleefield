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

//   // Show a window of 4 cards max (like carousel)
//   const visibleCards = events.slice(activeIndex, activeIndex + 4).length
//     ? events.slice(activeIndex, activeIndex + 4)
//     : [
//         ...events.slice(activeIndex),
//         ...events.slice(0, 4 - (events.length - activeIndex)),
//       ];

//   return (
//     <section
//       id="events"
//       className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden"
//       style={{
//         backgroundImage: bgImage ? `url(${bgImage})` : "",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       <div className="relative z-10 max-w-7xl w-full px-6 lg:px-12">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="mb-12 text-center lg:text-left"
//         >
//           <h4 className="text-4xl uppercase tracking-wide text-gray-300">
//             Our Events
//           </h4>
//           <h2 className="text-4xl lg:text-5xl font-bold mt-2">
//             Experiences That Transform
//           </h2>
//           {/* <p className="text-lg text-gray-200 mt-4 max-w-xl">
//             At Gleefield Global Services, every event is designed to inspire,
//             connect, and create lasting value. We bring strategy, creativity,
//             and global perspective together to help businesses and individuals
//             explore new possibilities, embrace opportunities, and lead with
//             impact.
//           </p> */}
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
//               <h2 className="text-5xl font-extrabold mb-4">
//                 {activeEvent.title}
//               </h2>
//               <p className="text-lg text-gray-200 mb-8">
//                 {activeEvent.description || ""}
//               </p>

//               {activeEvent.gallery?.length > 0 && (
//                 <button
//                   onClick={() => openGallery(activeEvent.gallery)}
//                   className="border border-white px-8 py-3 rounded-full font-medium hover:bg-[#007a5] hover:border-[#007a5] transition"
//                 >
//                   Discover More
//                 </button>
//               )}
//             </motion.div>
//           )}

//           {/* Right: Event Cards (carousel style) */}
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
//                     <div className="absolute inset-0 bg-black/30 flex items-end">
//                       <h3 className="p-4 text-lg font-semibold">
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

//               {/* Progress bar */}
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

  // Show 4 cards max (carousel window)
  const visibleCards = events.slice(activeIndex, activeIndex + 4).length
    ? events.slice(activeIndex, activeIndex + 4)
    : [
        ...events.slice(activeIndex),
        ...events.slice(0, 4 - (events.length - activeIndex)),
      ];

  return (
    <section
      id="events"
      className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl w-full px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center lg:text-left"
        >
          <h4 className="text-4xl uppercase tracking-wide text-gray-300">
            Our Events
          </h4>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2">
            Experiences That Transform
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Active Event Details (desktop only) */}
          {activeEvent && (
            <motion.div
              key={activeEvent.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block"
            >
              <h2 className="text-5xl font-extrabold mb-4">
                {activeEvent.title}
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                {activeEvent.description || ""}
              </p>

              {activeEvent.gallery?.length > 0 && (
                <button
                  onClick={() => openGallery(activeEvent.gallery)}
                  className="border border-white px-8 py-3 rounded-full font-medium hover:bg-[#007a5] hover:border-[#007a5] transition"
                >
                  Discover More
                </button>
              )}
            </motion.div>
          )}

          {/* Right: Event Cards */}
          <div className="relative w-full">
            <div className="flex flex-col lg:flex-row lg:space-x-4 lg:overflow-visible space-y-6 lg:space-y-0">
              {visibleCards.map((event, index) => {
                const main = event?.gallery?.[0];
                const globalIndex = (activeIndex + index) % events.length;
                return (
                  <div
                    key={event.id}
                    className="w-full lg:w-[220px] flex-shrink-0"
                  >
                    {/* Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      onClick={() => setActiveIndex(globalIndex)}
                      className={`rounded-xl overflow-hidden shadow-lg relative ${
                        globalIndex === activeIndex
                          ? "ring-4 ring-[#007a5]"
                          : ""
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
                      <div className="absolute inset-0 bg-black/30 flex items-end">
                        <h3 className="p-4 text-lg font-semibold">
                          {event.title}
                        </h3>
                      </div>
                    </motion.div>

                    {/* Discover More btn BELOW card (mobile only) */}
                    {event.gallery?.length > 0 && (
                      <div className="lg:hidden flex justify-center mt-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openGallery(event.gallery);
                          }}
                          className="w-full border border-white px-6 py-2 rounded-full font-medium hover:bg-[#007a5] hover:border-[#007a5] transition"
                        >
                          Discover More
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Arrows + Progress (desktop only) */}
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

              {/* Progress bar */}
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
