import { useContext, useState } from "react";
import styles from "./movieDetailPage.module.css";
import movieDetailCustomHook from "./movieDetailCustomHook.jsx";
import { MovieContext } from "../movie.jsx";

const KEY = "18f2ab1b";

function MovieDetailPage({ movieId, updateMovieId }) {
  const [isLoading, error, movieDetail] = movieDetailCustomHook(movieId);

  return (
    <div className="m-2">
      {isLoading || error ? <h1>{error ? error : "Loading..."}</h1> : ""}
      {movieDetail && (
        <ShowMovieDetails
          movieDetail={movieDetail}
          updateMovieId={updateMovieId}
        />
      )}
    </div>
  );
}

function ShowMovieDetails({ movieDetail, updateMovieId }) {
  const [showContent, setShowContent] = useState("info");

  const { updateWatched, updateFavorite, watchedData, favoriteData } =
    useContext(MovieContext);

  function handleWatch() {
    updateWatched((s) => [...s, movieDetail]);
  }

  function handleFavorite() {
    updateFavorite((s) => [...s, movieDetail]);
  }

  const isAlreadyWatched = watchedData.some(
    (el) => el.imdbID === movieDetail.imdbID
  );

  const isAlreadyFavorite = favoriteData.some(
    (el) => el.imdbID === movieDetail.imdbID
  );

  return (
    <div className={styles.detail}>
      <div className={styles.imgContainer}>
        <img src={movieDetail.Poster} alt="movieImage" className={styles.img} />
      </div>
      <div className={styles.infoContainer}>
        <p
          className={showContent === "info" ? styles.active : ""}
          onClick={() => setShowContent("info")}
        >
          Info
        </p>
        <p
          className={showContent === "creator" ? styles.active : ""}
          onClick={() => setShowContent("creator")}
        >
          Creator
        </p>
        <p
          className={showContent === "content" ? styles.active : ""}
          onClick={() => setShowContent("content")}
        >
          Content
        </p>
        <p
          className={showContent === "review" ? styles.active : ""}
          onClick={() => setShowContent("review")}
        >
          Review
        </p>
      </div>

      <div
        className={`${styles.info} ${
          showContent === "info" ? styles.show : ""
        }`}
      >
        <p>
          <strong>Title: </strong>
          {movieDetail.Title}
        </p>
        <p>
          <strong>Released on: </strong>
          {movieDetail.Released}
        </p>
        <p>
          <strong>Language: </strong>
          {movieDetail.Language}
        </p>

        <p>
          <strong>Runtime: </strong>
          {movieDetail.Runtime !== "N/A" ? (
            movieDetail.Runtime
          ) : (
            <span className="text-danger">No details about runtime</span>
          )}
        </p>
      </div>

      <div
        className={`${styles.creator} ${
          showContent === "creator" ? styles.show : ""
        }`}
      >
        <p>
          <strong>Actors: </strong>
          {movieDetail.Actors}
        </p>
        <p>
          <strong>Director: </strong>
          {movieDetail.Director}
        </p>
        <p>
          <strong>Writer: </strong>
          {movieDetail.Writer !== "N/A" > 0 ? (
            movieDetail.Writer
          ) : (
            <span className="text-danger">No details about writer</span>
          )}
        </p>
      </div>
      <div
        className={`${styles.content} ${
          showContent === "content" ? styles.show : ""
        }`}
      >
        <p>
          <strong>Plot: </strong>
          {movieDetail.Plot !== "N/A" ? (
            movieDetail.Plot
          ) : (
            <span className="text-danger">No details about plot</span>
          )}
        </p>
        <p>
          <strong>Genre: </strong>
          {movieDetail.Genre}
        </p>
        <p>
          <strong>Country: </strong>
          {movieDetail.Country}
        </p>
      </div>
      <div
        className={`${styles.review} ${
          showContent === "review" ? styles.show : ""
        }`}
      >
        <p>
          <strong>ImdbRating:</strong>
          {movieDetail.imdbRating !== "N/A" ? (
            movieDetail.imdbRating
          ) : (
            <span className="text-danger">No details about rating</span>
          )}
        </p>
        <p>
          <strong>Worldwise Collection: </strong>
          {movieDetail.BoxOffice !== "N/A" ? (
            movieDetail.BoxOffice
          ) : (
            <span className="text-danger">
              No details about box office collection
            </span>
          )}
        </p>
        <p>
          <strong>Year: </strong>
          {movieDetail.Year !== "N/A" ? (
            movieDetail.Year
          ) : (
            <span className="text-danger">No details about released year</span>
          )}
        </p>
      </div>

      <button
        className="btn btn-primary me-2"
        onClick={handleWatch}
        disabled={isAlreadyWatched}
      >
        {isAlreadyWatched ? "AlreadyWatched" : "Add to WatchList"}
      </button>
      <button
        className="btn btn-secondary"
        onClick={handleFavorite}
        disabled={isAlreadyFavorite}
      >
        {isAlreadyFavorite ? "AlreadyFavorite" : "Add to FavoriteList"}
      </button>
      <button className={styles.closeBtn} onClick={() => updateMovieId("")}>
        X
      </button>
    </div>
  );
}

export default MovieDetailPage;
