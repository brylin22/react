// Crear atributos dinácmicos y relaciones bidireccionales

import React, { useState } from "react";

function AtributosReactivos() {
  const [texto, setTexto] = useState("Tu Nombre");

  const [myValor, setmyValor] = useState("a");
  //necesitamos que el input tengau n handler debido a que el valor
  //asignado es una variable reactiva.

  const hadleInput = (e) => {
    // la funcion recibe el evento "chage" del input
    console.log(e); //analizamos el evento que manda onChange
    //todavía si intentamos cmabiar el input de valor no sucederá, porque
    //debemos de cambiar a su ve la variable reativa que está asignada al valor.
    setmyValor(e.target.value);
  };
  return (
    <div>
      <h1>Atributos dinamicos </h1>
      <h2>{myValor}</h2>
      <input
        type="text"
        placeholder={texto}
        value={myValor}
        onChange={hadleInput}
      />
    </div>
  );
}

export default AtributosReactivos;
