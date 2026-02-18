import { useEffect, useState } from "react";
import Tablero from "./components/Tablero";
import "./App.css";

function App() {
  //Desarrolla una aplicación  nreact que permita jugar al 3 en raya.
  //1er requisito: MOstrar una tablero 3x3 casillas.

  return (
    <>
      <h1>Tres en raya</h1>

      <Tablero></Tablero>
    </>
  );
}

export default App;
