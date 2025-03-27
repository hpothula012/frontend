import React from "react";

const Facilities = () => {
  const facilityList = [
    "Laser Cutting",
    "Tube Cutting",
    "Bending",
    "Welding",
    "TIg Welding",
    "Mig Welding"
  ];

  const imageSources =[

    "facility1.jpg",
    "facility2.jpg",
    "facility3.jpg",
    
  ]


  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          backgroundImage: "url('/facility2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>

        {/* Heading */}
        <h1
          style={{
            position: "relative",
            color: "white",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            zIndex: "1",
          }}
        >
          OUR FACILITIES
        </h1>
      </div>

      {/* Facilities Content */}
      <div style={{ padding: "40px", textAlign: "center" }}>
        <p style={{ fontSize: "18px", lineHeight: "1.6", maxWidth: "800px", margin: "auto" }}>
        With a spacious area of 10,000 sq.ft, we have a team of 30 members with a minimum of 4 years
 experience in the relevant industries, who are efficiently working towards the success of the  company’s goals.

        </p>

        <h2 style={{ marginTop: "30px", fontWeight: "bold" }}>
          The state-of-the-art manufacturing facilities at INDOFUR consist of:
        </h2>

        {/* Dynamic List */}
        <ul style={{ listStyle: "none", padding: 0, fontSize: "18px", textAlign: "left", maxWidth: "600px", margin: "auto" }}>
          {facilityList.map((item, index) => (
            <li key={index} style={{ padding: "8px 0" }}>✅ {item}</li>
          ))}
        </ul>
      </div>
       <h3>The total plant manufacturing capacity is 150 metric tonnes per month.</h3>
 {/* Image Grid */}
 <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "60px",
          padding: "40px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {imageSources.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Facility ${index + 1}`}
            style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
          />
        ))}
      </div>
       <div>
        
       </div>
    </div>
    
  );
};

export default Facilities;
