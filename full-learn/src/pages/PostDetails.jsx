import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams(); //FUNCION del react router dom, nos da el parametro de la ruta automaticamente
  const [post, setPost] = useState();
  //vamos a pedirle a la api los detalles
  const fetchPost = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );

    const data = await response.json();
    setPost(data);
  };

  useEffect(() => {
    fetchPost(id);
  }, []);
  //IMPORTANTE, ESTAMOS INTENTANDO PINTAR EL POST ANTES DE QUE EL FETCH CARGUE LOS DATOS
  //NO TARDA NADA, PERO SI LO SUFICIENTE PARA QUE LA PÁGINA DE ERROR AL NO ENCONTRAR LOS DATOS.
  //TENEMOS QUE DECIR QUE HASTA QUE NO EXISTA NO LO PINTE.

  //     sobre la carga.... Siga hay mucho que cargar sería conveniente hacerle saber al usuario que la página está cargando
  //para que pueda esperar tranquilo
  return (
    <>
      <HeaderComponent></HeaderComponent>

      {post && (
        <div>
          <h1>PostDetails</h1>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}
    </>
  );
}

export default PostDetails;
