import { useEffect, useState } from "react";
export function ListaFetch() {
  const [usuarios, setUsuarios] = useState([{}]);
  useEffect(() => {
    //  getUsuarios();
  }, []);
  async function getUsuarios() {
    try {
      const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/users?",
      );
      const datos = await respuesta.json();
      setUsuarios(datos);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <h2>Usuarios</h2>
      {usuarios.map((usuario) => {
        return <p key={usuario.id}>{usuario.name}</p>;
      })}
    </>
  );
}
