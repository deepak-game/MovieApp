import { useState, useContext, useEffect } from "react";
import { AnalyticsContext } from "../../movie.jsx";
import styles from "./compareMovie.module.css";
import calculateCompare from "./calculateCompare.js";
import MovieSelector from "./movieSelector.jsx";
import CompareResult from "./compareResult.jsx";

//Compare Movies
function CompareMovies() {
  const { moviesDataForAnalytics } = useContext(AnalyticsContext);
  const [moviesSuggestion, setMoviesSuggestion] = useState([]);
  const [select_1, setSelect1] = useState("");
  const [select_2, setSelect2] = useState("");
  const [result, setResult] = useState({});

  //removing selected movie2
  const selectData_1 = moviesSuggestion.filter(
    (el) => `${el.title} ${el.year}` !== select_2.trim()
  );

  //removing selected movie1
  const selectData_2 = moviesSuggestion.filter(
    (el) => `${el.title} ${el.year}` !== select_1.trim()
  );

  //creating suggestions
  useEffect(() => {
    if (moviesDataForAnalytics.length > 1) {
      const suggestions = moviesDataForAnalytics.map((el) => ({
        title: el.Title.trim(),
        year: el.Year,
        id: el.imdbID,
      }));
      setMoviesSuggestion(suggestions);
    }
  }, []);

  function handleCompare() {
    if (select_1 && select_2) {
      const result = calculateCompare(
        moviesDataForAnalytics,
        select_1,
        select_2
      );
      if (Object.keys(result).length) {
        setResult({ movie1: select_1, movie2: select_2, ...result });
      }
    }
  }

  return (
    <div>
      {moviesSuggestion.length > 0 ? (
        <div className={styles.selectorContainer}>
          <MovieSelector
            suggestionData={selectData_1}
            data={moviesDataForAnalytics}
            updateSelect={setSelect1}
            list_id="movie_1"
          />
          <MovieSelector
            suggestionData={selectData_2}
            data={moviesDataForAnalytics}
            updateSelect={setSelect2}
            list_id="movie_2"
          />
          <button
            className="btn btn-danger"
            onClick={handleCompare}
            disabled={!(select_1.length && select_2.length)}
          >
            Compare Movies
          </button>
        </div>
      ) : (
        <p className="text-center">No movies to compare</p>
      )}
      {Object.keys(result).length > 0 && <CompareResult data={result} />}
    </div>
  );
}

export default CompareMovies;
