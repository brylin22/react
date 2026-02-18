import React from "react";

function Child(props) {
  //normalemente en los props mandarenoms objetos. como lo mostramos?

  //ante de motrar los props podemos destructurarlos para que sean más claros.

  const { msg, person } = props;

  //como podíamos mandar informaicón del hijo al padre mediante los props?
  //podemos mandar una función del padre como prop al hijo, y que esa función sirva para cambiar un estado
  //de esa forma podemos cambiar el estado llamando al prop funcion desde el hijol
  const handleLogin = () => {
    props.handleDisplay;
  };
  return (
    <div>
      <h2>ESte es el componente hijo</h2>
      <p>{props.msg}</p>
      <div>
        {props.person.sex} - {props.person.age}
      </div>
      <div>
        <h1>Comunicación padre hijo: </h1>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Child;
