import { Link } from "react-router-dom";
import "./Header.css";

import React from "react";

function HeaderComponent() {
  return (
    <header className="header">
      <h1 className="title"> Bienvenido! </h1>
      <nav>
        <ul className="link-list">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="link" to="/settings">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
