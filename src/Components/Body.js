import React from "react";
import "../styles/Body.css";
import juego from "../demo.gif";
import live from "../episode.jpg";
import direct from "../directo.png";
import close from "../block.avif";
import port from "../wall.jpg";
import task from "../poke_2.jpg";
import proxi from "../nex.gif";
import SwiperHome from "./SwiperHome";
import seriessns from "../series.jpg";
import pokemon_game from "../pokemon_game.avif";

function Body() {
  return (
    //GIVES BODY TO THE PAGE
    <div className="content">
      <div className="news">
        <div className="news-column column-1">
          <div className="div-1">
            <img
              src={pokemon_game}
              alt="Descripción de la imagen"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="papa-1">
            <div className="izquierda-1">
              <div className="div-2">
                <img
                  src={juego}
                  alt="Descripción de la imagen"
                  style={{ width: "100%", height: "75%" }}
                />
              </div>
              <button className="button-1">TRY DEMO!</button>
            </div>
            <div className="div-4">
              <div className="hijo-1">
                <h2 className="whithe">NEW ONLINE DEMO!</h2>

                <p className="whithe">--Complete all quests.</p>
                <p className="whithe">--Claim rewards.</p>
                <p className="whithe">--Catch 'em all!.</p>
              </div>

              <div className="hijo-2">
                <img
                  src={close}
                  alt="Descripción de la imagen"
                  style={{ width: "50px", height: "100%" }}
                />
              </div>
            </div>
          </div>

          <div className="centrado">
            <div className="izquierda_end">
              <SwiperHome></SwiperHome>
            </div>
          </div>
        </div>

        <div className="news-column column-2">
          <div className="grande">
            <img
              src={seriessns}
              alt="Descripción de la imagen"
              style={{ width: "100%", height: "100%" }}
            />

            <div className="marca-agua">
              <img
                src={direct}
                alt="Descripción de la imagen"
                style={{ width: "140px", height: "100%" }}
              />
            </div>
          </div>

          <div className="task">
            <div className="hijo_3">
              <h1 style={{ color: "lightgray", textAlign: "center" }}>
                Pokedex
              </h1>
            </div>

            <div className="hijo_4">
              <img
                src={task}
                alt="Descripción de la imagen"
                style={{ width: "60%", height: "100%" }}
              />
            </div>

            <div className="hijo_5">
              {/* <img
                src={proxi}
                alt="Descripción de la imagen"
                style={{ width: "70%", height: "100%" }}
              /> */}
              <h1>COMING SOON</h1>
            </div>
            <div className="hijo_6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
