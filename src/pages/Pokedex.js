import React from "react";
import Header from "../Components/Header";
import "../styles/Prueba.css";
import "../styles/Contenido.css";
import PokeCards from "../Components/CuerpoPokedex";
import Pagination from "../Components/Pagination";
import Input from "../Components/Input";


function Pokedex() {
  return (
    <div>
      <div>
        <Header />
        {/* <Input/> */}
        <PokeCards />
        <Pagination />
      </div>
    </div>
  );
}

export default Pokedex;
