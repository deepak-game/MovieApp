import styles from "./recommend.module.css";
import { MovieContext } from "../../movie.jsx";
import { useContext } from "react";

function RecommendedMovies({ data }) {
  return (
    <div>
      <h3 className="m-1 text-danger">
        {data.length
          ? "Your recommended movies... "
          : "No recommended movies, do search analytics for movie recommendation."}
      </h3>
      <div className={styles.container}>
        {data.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </div>
  );
}

function Movie({ movie }) {
  const { updateWatched } = useContext(MovieContext);

  function handleWatched() {
    updateWatched((s) => [...s, movie]);
  }

  return (
    <div className={styles.movie}>
      <img className={styles.movieImg} src={movie.Poster} alt={movie.Tiltle} />
      <p>{movie.Title}</p>
      <p>{movie.imdbRating}</p>
      <button className="btn btn-primary" onClick={handleWatched}>
        Add To Watch List
      </button>
    </div>
  );
}

export default RecommendedMovies;
