import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <h1>Error</h1>
      <h2>No puedes entrar ahí</h2>
      <Link to="/">Ir a home</Link>
    </>
  );
}

export default ErrorPage;
