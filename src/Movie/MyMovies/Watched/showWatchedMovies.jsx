import styles from "./watchedMovies.module.css";

function ShowWatchedMovies({ watchedData, updateWatched }) {
  return (
    <div>
      {watchedData.map((data) => (
        <WatchedCard
          data={data}
          key={data.imdbID}
          updateWatched={updateWatched}
        />
      ))}
    </div>
  );
}

function WatchedCard({ data, updateWatched }) {
  function handleWatch() {
    updateWatched((s) => s.filter((movie) => movie.imdbID !== data.imdbID));
  }

  return (
    <div className={styles.container}>
      <img src={data.Poster} alt="movie-img" className={styles.watchedImg} />
      <div className="flex-grow-1 ms-2 text-danger">
        <p>{data.Title}</p>
        <p>📅{data.Year}</p>
        <p>⭐{data.imdbRating === "N/A" ? "No ratings" : data.imdbRating}</p>
      </div>
      <button className="btn btn-primary" onClick={handleWatch}>
        Remove
      </button>
    </div>
  );
}

export default ShowWatchedMovies;
