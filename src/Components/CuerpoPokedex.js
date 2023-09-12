import React, { useEffect, useState } from "react";
import { AddPokemon, DeletePokemonFav, getPokemonList, getPokemonMockApi } from "../Api";
import "../styles/cuerpoPokedex.css";
import Pagination from "../Components/Pagination";
import Like from "./Like";

// import pokis from "../poki.png"

function Pokedex33() {
  const [Pokemons, setPokemons] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [loves, setLoves] = useState(0); // Inicializa loves en 0
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState(false);
  const [update, setUpdate] = useState(false);
  const ShowLimit = 20; // Número de Pokémons a mostrar por página

  // fILTRAR POR PAGINA
  const [SearchTerm, setSearchTerm] = useState("");
  //FILTRAR TODO

  useEffect(() => {
    const fetchPokemon = async () => {
      const offset = (page - 1) * ShowLimit; // Calcula el offset
      try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${ShowLimit}&offset=${offset}`;
        const fetchedPokemons = [];
        const response = await getPokemonList(url);
        const data = response.array;
        //get favorites
        const favoritePokemons = await getPokemonMockApi();
        setFavorites(favoritePokemons);
        setPokemons(data);
      } catch (error) {
        console.error("Error capturando Pokemon data", error);
      }
      setisLoading(true);
    };
    fetchPokemon();
  }, [page, update]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredPokemon = Pokemons.filter(
    (pokemon) =>
      pokemon.name
        .toLowerCase()
        .trim()
        .includes(SearchTerm.toLowerCase().trim()) || // Filtrar por nombre
      pokemon.id.toString().includes(SearchTerm) // Filtrar por ID
  );

  function updatePage(newPage) {
    setPage(newPage); // Actualiza la página cuando se hace clic en un botón de paginación
  }

  // function handleLoves(e) {
  //   setLoves(loves + 1); // Incrementa loves en 1 cuando se hace clic en el botón
  // }



  async function likePokemon(pokemon) {
    const verify = await AddPokemon(pokemon.id);
    //verify
    if (verify === true) {
      console.log("ya existe");
    } else {
      setUpdate(!update);
      console.log("agregado");
    }
  }


  async function deleteFavorite(pokemon) {
    const verify = await DeletePokemonFav(pokemon);
    //verify
    if (verify === true) {
      alert("Eliminado");
    } else {
      setUpdate(!update);
      console.log("no");
    }


    console.log(pokemon);
  }














  return (
    <>
      <div className="inputDiv">
        <input
          placeholder="Busca tu Pokémon."
          className="nuevoinput"
          value={SearchTerm}
          onChange={handleSearch}
        ></input>
      </div>

      <div className="contenedor">
        {isLoading ? (
          <>
            {filteredPokemon.map((item, index) => {
              return (
                <div className="book" key={item.id}>
                  <p className="name">{item.name}</p>
                 
                  {favorites.some(
                    (favorite) => favorite.idPokemon === item.id
                  ) ? (
                    <div className="buttons">
                      <p className="like">❤️</p>
                      <button
                        onClick={() => deleteFavorite(item.id)}
                        className="delete"
                      >
                        Delete
                      </button>
                    </div>
                  ) : (
                    <button
                      className="btnAdd"
                      onClick={() => likePokemon(item)}
                    >
                      Like
                    </button>
                  )}
                  <div className="imagenesinternas">
                    <img className="imagenInterior" src={item.image2} />
                    <img className="imagenInterior" src={item.image3} />
                  </div>

                  <div className="letrastyle">
                    <p>Experiencia Base: {item.experience}</p>
                    <p> type: {item.type}</p>
                    <p className="name"># {item.id}</p>
                  </div>

                  <div className="cover">
                    <img className="tamaño" src={item.image} />
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <h2 className="loading">Esta Cargando...</h2>
        )}
        <Pagination
          totalItems={500} // Número total de elementos
          itemsPerPage={ShowLimit} // Número de elementos por página
          currentPage={page}
          updatePage={updatePage}
        />
      </div>
    </>
  );
}

export default Pokedex33;



// https://64ee6291219b3e2873c32ca4.mockapi.io/favorites/favorites-pokemon