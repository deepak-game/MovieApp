import styles from "./upcomingMovies.module.css";

function UpcomingMovies({ movieData, setBook }) {
  return (
    <div>
      <h3 className="m-2 text-primary">Upcoming Movies...</h3>
      <div className={styles.container}>
        {movieData.map((movie) => (
          <Movie movie={movie} key={movie.Plot} setBook={setBook} />
        ))}
      </div>
    </div>
  );
}

function Movie({ movie, setBook }) {
  return (
    <div className={styles.parent}>
      <img className={styles.movieImg} src={movie.Poster} alt={movie.Tiltle} />
      <h6 className="text-warning fs-2">{movie.Title}</h6>
      <p>
        <strong className="text-primary">Cast: </strong>
        {movie.Actors}
      </p>
      <p className={styles.plot}>
        <strong className="text-primary">Plot: </strong>
        {movie.Plot}
      </p>
      <h6>
        <strong className="text-success">In Cinemas: </strong>
        {movie.Release}
      </h6>
      {movie.SelectedSeats.length < 30 && (
        <button
          className="btn btn-primary"
          onClick={() => setBook({ ...movie })}
        >
          Book
        </button>
      )}
      <p className="text-danger">
        {movie.SelectedSeats.length !== 30
          ? `Seat left ${30 - movie.SelectedSeats.length}`
          : "Seat full"}
      </p>
    </div>
  );
}

export default UpcomingMovies;
