import React from "react";
import "../SheetMetal.css"; // Import the external CSS file

const SheetMetal = () => {
  const imageLinks = [
    { src: "/atm.jpg", link: "/sheet/atm", alt: "Enclosures for ATM Machines" },
    { src: "/enclosures.jpg", link: "/sheet/enclosures", alt: "Sheet Metal Enclosures" },
    { src: "/kiosk.jpg", link: "/sheet/kiosk", alt: "Sheet Metal Enclosures for Kiosk" },
    { src: "/lab.jpg", link: "/sheet/lab", alt: "Laboratory Furniture (Medical Equipments)" },
    { src: "/outddor.jpg", link: "/sheet/outdoor", alt: "Sheet Metal Outdoor/Indoor Cabinets" },
    { src: "/parts.jpg", link: "/sheet/parts", alt: "Sheet Metal Parts & Assemblies" },
    { src: "/railway.jpg", link: "/sheet/railway", alt: "Railway Applications" },
    { src: "/steel.jpg", link: "/sheet/steel", alt: "Stainless Steel Cabinets" },
    { src: "/telecommunication.jpg", link: "/sheet/telecommunication", alt: "Cabinet for Tele-Communications" }
  ];  return (

   
  
     
    <div className="sheet-container">
          <h1  style={{ textAlign: "center" ,marginLeft: "10%" ,marginRight:"4%" }}>Welcome To INDOFUR</h1><br></br>
      <p style={{ marginLeft: "10%" ,marginRight:"4%" }}>We are the superior manufacturer, supplier and exporter of the Sheet Metal Enclosures, Cabinets, Components, parts and assemblies, etc., in India and especially in Bangalore city. Our Major products like Retail Fixtures and Furnitures, Sheet Metal Enclosures, Sheet Metal Parts and Assemblies for Medical Purposes (Medical Equipments), Enclosures for ATM machines, Sheet Metal Enclosures for Kiosk, Cabinets for Telecommunications, Stainless Steel Cabinets, Laboratory Furniture and Sheet Metal Indoor Cabinets as well as Sheet Metal Outdoor Cabinets.</p><br></br>
        <p style={{ marginLeft: "10%" ,marginRight:"4%" }}>
        Our fabrication service on products includes custom fixtures of aluminium, stainless steel,mild steel, powder coated,painted Glass, acrylic, polycarbonate,Wood and hardwood. We provide the best finishing on products as per customers requirement. We have large mechanism for the storage of the these products in moisture control environment,These products have found a global client markets.
        </p><br></br>
      <h1 className="title">Sheet Metal Assemblies</h1>

      <div className="grid-container">
        {imageLinks.map((item, index) => (
          <div key={index} className="image-wrapper">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.src} alt={item.alt} className="image" />
              <div className="overlay">
                <span className="overlay-text">{item.alt}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SheetMetal;
