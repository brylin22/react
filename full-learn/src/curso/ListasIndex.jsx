import React from "react";

//en el key podemos añadir el indice del arthumemnto de array, añadiendo el argumento index en el callback de .map
const pelis = ["Patricio", "marucicio", "la gran orca"];

//con objetos
const animales = [
  {
    id: 0,
    nombre: "mauricio",
    descripcion: "bien moyi",
  },
  {
    id: 1,
    nombre: "mauricio",
    descripcion: "bien moyi",
  },
  {
    id: 2,
    nombre: "mauricio",
    descripcion: "bien moyi",
  },
  {
    id: 3,
    nombre: "mauricio",
    descripcion: "bien moyi",
  },
  {
    id: 4,
    nombre: "mauricio",
    descripcion: "bien moyi",
  },
];

const HTMLpelis = pelis.map((pelis, index) => {
  return (
    <p key={index}>
      {index + 1} - {pelis}
    </p>
  );
});

const HTMLanimales = animales.map((animal) => {
  return (
    <div key={animal.id}>
      <h2>Nombre: {animal.nombre}</h2>
      <h2>Descripcion: {animal.descripcion}</h2>
    </div>
  );
});

function ListasIndex() {
  return (
    <div>
      <h1>Renderizado de Listas </h1>
      {HTMLpelis}
      {HTMLanimales}
    </div>
  );
}

export default ListasIndex;
