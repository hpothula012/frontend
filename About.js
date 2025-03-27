import React from "react";

const About = () => {
  return (
    <div>
      <img src="/about.png" alt="About us" style={{ height: "1%", marginTop: "3%" }} />
      <h1 style={{ textAlign: "center" }}>Overview</h1>
      {/* <h5 style={{ textAlign: "center" }}>__ ... __</h5> */}
      <div style={{ marginLeft: "10%", marginRight: "4%" }}>
        <p style={{fontSize:"25px"}}>
        INDOFUR, founded in October 2023, is a dynamic company headquartered in Bangalore, specializing
 in the manufacturing and supply of premium sheet metal components and structures. Led by an
 accomplished board of directors—B. Siva Sankar , M. Subhan, and N. Vidya Sagar Reddy—
 the company is driven by a shared vision of quality and innovation. With a dedicated team of 30
 employees, INDOFUR has achieved remarkable growth, recording sales of ₹1.2 Crore for the fiscal
 years 2022–2023 and 2023–2024. The company is committed to delivering excellence and reliability,
 establishing itself as a trusted partner for industries and projects requiring superior sheet metal
 solutions </p>
      </div>
     
    <div style={{ display: "flex", alignItems: "flex-start", padding: "3%" }}>
      {/* Left Section - Image */}
      <div style={{ flex: "1",textAlign:"center"}}>
        <h1><img src="/building.png" alt="About us" style={{ width: "13%" }} /></h1>
        <h1><img src="/building.png" alt="About us" style={{ width: "13%" }} /></h1>
      </div>

      {/* Middle Section - Units */}
      <div style={{ flex: "1" }}>
        <h5>Unit - 1</h5>
        <p>INDOFUR  Unit – 1</p>

        <h5>Unit - 2</h5>
        <p>INDOFUR  Unit – 2</p>

      
      </div>

      {/* Right Section - Vision */}
      <div style={{ flex: "1", textAlign: "left" }}>
        <h2>VISION</h2>
        <p style={{fontSize:"18px"}}>
        Strive for excellence in quality
 and reliability, to meet Global
 challenges and build a world class
 company<br>
 
 </br><br></br>
 At INDOFUR, our mission is to provide
 our customers with the best possible
 products and services. We strive to
 exceed their expectations and build
 long-lasting relationship
</p>
      </div>
    </div>
      
    </div>
  );
};

export default About;
