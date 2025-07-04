import styles from "./movieByGenre.module.css";
import Genre from "./genre.jsx";
import { useState, useEffect, createContext } from "react";

const GenreContext = createContext();

function MovieByGenre() {
  const [genreData, setGenreData] = useState([]);
  const [currentGenre, setCurrentGenre] = useState("");

  const data = {
    updateGenre: setGenreData,
    currentGenre,
    updateCurrentGenre: setCurrentGenre,
  };

  useEffect(() => {
    setGenreData([]);
    setCurrentGenre("");
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-space-between p-2">
      <div>
        <GenreContext.Provider value={data}>
          <Genre>Action</Genre>
          <Genre>Comedy</Genre>
          <Genre>Drama</Genre>
          <Genre>Thriller</Genre>
          <Genre>Romance</Genre>
          <Genre>Sci-Fi</Genre>
        </GenreContext.Provider>
      </div>
      <div className={styles.resultContainer}>
        {genreData.length ? (
          <>
            <h5 className="text-center text-success">
              Total {genreData.length} movies under {currentGenre} genre.
            </h5>
            {genreData.map((el) => (
              <Result data={el} key={el.imdbID} />
            ))}
          </>
        ) : (
          <p className="text-center text-info">
            {currentGenre ? (
              <strong>No movies under {currentGenre} genre.</strong>
            ) : (
              "Please select a genre"
            )}
          </p>
        )}
      </div>
    </div>
  );
}

function Result({ data }) {
  return (
    <div className={styles.result}>
      <img src={data.Poster} alt="movie-image" className={styles.genreImg} />
      <div>
        <p className="m-0 p-0">{data.Title}</p>
        <p className="my-2 p-0">{data.Year}</p>
        <p className="m-0 p-0">{data.imdbRating}</p>
      </div>
    </div>
  );
}

export default MovieByGenre;
export { GenreContext };
