import React from "react";
import "../dropdown.css"


const Railway = () => {
  return (
    <div>
      <img src="/tool.jpg" alt="TOOL" className="tool"></img>
      <h1 style={{textAlign:"center",color:"steelblue"}}>Railway Applications</h1>
      <div className="section">
        <img src="/railway.jpg" alt="railway"></img>
        
        <img src="/r2.jpg" alt="r3"></img>
         
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
      <div >
      <img src="/r1.jpg" alt="r1" style={{padding:"5%",margin:"2%"}}></img>
      <img src="/r3.jpg" alt="r2" style={{paddingBottom:"2%"}}></img>
      </div>
    </div>
  );
};

export default Railway;
