import { Outlet } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AnalyticsNabvar from "./analyticsNavbar.jsx";
import { AnalyticsContext } from "../movie.jsx";

function SearchAnalytics() {
  const {
    searchedMoviesId,
    previousSearchedMoviesId,
    updateMoviesDataForAnalytics,
  } = useContext(AnalyticsContext);

  const [isLoading, setIsLoading] = useState(false);
  const [newMoviesId, setNewMoviesId] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  //redirect to movie-by-genre route,when data loading completes

  useEffect(() => {
    if (!isLoading && location.pathname === "/search-analytics") {
      navigate("movie-by-genre");
    }
  }, [location.pathname, isLoading]);

  //for filtering new moviedId
  useEffect(() => {
    //removing duplictes movies Id
    const currentSearchedMoviesId = [...new Set(searchedMoviesId)];

    if (previousSearchedMoviesId.current.length) {
      const newId = currentSearchedMoviesId.filter(
        (el) => !previousSearchedMoviesId.current.includes(el)
      );

      //checking whether any new movie id
      if (newId.length) {
        setNewMoviesId(newId);
        previousSearchedMoviesId.current = [
          ...previousSearchedMoviesId.current,
          ...newId,
        ];
      } else {
        return;
      }
    } else {
      //for first time, when no previous movies Id
      previousSearchedMoviesId.current = [...currentSearchedMoviesId];
      setNewMoviesId(currentSearchedMoviesId);
    }
  }, [searchedMoviesId]);

  //for fetching data
  useEffect(() => {
    if (!newMoviesId.length) {
      return;
    }

    let movie = [];

    async function getMovie(el) {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=18f2ab1b&i=${el}`
      );
      const movieData = await res.json();
      return movieData;
    }

    //fetching data for new movies Id only
    const allMovieData = newMoviesId.map((el) => getMovie(el));
    setIsLoading(true);
    Promise.allSettled([...allMovieData]).then((allResult) => {
      allResult.forEach((result) => {
        if (result.status === "fulfilled") {
          movie = [...movie, result.value];
        }
      });
      updateMoviesDataForAnalytics((s) => [...s, ...movie]);
      setIsLoading(false);
    });
  }, [newMoviesId]);

  return (
    <div>
      <h5 className="text-primary m-2 text-center">
        If no analytcs data, please search some movies..
      </h5>
      {isLoading && (
        <h3 className="d-flex align-items-center justify-content-center text-danger">
          Calculating analytics data, please do not switch to another tab...
        </h3>
      )}
      {!isLoading && (
        <>
          <AnalyticsNabvar />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default SearchAnalytics;
