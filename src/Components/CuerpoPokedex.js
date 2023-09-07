import React, { useEffect, useState } from "react";
import { getPokemonList } from "../Api";
import "../styles/cuerpoPokedex.css";
import Pagination from "../Components/Pagination";
// import pokis from "../poki.png"

function Pokedex33() {
  const [Pokemons, setPokemons] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [loves, setLoves] = useState(0); // Inicializa loves en 0
  const [page, setPage] = useState(1);
  const ShowLimit = 20; // Número de Pokémons a mostrar por página

  useEffect(() => {
    const fetchPokemon = async () => {
      const offset = (page - 1) * ShowLimit; // Calcula el offset
      try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${ShowLimit}&offset=${offset}`;
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
  }, [page]);

  function updatePage(newPage) {
    setPage(newPage); // Actualiza la página cuando se hace clic en un botón de paginación
  }

  function handleLoves(e) {
    setLoves(loves + 1); // Incrementa loves en 1 cuando se hace clic en el botón
  }

  return (
    <div className="contenedor">
      {isLoading ? (
        <>
          {Pokemons.map((item, index) => {
            return (
              <div className="book" key={item.id}>

                  <p className="name">{item.name}</p>
                <div  className="imagenesinternas" >

                <img className="imagenInterior" src={item.image2} />
                  <img className="imagenInterior" src={item.image3} />

                </div>


                <div className="letrastyle">
                  <p>Experiencia Base: {item.experience}</p>
                  <p> Tipo:  {item.type}</p>
                  <p className="name"># {item.id}</p>
                </div>


                <div className="cover">
                  <img className="tamaño" src={item.image} />
                </div>
              </div>
            );
          })}
          <Pagination
            totalItems={500} // Número total de elementos
            itemsPerPage={ShowLimit} // Número de elementos por página
            currentPage={page}
            updatePage={updatePage}
          />
        </>
      ) : (
        <h2 className="loading">Esta Cargando...</h2>
      )}
    </div>
  );
}

export default Pokedex33;
