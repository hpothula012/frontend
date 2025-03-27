import React, { useState, useEffect } from "react";

const Home = () => {
  // Array of images for two different slides along with their links
  const slides = [
    { images: ["retail1.jpg", "retail2.jpg"], link: "/Retail" },
    { images: ["sheet.jpg", "steel.jpg"], link: "/SheetMetal" }
  ];

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setIndex1((prevIndex) => (prevIndex + 1) % slides[0].images.length);
    }, 6000);

    const interval2 = setInterval(() => {
      setIndex2((prevIndex) => (prevIndex + 1) % slides[1].images.length);
    }, 6000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  const nextSlide1 = () => setIndex1((prevIndex) => (prevIndex + 1) % slides[0].images.length);
  const prevSlide1 = () => setIndex1((prevIndex) => (prevIndex - 1 + slides[0].images.length) % slides[0].images.length);

  const nextSlide2 = () => setIndex2((prevIndex) => (prevIndex + 1) % slides[1].images.length);
  const prevSlide2 = () => setIndex2((prevIndex) => (prevIndex - 1 + slides[1].images.length) % slides[1].images.length);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home Page</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px"}}>
        {/* First Slider */}
        <div style={{ width: "500px", height: "300px", position: "relative", marginBottom:"5%"}}>
          <img 
            src={slides[0].images[index1]} 
            alt="Slide 1" 
            style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
            onClick={() => (window.location.href = slides[0].link)}
          />
          <button onClick={prevSlide1} style={buttonStyle}>&#10094;</button>
          <button onClick={nextSlide1} style={{ ...buttonStyle, right: "10px", left: "auto" }}>&#10095;
          </button>
          <a href={slides[0].link} style={linkStyle}>Retail Fixtures</a>
          
          
        </div>

        {/* Second Slider */}
        <div style={{ width: "500px", height: "300px", position: "relative", marginBottom:"5%"}}>
          <img 
            src={slides[1].images[index2]} 
            alt="Slide 2" 
            style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
            onClick={() => (window.location.href = slides[1].link)}
          />
          <button onClick={prevSlide2} style={buttonStyle}>&#10094;</button>
          <button onClick={nextSlide2} style={{ ...buttonStyle, right: "10px", left: "auto" }}>&#10095;</button>
          <a href={slides[1].link} style={linkStyle}>Sheet Metal</a>
        </div>
      </div>
    </div>
  );
};

const buttonStyle = {
  position: "absolute",
  left: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(0,0,0,0.5)",
  color: "white",
  border: "none",
  padding: "10px",
  cursor: "pointer",
 
  
  
};

const linkStyle = {
  display: "block",
  marginTop: "20%",
  textDecoration: "none",
  color: "blue",

 marginTop:"3%"
};

export default Home;
