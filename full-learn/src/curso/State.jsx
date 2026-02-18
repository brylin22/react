import React, { useState } from "react";

function State() {
  // Vamos a mostrar un valor y modificarlo mientras me muetr
  const [valor, setValor] = useState(0);

  let aumentar = () => {
    setValor(valor + 5);
    console.log(valor + 5);
  };
  let disminuir = () => {
    setValor(valor - 5);
    console.log(valor - 5);
  };
  return (
    <div>
      Usando UseState:
      <div>Valor: {valor}</div>
      <button onClick={aumentar}>Aumentar Valor</button>
      <button onClick={disminuir}>Disminuir Valor</button>
    </div>
  );
}

export default State;
