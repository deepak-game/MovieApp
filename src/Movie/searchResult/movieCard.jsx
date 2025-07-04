import styles from "./searchResult.module.css";

function MovieCard({ movie, updateMovieId }) {
  function handleMovieById() {
    updateMovieId((s) => (s !== movie.imdbId ? movie.imdbID : ""));
  }

  return (
    <div className={styles.card} onClick={handleMovieById}>
      <img src={movie.Poster} alt="movie-img" className={styles.cardImg} />
      <div className="d-flex">
        <p className={styles.title}>
          <strong>Title: </strong>
          {movie.Title}
        </p>
        <p>
          <strong>Year: </strong> {movie.Year}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
