import { Link } from "react-router-dom";

function AppMenu() {
  return (
    <nav className="navegacion">
      <ul>
        <li>
          <Link to="/">Incio</Link>
        </li>
        <li>
          <Link to="/lista">Incio</Link>
        </li>
        <li>
          <Link to="/adminsitracion">Incio</Link>
        </li>
      </ul>
    </nav>
  );
}
export default AppMenu;
