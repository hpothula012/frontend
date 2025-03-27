import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../contact.css";

const Contact = () => {
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
    <div>
      <div className="contactHeader">
        <img src="/cs.jpg" alt="Contact US" />
      </div>
      <div className="contact">
        <div style={{ textAlign: "center" }}>
          <h1>Contact Info</h1>
          <ul className="info">
            <img src="/location.jpg" alt="location" />
            <li style={{ fontFamily: "Montserrat", color: "#2C2C2C" }}>
              # site no 36 & 37 yelachaguppe village,<br />
              Thavarekere hobli,<br />
              Bengaluru – 562130<br />
            </li>
            <img src="/call.jpg" alt="call" />
            <li style={{ fontFamily: "Montserrat", color: "#2C2C2C" }}>
              +91- 7993413032<br />
              +91- 8106666417<br />
            </li>
            <img src="/mail.jpg" alt="mail" />
            <li style={{ fontFamily: "Montserrat", color: "#2C2C2C" }}>
              indofurgroup@gmail.com<br />
            indofur.md@gmail.com<br />
              salesindofur@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="touch">
        <h1>GET IN TOUCH</h1>
        <form className="cform" onSubmit={sendMessage}>
          <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} style={inputStyle} />
          <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} style={inputStyle} />
          <br />
          <input type="tel" name="telephone" placeholder="Telephone" required value={formData.telephone} onChange={handleChange} style={inputStyle} />
          <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} style={inputStyle} />
          <br />
          <textarea name="message" placeholder="Message" required value={formData.message} onChange={handleChange} style={textareaStyle}></textarea>
          <br />
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
        {popupVisible && (
          <div style={popupStyle}>
            <p>✅ Your message has been sent successfully!</p>
            <button onClick={() => setPopupVisible(false)} style={closeButtonStyle}>Close</button>
          </div>
        )}
      </div>
      <div style={{ height: "250px", width: "100%" }}>
        <MapContainer center={[12.9716, 77.5946]} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[12.9716, 77.5946]}>
            <Popup>Bangalore, Karnataka</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contact;
