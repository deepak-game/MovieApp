import styles from "./searchAnalytics.module.css";
import { NavLink } from "react-router-dom";

function AnalyticsNavbar() {
  return (
    <div className={styles.nav}>
      <p>
        <NavLink
          to="movie-by-genre"
          className={({ isActive }) =>
            `${styles.navStyle} ${isActive ? styles.active : ""}`
          }
        >
          Movie By Genre
        </NavLink>
      </p>
      <p>
        <NavLink
          to="advanced-search"
          className={({ isActive }) =>
            `${styles.navStyle} ${isActive ? styles.active : ""}`
          }
        >
          Advanced Search
        </NavLink>
      </p>
      <p>
        <NavLink
          to="compare-movies"
          className={({ isActive }) =>
            `${styles.navStyle} ${isActive ? styles.active : ""}`
          }
        >
          Compare Movies
        </NavLink>
      </p>
    </div>
  );
}

export default AnalyticsNavbar;
