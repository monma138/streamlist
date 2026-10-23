import { NavLink } from "react-router-dom";
import { FaList, FaFilm, FaShoppingCart, FaInfoCircle } from "react-icons/fa";

const links = [
  { to: "/", label: "StreamList", icon: <FaList />, end: true },
  { to: "/movies", label: "Movies", icon: <FaFilm /> },
  { to: "/cart", label: "Cart", icon: <FaShoppingCart /> },
  { to: "/about", label: "About", icon: <FaInfoCircle /> },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <FaFilm className="brand-icon" />
        <span>
          EZTech<strong>Movie</strong>
        </span>
      </div>
      <nav>
        <ul className="nav-links">
          {links.map(({ to, label, icon, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {icon}
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
