import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";

function Home() {
  return (
    <div className="body">
      <Header />
      <Body /> {/* Agrega el componente Body */}
    </div>
  );
}

export default Home;
