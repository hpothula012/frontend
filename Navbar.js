import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [retailOpen, setRetailOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <nav style={navStyle}>
      <div style={logoContainer}>
        <img src="/logo.png" alt="Company Logo" style={logoStyle} />
        <h1 style={{ marginLeft: "5px" }}>INDOFUR</h1>
      </div>

      <ul style={ulStyle}>
        <li>
          <a href="/profile.pdf" download="Profile.pdf">
            <button style={downloadButton}>Download Profile</button>
          </a>
        </li>
        <li><Link to="/home" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About Us</Link></li>

        {/* Retail Fixtures Dropdown */}
        <li 
          onMouseEnter={() => setRetailOpen(true)}
          onMouseLeave={() => setRetailOpen(false)}
          style={liStyle}
        >
          <Link to="/retail" style={linkStyle}>Retail Fixtures ▾</Link>
          {retailOpen && (
            <ul style={dropdownStyle}>
              <li><Link to="/retail/super" style={dropdownItem}>Super Market</Link></li>
              <li><Link to="/retail/electronic" style={dropdownItem}>Electronic Stores</Link></li>
              <li><Link to="/retail/fashion" style={dropdownItem}>Fashion Stores</Link></li>
            </ul>
          )}
        </li>

        {/* Sheet Metal Assembles Dropdown */}
        <li 
          onMouseEnter={() => setSheetOpen(true)}
          onMouseLeave={() => setSheetOpen(false)}
          style={liStyle}
        >
          <Link to="/sheet" style={linkStyle}>Sheet Metal Assembles ▾</Link>
          {sheetOpen && (
            <ul style={dropdownStyle}>
              <li><Link to="/sheet/outdoor" style={dropdownItem}>Sheet Metal Outdoor/Indoor<br></br> Cabinets</Link></li>
              <li><Link to="/sheet/enclosures" style={dropdownItem}>Sheet Metal Enclosures</Link></li>
              <li><Link to="/sheet/parts" style={dropdownItem}>Sheet Metal Parts & Assemblies</Link></li>
              <li><Link to="/sheet/atm" style={dropdownItem}>Enclosures for ATM Machines</Link></li>
              <li><Link to="/sheet/telecommunication" style={dropdownItem}>Cabinet for Tele-Communications</Link></li>
              <li><Link to="/sheet/kiosk" style={dropdownItem}>Sheet Metal Enclosures for Kiosk</Link></li>
              <li><Link to="/sheet/lab" style={dropdownItem}>Laboratory Furniture (Medical Equipments)</Link></li>
              <li><Link to="/sheet/steel" style={dropdownItem}>Stainless Steel Cabinets</Link></li>
              <li><Link to="/sheet/railway" style={dropdownItem}>Railway Applications</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/facilities" style={linkStyle}>Facilities</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

// ✅ Styles
const navStyle = { 
  padding: "10px", 
  background: "#fff", 
  color: "#333", 
  display: "flex", 
  alignItems: "center", 
  position: "relative",
  width: "100%",
  zIndex: 10
};
const logoContainer = { 
  display: "flex", 
  alignItems: "center", 
  gap: "5px", 
  marginLeft: "13%" 
};
const logoStyle = { height: "25px" };
const ulStyle = { 
  display: "flex", 
  listStyle: "none", 
  gap: "15px", 
  marginLeft: "auto", 
  alignItems: "center"
};
const liStyle = { 
  position: "relative", 
  padding: "10px", 
  cursor: "pointer" 
};
const linkStyle = { 
  color: "#333", 
  textDecoration: "none", 
  fontWeight: "bold" 
};
const dropdownStyle = {
  position: "absolute",
  top: "100%",  // Places it right below the menu item
  left: 0,
  background: "#fff",
  listStyle: "none",
  padding: "10px",
  border: "1px solid #ddd",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
  minWidth: "250px", // Increased width for better spacing
  display: "flex",
  flexDirection: "column" // Ensures items appear in a vertical list
};

const dropdownItem = {
  padding: "8px 12px",
  display: "block",  // Ensures each item is on a new line
  color: "#333",
  textDecoration: "none",
  whiteSpace: "nowrap",
  width: "100%" // Ensures full width to prevent side-by-side layout
};

const downloadButton = {
  borderRadius: "5px",
  color: "red",
  padding: "5px 10px",
  border: "1px solid red",
  background: "transparent",
  cursor: "pointer"
};

export default Navbar;
