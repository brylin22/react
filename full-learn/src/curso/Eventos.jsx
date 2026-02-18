import React from "react";

function Eventos() {
  const decirAlgo = () => {
    console.log("Algo");
  };
  //Para que cuando clickemos en h1, esto se haga
  return (
    <div>
      <h1 onClick={decirAlgo}>Eventos. </h1>
    </div>
  );
}

export default Eventos;
