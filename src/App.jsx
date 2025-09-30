// // src/App.jsx
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { useState } from "react";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import CoreValues from "./components/CoreValues";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Vision from "./components/Vision";
// import Services from "./components/Services";
// import WhatSetsUsApart from "./components/WhatSetsUsApart";
// import Footer from "./components/Footer";
// import Testimonial from "./components/Testimonial";
// import ScrollToTop from "./components/ScrollToTop";
// import Events from "./components/Events";

// import AdminPage from "./pages/AdminPage";
// import AdminLogin from "./pages/AdminLogin";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <Router>
//       <Navbar />
//       <ScrollToTop />
//       <Routes>
//         {/* Public route */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <About />
//               <CoreValues />
//               <Services />
//               <Vision />
//               <Events />
//               <WhatSetsUsApart />
//               <Testimonial />
//               <Contact />
//               <Footer />
//             </>
//           }
//         />

//         {/* Admin routes */}
//         <Route
//           path="/admin"
//           element={
//             isAuthenticated ? (
//               <AdminPage />
//             ) : (
//               <Navigate to="/admin/login" replace />
//             )
//           }
//         />

//         <Route
//           path="/admin/login"
//           element={
//             isAuthenticated ? (
//               <Navigate to="/admin" replace />
//             ) : (
//               <AdminLogin onLogin={() => setIsAuthenticated(true)} />
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoreValues from "./components/CoreValues";
import About from "./components/About";
import Contact from "./components/Contact";
import Vision from "./components/Vision";
import Services from "./components/Services";
import WhatSetsUsApart from "./components/WhatSetsUsApart";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import ScrollToTop from "./components/ScrollToTop";
import Events from "./components/Events";

import AdminPage from "./pages/AdminPage";
import AdminLogin from "./pages/AdminLogin";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    checkSession();

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth state changed:", event, session);
        setIsAuthenticated(!!session);
        setIsLoading(false);
      }
    );

    // Cleanup subscription
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const checkSession = async () => {
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error("Session check error:", error);
      }

      console.log("Current session:", session);
      setIsAuthenticated(!!session);
    } catch (error) {
      console.error("Error checking session:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#008A5E] to-[#00B273]">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <CoreValues />
              <Services />
              <Vision />
              <Events />
              <WhatSetsUsApart />
              <Testimonial />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/admin"
          element={
            isAuthenticated ? (
              <AdminPage isAuthenticated={isAuthenticated} />
            ) : (
              <Navigate to="/admin/login" replace />
            )
          }
        />

        <Route
          path="/admin/login"
          element={
            isAuthenticated ? (
              <Navigate to="/admin" replace />
            ) : (
              <AdminLogin onLogin={() => setIsAuthenticated(true)} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
