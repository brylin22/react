import { useState } from "react";
import Estilos from "./curso/Estilos";
import "./App.css";
import Componentes from "./curso/componentes";
import Eventos from "./curso/Eventos";
import State from "./curso/State";
import AtributosReactivos from "./curso/AtributosReactivos";
import RenderizadoCondicional from "./curso/RenderizadoCondicional";
import Listas from "./curso/Listas";
import ListasIndex from "./curso/ListasIndex";
import Child from "./curso/Child";
import fetch from "./curso/Fetch";
import Fetch from "./curso/Fetch";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import PostDetails from "./pages/PostDetails";
import SettingsPage from "./pages/SettingsPage";
import ErrorPage from "./pages/ErrorPage";
function App() {
  const [count, setCount] = useState(0);

  const person = {
    sex: "hombre",
    age: 30,
  };
  //sigle page aplicacation -> Tenemos una sola pagina en la uqe decidimos que mostrar a partir de las rutas.

  return (
    <>
      {/* <Componentes />
      <Estilos></Estilos>
      <Eventos></Eventos>
      <State></State>
      <AtributosReactivos></AtributosReactivos>
      <RenderizadoCondicional />
      <Listas></Listas> */}
      {/* <ListasIndex />
      <Child msg="Mensaje desde el componente padre. " person={person}>
        {" "}
      </Child> */}
      {/* <Fetch /> */}
      {/* Vamos ya con las rutas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        {/* Rutas parametricas */}
        <Route path="/blog/:id" element={<PostDetails />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
