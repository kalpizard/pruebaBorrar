import React from "react";
import "../styles/Foot.css";

import fwd from "../FWD.jpeg";

function Foot() {
  return (
    <div className="pie">
     

    
<div className="dedo_1">
    <button type="button">
        <img
            src={fwd} // Utilizando la variable 'fwd' que importaste
            alt="Descripción de la imagen"
            style={{ width: "100%", height: "100%" }}
        />
    </button>
</div>









      <div className="dedo_2"></div>

      <div className="dedo_3"></div>
    </div>
  );
}

export default Foot;
