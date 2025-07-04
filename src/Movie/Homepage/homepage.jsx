import UpcomingMovies from "./upcomingMovies/upcomingMovie.jsx";
import BookMovie from "./upcomingMovies/bookMovie.jsx";
import RecommendedMovies from "./recommend/recommend.jsx";
import IndianCinema from "./aboutIndianCinema/aboutCinema.jsx";
import Footer from "./footer/footer.jsx";
import { useState } from "react";

function HomePage({
  updateBookingHistory,
  recommendData,
  upComingMovies,
  updateUpcomingMovies,
}) {
  const [bookMovie, setBookMovie] = useState("");

  return (
    <section>
      {!bookMovie && (
        <UpcomingMovies movieData={upComingMovies} setBook={setBookMovie} />
      )}
      {bookMovie && (
        <BookMovie
          movieData={bookMovie}
          setBook={setBookMovie}
          setBookingHistory={updateBookingHistory}
          setMovieData={updateUpcomingMovies}
        />
      )}
      {!bookMovie && (
        <>
          <RecommendedMovies data={recommendData} />
          <IndianCinema />
          <Footer />
        </>
      )}
    </section>
  );
}

export default HomePage;
