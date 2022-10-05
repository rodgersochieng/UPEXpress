import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer /footer";
import Navbar from "./Navbar/Navbar";
import AboutUs from "./Aboutus/About";
import Home from "./HomePage/Home";
import Booking from "./BookingPage/Booking";
import Services from "./ServicesPage/Services";
// import "./HomePage/Home.css";

import "./Navbar/Navbar.css";
import "./Footer /footer";
import "/home/moringa/Desktop/React-project/upexpress/src/Footer /footer.css";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
