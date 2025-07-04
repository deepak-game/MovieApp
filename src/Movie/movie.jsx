import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useRef, useEffect } from "react";
import Navbar from "./Navigation/navbar.jsx";
import Homepage from "./Homepage/homepage.jsx";
import SearchAnalytics from "./searchAnalytics/searchAnalytics.jsx";
import WatchedMovies from "./MyMovies/Watched/watchedMovies.jsx";
import FavoriteMovies from "./MyMovies/Favorite/favoriteMovies.jsx";
import BookingHistory from "./MyMovies/bookingHistory/bookingHistory.jsx";
import SearchResult from "./searchResult/searchResult.jsx";
import MovieByGenre from "./searchAnalytics/MovieByGenre/movieByGenre.jsx";
import AdvancedSearch from "./searchAnalytics/AdvancedSearch/advancedSearch.jsx";
import CompareMovies from "./searchAnalytics/ComapreMovie/compareMovies.jsx";
import upcomingMoviesData from "./homepage/upcomingMovies/movieData.js";
import About from "./Homepage/company/about.jsx";
import Privacy from "./Homepage/company/privacy.jsx";
import Terms from "./Homepage/company/terms.jsx";
import Contact from "./Homepage/company/contact.jsx";

//creating watched and favorite movie data context
const MovieContext = createContext();
const AnalyticsContext = createContext();

//Movie component
function Movie() {
  const [searchQuery, setSearchQuery] = useState("");
  const [watchedList, setWatchedList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [searchedMoviesId, setSearchedMoviesId] = useState([]);
  const previousSearchedMoviesId = useRef([]);
  const [moviesDataForAnalytics, setMoviesDataForAnalytics] = useState([]);
  const [recommendData, setRecommendData] = useState([]);
  const [bookingHistory, setBookingHistory] = useState([]);
  const [upcomingMovies, setUpComingMovies] = useState(upcomingMoviesData);

  console.log("watched list", watchedList);

  //creating recommend data
  useEffect(() => {
    if (moviesDataForAnalytics.length) {
      const data = moviesDataForAnalytics.filter((el) => el.imdbRating >= 7.5);

      if (!watchedList.length) {
        setRecommendData(data);
        return;
      }

      //removing any movies which is already in watched list
      const newData = data.reduce((acc, curEl) => {
        const isExistInWatchedList = watchedList.some(
          (el) => el.imdbID === curEl.imdbID
        );
        if (isExistInWatchedList) {
          return [...acc];
        } else {
          return [...acc, curEl];
        }
      }, []);
      setRecommendData(newData);
    }
  }, [moviesDataForAnalytics, watchedList]);

  //creating movies context data
  const movieData = {
    watchedData: watchedList,
    favoriteData: favoriteList,
    updateWatched: setWatchedList,
    updateFavorite: setFavoriteList,
    bookingData: bookingHistory,
    updateBookingData: setBookingHistory,
    updateUpcomingMoviesData: setUpComingMovies,
  };

  //creating analytcis context data
  const analyticsData = {
    searchedMoviesId,
    previousSearchedMoviesId: previousSearchedMoviesId,
    moviesDataForAnalytics,
    updateMoviesDataForAnalytics: setMoviesDataForAnalytics,
  };

  return (
    <BrowserRouter>
      <Navbar updateQuery={setSearchQuery} query={searchQuery} />
      <MovieContext.Provider value={movieData}>
        <Routes>
          <Route
            path="/"
            element={
              searchQuery ? (
                <SearchResult
                  query={searchQuery}
                  updateSearchedMoviesId={setSearchedMoviesId}
                />
              ) : (
                <Homepage
                  recommendData={recommendData}
                  updateBookingHistory={setBookingHistory}
                  upComingMovies={upcomingMovies}
                  updateUpcomingMovies={setUpComingMovies}
                />
              )
            }
          />
          <Route
            path="/search-analytics"
            element={
              <AnalyticsContext.Provider value={analyticsData}>
                <SearchAnalytics />
              </AnalyticsContext.Provider>
            }
          >
            <Route path="movie-by-genre" element={<MovieByGenre />} />
            <Route path="advanced-search" element={<AdvancedSearch />} />
            <Route path="compare-movies" element={<CompareMovies />} />
          </Route>
          <Route path="/my-movies/watched" element={<WatchedMovies />} />
          <Route path="/my-movies/favorite" element={<FavoriteMovies />} />
          <Route path="/my-movies/bookings" element={<BookingHistory />} />
          <Route path="/about-page" element={<About />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-page" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MovieContext.Provider>
    </BrowserRouter>
  );
}

export default Movie;
export { MovieContext, AnalyticsContext };
