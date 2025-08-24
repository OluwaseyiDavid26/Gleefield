import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <CoreValues />
              <Services />
              {/* <ProjectsSection /> */}
              <Vision />
              <WhatSetsUsApart />
              <Testimonial />

              <Contact />
              <ScrollToTop />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
