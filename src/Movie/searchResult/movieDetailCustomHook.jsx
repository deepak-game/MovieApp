import { useState, useEffect } from "react";

//movie detail custom hook
function useMovieDetail(query) {
  const [isLoading, setIsLoading] = useState("false");
  const [error, setIsError] = useState("");
  const [movieDetail, setMovieDetail] = useState("");

  useEffect(() => {
    async function getDetails() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=18f2ab1b&i=${query}`
        );

        if (!res.ok) {
          throw new Error("Please try after some time....");
        }
        const data = await res.json();

        if (!data.imdbID) {
          throw new Error("No movie found");
        }
        setIsLoading(false);
        console.log("data is", data);
        setMovieDetail(data);
      } catch (err) {
        const msg =
          err.message === "Failed to fetch"
            ? "No internet connection"
            : err.message;
        setIsError(msg);
        setIsLoading(false);
        setMovieDetail([]);
      }
    }
    getDetails();
  }, [query]);
  return [isLoading, error, movieDetail];
}

export default useMovieDetail;
