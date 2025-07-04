import styles from "./navbar.module.css";
import SearchBar from "./searchBar.jsx";
import { NavLink, useLocation } from "react-router-dom";

function Navbar({ query, updateQuery }) {
  const location = useLocation();
  const isMyMoviesActive = location.pathname.startsWith("/my-movies");

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid text-dark">
        <span className={styles.logo}>
          <NavLink className="navbar-brand text-white" to="/">
            MovieApp
          </NavLink>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/search-analytics"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Search Analytics
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <span
                className={`nav-link dropdown-toggle ${
                  isMyMoviesActive ? "active" : ""
                }`}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My Movies
              </span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/my-movies/watched">
                    Watched
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/my-movies/favorite">
                    Favorite
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/my-movies/bookings">
                    Bookings
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <SearchBar updateQuery={updateQuery} query={query} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
