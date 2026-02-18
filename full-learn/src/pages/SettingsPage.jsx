import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";

function SettingsPage() {
  const [hasAccess, setAccess] = useState(false);
  if (!hasAccess) return <Navigate to={"/error"} />;
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <h1>Pagina de Settings</h1>
    </>
  );
}

export default SettingsPage;
