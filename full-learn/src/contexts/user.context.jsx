import { createContext, useState } from "react";

const UserContext = createContext();

// El provider es un componente que envuelve a tolda la aplicacion para
//que pueda usar el contexto

function UserProviderWrapper(props) {
  const [user, setUser] = useState("Brylin");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProviderWrapper };
