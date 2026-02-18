import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const getPost = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const postCard = posts.map((post) => {
    return (
      <li key={post.id}>
        <PostCard post={post}></PostCard>
      </li>
    );
  });

  //     sobre la carga.... Siga hay mucho que cargar sería conveniente hacerle saber al usuario que la página está cargando
  //para que pueda esperar tranquilo -> Hacemos una carga codicional

  //que pasa si hay un problema con las peticiones? en vez de seguir aciento con await reponse, await data ->
  //Hay que revisar si hay errores con un bloque try catch. Podemos meter el array entro de try catch
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div>Blog</div>
      {error ? (
        <h2>Algo ha salido mal con la petiicon. </h2>
      ) : posts.length ? (
        <ul>{postCard}</ul>
      ) : (
        <h2>Cargando...</h2>
      )}
    </>
  );
}

export default BlogPage;
