import React from "react";
import "../dropdown.css"


const Kiosk = () => {
  return (
    <div>
      <img src="/tool.jpg" alt="TOOL" className="tool"></img>
      <h1 style={{textAlign:"center",color:"steelblue"}}>Sheet Metal Enclosures for Kiosk</h1>
      <div className="section">
        <img src="/kiosk.jpg" alt="KIOSK"></img>
        
         <p style={{width:"600px"}}><h3>Sheet Metal Enclosures for Kiosk</h3>INDOFUR is one of among the renowned sheet metal fabrication companies in India. We provide a wide range of sheet metal enclosures for kiosk services to our customers that can meet all their manufacturing needs.<br></br>
        <h3>Sheet Metal Enclosures for Kiosk</h3>
        Our sheet metal fabrication unit welcomes customized specification for achieving customer satisfaction. Considering the time factors and other parameters our experienced workman ensures to deliver these sheet metal enclosures services up to the customer needs. Sheet Metal Enclosures for Kiosk can be customized and installed. All these services can be expected in cost effective prices. </p>
         <div className="products">
         <ul>
            <h3>OTHER PRODUCTS</h3>
              <li><a href="/sheet/outdoor">Sheet Metal Outdoor/Indoor<br></br> Cabinets</a></li>
              <li> <a href="/sheet/enclosures">Sheet Metal Enclosures </a></li>
              <li> <a href="/sheet/parts">Sheet Metal Parts & Assemblies </a></li>
              <li> <a href="/sheet/atm">Enclosures for ATM Machines </a></li>
              <li> <a href="/sheet/telecommunication"  >Cabinet for Tele-Communications </a></li>
              <li> <a href="/sheet/kiosk">Sheet Metal Enclosures for Kiosk </a></li>
              <li> <a href="/sheet/lab">Laboratory Furniture (Medical Equipments) </a></li>
              <li> <a href="/sheet/steel">Stainless Steel Cabinets </a></li>
              <li> <a href="/sheet/railway">Railway Applications </a></li>
            </ul>
         </div>
      </div>
      </div>
  );
};

export default Kiosk;
