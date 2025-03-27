import React from "react";
import "../dropdown.css"


const Enclosures = () => {
  return (
    <div>
      <img src="/tool.jpg" alt="TOOL" className="tool"></img>
      <h1 style={{textAlign:"center",color:"steelblue"}}>Sheet Metal Enclosuers Manufacturers</h1>
      <div className="section">
        <img src="/enclosures.jpg" alt="ATM"></img>
        
         <p style={{width:"600px"}}><h3>Sheet Metal Enclosuers</h3>INDOFUR was started in the year 2001 to cater to the needs and growing demand of sheet metal enclosures. Our Sheet Metal Enclosures are highly resistant to corrosion and have high tensile strength and they are widely used for various industrial purposes. Moreover, these Sheet Metal Enclosures are available in various sizes to successfully meet the diverse demands and requirements of the customers with guaranteed top quality and service. These sheet metal enclosures are well manufactured with the latest technologies and high-grade raw materials in order to achieve quality products with a high accuracy level. With an experienced and expert team, we use finite element analysis to solve a failure problem with sheet metal enclosures under pressure load. We provide safe packaging to the products so that during transit product quality is maintained and delivered on time.    <br></br>
       </p>
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
      <div className="sheet">
      <img src="/sheet1.jpeg" alt="sheet"></img>
      <img src="/sheet2.jpeg" alt="sheet"></img>
      <img src="/sheet3.jpeg" alt="sheet"></img>
      <img src="/sheet4.jpeg" alt="sheet"></img>
      </div>
    </div>
  );
};

export default Enclosures;
