import React from "react";
import Header from "../Components/Header";
import Body from "../Components/Body"; 

function Home() {
  return (
    <div className="body">
      <Header />
      
      <Body /> {/* Agrega el componente Body */}
    </div>
  );
}

export default Home;
