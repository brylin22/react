import { useState, useEffect } from "react";

function Tablero() {
  const [tablero, setTablero] = useState(new Array(9).fill("X"));

  const [tableroHTML, setTableroHTML] = useState(tablero);
  //lleno los elemntos
  //como el estado es un array para cambiar el estado debo pasale un array ya hecho y cambiado.
  function actualizarTableroHTML() {
    const nuevo = tablero.map((tab, index) => {
      return (
        <div className="square " key={index} onClick={juego}>
          {tab}
        </div>
      );
    });
    const final = <div className="game">{nuevo}</div>;

    setTableroHTML(final);
  }
  useEffect(() => {
    actualizarTableroHTML();
  }, [tablero]);

  function juego() {}

  return (
    <>
      <div>
        <h1>Tablero</h1>
        <div className="board">{tableroHTML}</div>
      </div>
      <div className="turn"></div>
      <div className="button">
        <button className="button">Cambiar turno</button>
        <button></button>
      </div>
    </>
  );
}

export default Tablero;
