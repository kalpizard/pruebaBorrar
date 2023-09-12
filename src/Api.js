export async function getPokemonList(url) {
  var pokemonData = [];
  var result = {};
  try {
    // Consumir el api con la url recibida
    const response = await fetch(url);
    // vamos a esperar la respuesta y formatearla a json
    const data = await response.json();
    if (data.results && data.results.length) {
      // iterar cata pokemon
      for (const pokemon of data.results) {
        const url = pokemon.url;
        const detailPokemon = await getPokemonDetailByUrl(url);
        //push al arrelo de pokemons
        pokemonData.push(detailPokemon);
      }
    }
    result = {
      count: data.count,
      next: data.next,
      previous: data.previous,
      array: pokemonData,
    };
  } catch (error) {
    console.error(" Error capturando la Pokemon data", error);
    return null;
  }
  return result;
}

async function getPokemonDetailByUrl(url) {
  try {
    // obtener el detalle de cada pokemon
    const response = await fetch(url);
    const data = await response.json();
    const id = data.id;
    return {
      id,
      name: data.name,
      image: data.sprites.other["official-artwork"]["front_default"],
      image2:
        data.sprites.versions["generation-v"]["black-white"].animated[
          "front_default"
        ],
      experience: data.base_experience,
      type: data.types.map((item) => item.type.name),
      image3:
        data.sprites.versions["generation-v"]["black-white"].animated[
          "back_default"
        ],
    };
  } catch (error) {
    console.error(" Error capturando el detalle", error);
    throw error;
  }
}

//  image:data.sprites.other["official-artwork"]["front_default"]
export async function getPokemonMockApi() {
  const res = await fetch(
    "https://64ee6291219b3e2873c32ca4.mockapi.io/favorites/favorites-pokemon"
  );
  const data = await res.json();
  return data;
}
//
export async function AddPokemon(id) {
  const pokemonMockApi = await getPokemonMockApi();
  console.log(pokemonMockApi);
  const verify = pokemonMockApi.some(({ idPokemon }) => {
    return idPokemon === id;
  });

  //existe
  if (verify !== false) {
    console.log("Ya existe");
    return true;
  } else {
    return fetch(
      "https://64ee6291219b3e2873c32ca4.mockapi.io/favorites/favorites-pokemon",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idPokemon: id }),
      }
    ).then((res) => {
      if (res.ok) {
        console.log(`Datos guardados en mockupApi`);
      } else {
        throw `Error`;
      }
    });
  }
}

// 

export async function DeletePokemonFav(idf) {
  const pokemonMockApi = await getPokemonMockApi();
  let idDelete = '';
  const verify = pokemonMockApi.some(({ idPokemon , id }) => {
    if (idPokemon === idf){
      idDelete = id;
      // console.log("Encontrado", idDelete);
    }
    return idPokemon === idf;
  });
  
  console.log(verify);

    return fetch(
      `https://64ee6291219b3e2873c32ca4.mockapi.io/favorites/favorites-pokemon/${idDelete}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ idPokemon: id }),
      }
    ).then((res) => {
      if (res.ok) {
        console.log(`Datos eliminados en mockupApi`);
      } else {
        throw `Error`;
      }
    });
 
}



