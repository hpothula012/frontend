import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons

import "leaflet/dist/leaflet.css";
const footerStyle = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  background: "#333",
  color: "white",
  padding: "20px",
  textAlign: "left",
  position: "relative",
  marginTop: "0px",
  paddingTop: "0px"
};

const listStyle = { listStyle: "none", padding: 0 };
const linkStyle = { color: "white", textDecoration: "none" };
const iconContainerStyle = { display: "flex", gap: "15px", marginTop: "10px" };
const iconStyle = { fontSize: "24px", color: "white", cursor: "pointer" };
const inputStyle = {
  padding: "8px",
  margin: "5px 0",
  width: "100%",
  borderRadius: "5px",
  border: "1px solid #ccc",
};
const textareaStyle = { ...inputStyle, height: "80px" };
const buttonStyle = {
  padding: "10px",
  background: "blue",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
};
const popupStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#fff",
  color: "#333",
  padding: "20px",
  boxShadow: "0 5px 10px rgba(0,0,0,0.3)",
  borderRadius: "5px",
  textAlign: "center",
};
const closeButtonStyle = {
  marginTop: "10px",
  padding: "5px 10px",
  background: "red",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
};

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    subject: "",
    message: "",
  });

  const [popupVisible, setPopupVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setPopupVisible(true);
        setFormData({ name: "", email: "", telephone: "", subject: "", message: "" });
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <footer style={footerStyle}>
      <div>
        <h3>Contact Us</h3>
        <p>Email: <a href="mailto: indofurgroup@gmail.com" style={linkStyle}>indofurgroup@gmail.com</a></p>
        <p>Phone: <a href="tel:+917993413032" style={linkStyle}>+91 7993413032</a></p>
        <p>Location: Bangalore, Karnataka</p>
        
        
      </div>

      <div>
        <h3>Links</h3>
        <ul style={listStyle}>
          <li><Link to="/home" style={linkStyle}>Home</Link></li>
          <li><Link to="/about" style={linkStyle}>About Us</Link></li>
          <li><Link to="/facilities" style={linkStyle}>Facilities</Link></li>
          <li><Link to="/contact" style={linkStyle}>Contact Us</Link></li>
        </ul>
        {/* Social Media Icons */}
        <div style={iconContainerStyle}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook style={iconStyle} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={iconStyle} />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={iconStyle} />
          </a>
        </div>
      </div>

      <div>
        <h3>ENQUIRE US</h3>
        <form className="form" onSubmit={sendMessage}>
          <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} style={inputStyle} />
          <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} style={inputStyle} /><br />
          <input type="tel" name="telephone" placeholder="Telephone" required value={formData.telephone} onChange={handleChange} style={inputStyle} />
          <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} style={inputStyle} /><br />
          <textarea name="message" placeholder="Message" required value={formData.message} onChange={handleChange} style={textareaStyle}></textarea><br />
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </div>

      {popupVisible && (
        <div style={popupStyle}>
          <p>✅ Your message has been sent successfully!</p>
          <button onClick={() => setPopupVisible(false)} style={closeButtonStyle}>Close</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
