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
import Events from "./components/Events";
import UploadForm from "./components/UploadForm";
// import AdminPage from "./pages/AdminPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        {/* Home route */}
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
              <Footer /> {/* Footer inside home route */}
            </>
          }
        />

        {/* Admin route */}
        <Route
          path="/admin"
          element={
            <>
              <AdminPage /> {/* Admin page contains its own footer */}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
