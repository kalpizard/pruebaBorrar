import React, { useEffect, useState } from "react";
import { getPokemonList } from "../Api";
import "../styles/cuerpoPokedex.css";



function Pokedex33() {
  const [Pokemons, setPokemons] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [newFavorite, setNewFavorite] = useState("");
  const [loves, setLoves] = useState();

  const handleLoves = (e) => {
    e.target.getElementsByTagName("span")[0].textContent = 1;
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon?Limit=20";
        const fetchedPokemons = [];
        const response = await getPokemonList(url);
        const data = response.array;

        setPokemons(data);
      } catch (error) {
        console.error("Error capturando Pokemon data", error);
      }
      setisLoading(true);
    };
    fetchPokemon();
  }, []);

  return (
    <div className="contenedor">
      {isLoading ? (
        Pokemons.map((item, index) => {
          return (
            <div className="book" key={index}>

              <img src={item.image} />
                 <div  className="cover">
                           

              <p className="name">{item.name}</p>
              <p className="name">{item.id}</p>
                 </div>


              <button onClick={handleLoves}>
                <span ></span>
                {loves} {loves === 1 ? "Love♥" : "Loves♥"}
              
              </button>
            </div>
          );
          console.log(handleLoves);
        })
      ) : (
        <h2 className="loading">Esta Cargando...</h2>
      )}
    </div>
  );
}

export default Pokedex33;
