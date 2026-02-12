import { Outlet } from "react-router-dom";
import AppMenu from "./AppMenu";

function AppLayout() {
  // OUTLET INYECTA PÁGINA GESTIONADAS POR EL ENRUTADOR.
  return (
    <>
      <AppMenu />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default AppLayout;
