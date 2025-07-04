import styles from "./favoriteMovies.module.css";
import { MovieContext } from "../../movie.jsx";
import { useContext } from "react";

function FavoriteMovies() {
  const { favoriteData, updateFavorite } = useContext(MovieContext);
  return (
    <div className="m-2">
      {favoriteData.length ? (
        <p>You have {favoriteData.length} movies</p>
      ) : (
        <p>No movie in favorite list</p>
      )}
      {favoriteData.map((data) => (
        <FavoriteCard
          data={data}
          key={data.imdbID}
          updateFavorite={updateFavorite}
        />
      ))}
    </div>
  );
}

function FavoriteCard({ data, updateFavorite }) {
  function handleFavorite() {
    updateFavorite((s) => s.filter((movie) => movie.imdbID !== data.imdbID));
  }
  return (
    <div className={styles.container}>
      <img src={data.Poster} alt="movie-img" className={styles.watchedImg} />
      <div className="flex-grow-1 ms-2 text-danger">
        <p>{data.Title}</p>
        <p>{data.Year}</p>
        <p>{data.imdbRating}</p>
      </div>
      <button className="btn btn-primary" onClick={handleFavorite}>
        Remove
      </button>
    </div>
  );
}

export default FavoriteMovies;
