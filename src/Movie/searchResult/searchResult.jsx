import { useState, useEffect } from "react";
import MovieCard from "./movieCard.jsx";
import styles from "./searchResult.module.css";
import MovieDetailPage from "./movieDetailPage.jsx";

function SearchResult({ query, updateSearchedMoviesId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState([]);
  const [movieById, setMovieById] = useState("");

  useEffect(() => {
    async function getMovie() {
      try {
        setMovieById("");
        setIsLoading(true);
        setError(false);
        setResult([]);

        const res = await fetch(
          `https://www.omdbapi.com/?apikey=18f2ab1b&s=${query}`
        );

        if (!res.ok) {
          throw new Error("Please try after some time....");
        }

        const data = await res.json();

        if (data.Response === "False") {
          throw new Error("No movie found!");
        }

        setResult(data.Search);
        //extracting only imdbID for analytics
        updateSearchedMoviesId((s) => [
          ...s,
          ...data.Search.map((el) => el.imdbID),
        ]);
        setIsLoading(false);
        setError("");
      } catch (err) {
        const msg =
          err.message === "Failed to fetch" ? "No internet.." : err.message;
        setError(msg);
        setIsLoading(false);
      }
    }

    //wait for half second before making api call
    const id = setTimeout(() => {
      getMovie();
    }, 500);

    return () => clearTimeout(id);
  }, [query]);

  return (
    <>
      <div className="text-info text-center">
        {isLoading || error ? <h2> {error ? error : "Loading..."} </h2> : ""}
      </div>
      {result.length > 0 && !movieById && (
        <MovieCardContainer
          result={result}
          query={query}
          updateMovieId={setMovieById}
        />
      )}
      {movieById && (
        <MovieDetailPage movieId={movieById} updateMovieId={setMovieById} />
      )}
    </>
  );
}

function MovieCardContainer({ result, query, updateMovieId }) {
  return (
    <div className={styles.parent}>
      <h3 className="text-warning text-center my-1">
        Search result for {query}
      </h3>
      <div className={styles.cardContainer}>
        {result.map((el) => (
          <MovieCard movie={el} key={el.imdbID} updateMovieId={updateMovieId} />
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
