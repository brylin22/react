import { Outlet } from "react-router-dom";

import React from "react";
import AppMenu from "./AppMenu";

export default function AppLayout() {
  return (
    <>
      <AppMenu>
        <main>
          <Outlet />
        </main>
      </AppMenu>
    </>
  );
}
