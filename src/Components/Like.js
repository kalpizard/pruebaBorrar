import React, { useEffect, useState } from "react";
import { AddPokemon } from "../Api";

function Like({ pokemonId }) {
  const [state, setState] = useState(false);
  const [doorOpen, setDoorOpen] = useState(true);
  async function addFavorite() {
    const verify = await AddPokemon(pokemonId);
    console.log("verify", verify);
    setState(verify);
  }
  const toogleDoor = () => {
    setDoorOpen(!doorOpen);
  };
  useEffect(() => {});

  return (
    <div className="divfavorito">
      <p>{state ? "" : "💞"}</p>
      <button onClick={() => addFavorite()}>
        {doorOpen ? "favorito" : "eliminar favorito"}
      </button>
    </div>
  );
}

export default Like;
