export function Formualrio() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const datosJSON = {
      id: formData.get("id"),
      name: formData.get("name"),
      email: formData.get("email"),
    };
    //validar
    enviarDatos(datosJSON);
  };
  async function enviarDatos(objUsuario) {
    try {
      const peticion = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          body: JSON.stringify(objUsuario),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        },
      );
      const respuesta = await peticion.json();
      console.log(respuesta);
      //redirigar con react
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="id" id="id" />
      <label htmlFor="name">Nombre:</label>
      <input type="text" name="name" id="name"></input>
      <br />
      <label htmlFor="email">Email:</label>
      <input type="text" name="email" id="email"></input>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}
