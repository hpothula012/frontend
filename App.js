import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import Retail from "./pages/Retail";
import SheetMetal from "./pages/SheetMetal";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ATM from "./pages/ATM";
import Enclosures from "./pages/Enclosures";
import Kiosk from "./pages/Kiosk";
import Lab from "./pages/Lab";
import Outdoor from "./pages/Outdoor";
import Parts from "./pages/Parts";
import Railway from "./pages/Railway";
import Steel from "./pages/Steel";
import Telecommunication from "./pages/Telecommunication";
import SuperMarket from "./pages/SuperMarket";
import Fashion from "./pages/Fashion";
import Electronic from "./pages/Electronic";
import './styles.css';

function App() {
  const location = useLocation(); // Get current route path

  return (
    <>
      <Navbar /> {/* Navbar Always Visible */}
      <Routes>
        <Route path="/" element={<Welcome />} /> {/* Default Page */}
        <Route path="/home" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/sheet" element={<SheetMetal />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* Contact Page */}

        {/* Dropdown Links under SheetMetal */}
        <Route path="/sheet/atm" element={<ATM />} />
        <Route path="/sheet/enclosures" element={<Enclosures />} />
        <Route path="/sheet/kiosk" element={<Kiosk />} />
        <Route path="/sheet/lab" element={<Lab />} />
        <Route path="/sheet/outdoor" element={<Outdoor />} />
        <Route path="/sheet/parts" element={<Parts />} />
        <Route path="/sheet/railway" element={<Railway />} />
        <Route path="/sheet/steel" element={<Steel />} />
        <Route path="/sheet/telecommunication" element={<Telecommunication />} />
        <Route path="/retail/super" element={<SuperMarket />} />
        <Route path="/retail/fashion" element={<Fashion />} />
        <Route path="/retail/electronic" element={<Electronic />} />
      </Routes>

      {/* Hide Footer for Contact Page */}
      {location.pathname !== "/contact" && <Footer />}
    </>
  );
}

export default App;
