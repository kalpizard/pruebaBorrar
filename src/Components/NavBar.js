import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavStyle.css";
import bolaImage from "../ball.jpg";

function Navbar() {
  return (
    <div className="header">
      <div className="cuadro">
        <img src={bolaImage} alt="Descripción de la imagen" />
      </div>

      <div className="ul-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/pokedex">Pokedex</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;