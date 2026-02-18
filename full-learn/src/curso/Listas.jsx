import React from "react";

function Listas() {
  // mostrar arrays etc...
  const peliculas = ["star wares", "tiburon ", "lest get it"];

  //Eso que tenemos abajo puede llegar a ensuciar de sobremaera el html
  //podemos guardas la función dentro de una variable y luego asignarla

  const HTMLpeliculas = peliculas.map((pelicula) => {
    return <p key={pelicula}> {pelicula}</p>;
  });

  return (
    <div>
      <h1>Rendereizado de listas</h1>
      {peliculas.map((pelicula) => {
        //devolvemos los elementos html que necesitemos (para mostrarlo )
        //React necestia indetificar a los elementos con una cable una ,debemos e proporcinarsela.
        return <p key={pelicula}> {pelicula}</p>;
      })}

      <h2>Mejor: </h2>
      <h3>{HTMLpeliculas}</h3>
    </div>
  );
}

export default Listas;
