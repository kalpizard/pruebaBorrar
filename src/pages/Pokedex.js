import React from "react";
import Header from "../Components/Header";
import "../styles/Prueba.css";
import "../styles/Contenido.css";
import PokeCards from "../Components/CuerpoPokedex";


function Pokedex() {
  return (
    <div>
      <div>
        <Header/>
        <PokeCards/>

      
      </div>

      

      
    </div>
  );
}

export default Pokedex;
