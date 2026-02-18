import React, { useEffect, useState } from "react";

function Fetch() {
  const [users, setUsers] = useState([]);

  //las funciones con fetch deben ser asincronas
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };
  //CUANDO es componente se monta queremos obtener los usuario. Podemso llamar a useEffect
  useEffect(() => {
    getUsers();
  }, []);

  //como  es un array de objetos, debemos transformarlo en algo que podamos pintar
  const HTMLUsers = users.map((user) => {
    return (
      <div key={user.id}>
        <h3>{user.name}</h3>
      </div>
    );
  });

  return (
    <div>
      <h1>Fetch() - LLamada a una API</h1>
      {HTMLUsers}
    </div>
  );
}

export default Fetch;
