import React, { useState, useEffect } from "react";
import "../retail.css";

const images = [
    "/retail1.jpg",
    "/retail2.jpg",
    
];

const Retail = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Apply inline styles to the body
        document.body.style = `
            background-image: url('/retailbg.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background:fixed;
            margin: 0;
            height: 100vh;
            width: 100vw;
        `;

        return () => {
            // Reset body styles when component unmounts (optional)
            document.body.style = "";
        };
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                console.log("Current Image Index:", prevIndex + 1);
                return (prevIndex + 1) % images.length;
            });
        }, 3000); // Change image every 3 seconds
    
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
    
    return (
        <div className="retail-container">
            
            <div className="slideshow">
    {images.map((img, index) => (
        <img
            key={index}
            src={img}
            alt="Retail Slideshow"
            className={index === currentImageIndex ? "active" : ""}
        />
    ))}
    <button className="contact-btn" onClick={() => window.location.href = "/contact"}>
        Contact Us
    </button>
</div>
<div style={{backgroundColor:"white"}}>
    <h1 style={{textAlign:"center"}}>Welcome to INDOFUR Retail Fixtures</h1>
    <p style={{ marginLeft: "10%" ,marginRight:"4%" }}>
    INDOFUR is a well known Retail Fixtures Manufacturers in India since 2023. Within a short period of time, we became the specialists in offering the best quality, cost and technology innovations which exceeds the expectations of our clients.
        </p><br></br>

        <p style={{ marginLeft: "10%" ,marginRight:"4%" }}> 
        Our Infrastructure capability, professionally qualified and dedicated management, technical staff and their vertical thinking bought us a long way by which we built our expertise in retail fixtures manufacturing.
            </p><br></br>
        <p style={{ marginLeft: "10%" ,marginRight:"4%" }}> 
        We provide end to end solutions for all display needs for retail showrooms and also shelving and racking solutions for supermarket and hypermarket which is of cost effective and top quality.
            </p><br></br>
        <p style={{ marginLeft: "10%" ,marginRight:"4%" }}> 
        Our capacity to diversify has helped us service various market segments such as Retail Markets, Telecommunication Indoor/Outdoor Cabinets, Banks, Government Organisations, Laboratory furniture, Information Technology Companies and so on with achievement of high level of satisfaction of our Esteemed Clients.
            </p><br></br>
            <h1 style={{textAlign:"center"}}>Retail Fixtures</h1>
            <div className="retail">
      <div className="retail-item">
        <h5 className="overlay-text">Fashion Store</h5>
        <a href="/retail/fashion">
          <img src="fashion.jpg" alt="Fashion" />
        </a>
        <a href="/retail/fashion">
          <button className="know-more">Know More</button>
        </a>
      </div>

      <div className="retail-item">
        <h5 className="overlay-text">Super Market</h5>
        <a href="/retail/super">
          <img src="super.jpg" alt="Super Market" />
        </a>
        <a href="/retail/super">
          <button className="know-more">Know More</button>
        </a>
      </div>

      <div className="retail-item">
        <h5 className="overlay-text">Electronic Store</h5>
        <a href="/retail/electronic">
          <img src="electronic.jpg" alt="Electronic" />
        </a>
        <a href="/retail/electronic">
          <button className="know-more">Know More</button>
        </a>
      </div>
    </div>
          </div>
        </div>
    );
};

export default Retail;
