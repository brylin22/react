import React, { useContext } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { UserContext } from "../contexts/user.context";

function HomePage() {
  //para recoger las variables globales del useContext
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div>Home page</div>
      <h2>Hola {user}</h2>
    </>
  );
}

export default HomePage;
