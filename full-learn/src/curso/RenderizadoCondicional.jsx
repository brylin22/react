import React, { useState } from "react";

function RenderizadoCondicional() {
  // Lo que devuelve el i logico
  // o mediante ternarios
  // let condicion = true; // no puesdes hacerlo con una variable normal si quieres que se vuelva a renderizar un resutlad.
  const [condicion, setCondicion] = useState(true);
  const cambiarCondicion = () => {
    // condicion = !condicion; -> Para girar la condición rapidamente
    setCondicion(!condicion);
    console.log(!condicion);
  };
  return (
    <div>
      <h1>Renderizado Condicinal</h1>
      {/* {condicion && <h2>La condicion se cumple. </h2>}- && Logicos */}
      {condicion ? (
        <h2> La condicion se cumple bien lomi</h2>
      ) : (
        <h2>La condición no se cumple poco lomi. </h2>
      )}
      <button onClick={cambiarCondicion}>Cambiar</button>
    </div>
  );
}

export default RenderizadoCondicional;
