import styles from "./movieByGenre.module.css";
import { useContext } from "react";
import { AnalyticsContext } from "../../movie.jsx";
import { GenreContext } from "./movieByGenre.jsx";

function Genre({ children }) {
  const { moviesDataForAnalytics } = useContext(AnalyticsContext);

  const { updateGenre, updateCurrentGenre, currentGenre } =
    useContext(GenreContext);

  function getGenreData() {
    const data = moviesDataForAnalytics.filter((el) =>
      el.Genre.includes(children)
    );

    console.log("total genre result", data);

    updateGenre(data);
    updateCurrentGenre(children);
  }

  return (
    <div
      className={`${styles.genre} ${
        children === currentGenre ? styles.active : ""
      }`}
      onClick={getGenreData}
    >
      {children}
    </div>
  );
}

export default Genre;
