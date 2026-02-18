import { Link } from "react-router-dom";

function AppMenu() {
  return (
    <nav className="navegacion">
      <ul>
        <li>
          <Link to="/">Incio</Link>
        </li>
      </ul>
    </nav>
  );
}
