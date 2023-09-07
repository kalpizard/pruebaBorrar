import React from "react";
import Header from "../Components/Header";
import "../styles/Prueba.css";
import "../styles/Contenido.css";
import PokeCards from "../Components/CuerpoPokedex";
import Pagination from "../Components/Pagination";

function Pokedex() {
  return (
    <div>
      <div>
        <Header />
        <PokeCards />
        <Pagination />
      </div>
    </div>
  );
}

export default Pokedex;
