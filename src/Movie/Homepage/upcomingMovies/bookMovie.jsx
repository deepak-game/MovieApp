import styles from "./bookMovie.module.css";
import { useState } from "react";

function BookMovie({ movieData, setBook, setBookingHistory, setMovieData }) {
  const [selectedSeat, setSelectedSeat] = useState(movieData.SelectedSeats);
  const [currentSeat, setCurrentSeat] = useState([]);

  //selecting seat
  function handleClick(seatNum) {
    //checkig whether seat is already selected or not
    const isAvl = currentSeat.includes(seatNum);

    if (isAvl) {
      return;
    } else {
      setSelectedSeat((s) => [...s, seatNum]);
      setCurrentSeat((s) => [...s, seatNum]);
    }
  }

  //creating booking
  function createBooking() {
    if (!currentSeat.length) return;

    const newBooking = {
      bookingId: Date.now(),
      name: movieData.Title,
      totalSeat: currentSeat.length,
      seatNumbers: [...currentSeat],
      price: currentSeat.length * movieData.Price,
      releaseDate: movieData.Release,
      bookingDate: new Date().toDateString(),
      isCancel: false,
    };

    setBookingHistory((s) => [...s, newBooking]);

    setMovieData((s) =>
      s.map((movie) => {
        if (movie.Title === movieData.Title) {
          return {
            ...movie,
            SelectedSeats: [...movie.SelectedSeats, ...currentSeat],
          };
        } else {
          return movie;
        }
      })
    );

    setBook("");

    alert(
      "Booking confirmed for: " +
        movieData.Title +
        " " +
        "on" +
        " " +
        movieData.Release
    );
  }

  return (
    <div className={styles.movieBooker}>
      <p className={styles.textSize}>Booking for: {movieData.Title}</p>
      <Screen />
      <SeatStatusIndicator />
      <div className={styles.seats}>
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i + 1}
            className={`${styles.seat} ${
              selectedSeat.includes(i + 1) ? styles.book : ""
            }`}
            onClick={() => handleClick(i + 1)}
          ></div>
        ))}
      </div>
      <PriceCalculator totalSeat={currentSeat.length} price={movieData.Price} />
      <div>
        <button className={styles.btn} onClick={createBooking}>
          Book
        </button>
        <button className={styles.btn} onClick={() => setBook("")}>
          Cancel
        </button>
      </div>
    </div>
  );
}

function Screen() {
  return <div className={styles.screen}></div>;
}

function PriceCalculator({ totalSeat, price }) {
  return (
    <div>
      {totalSeat > 0 ? (
        <p className={styles.textSize}>
          Your total seats {totalSeat} for price of &#8377;{totalSeat * price}
        </p>
      ) : (
        <p className={styles.textSize}>Please select a seat</p>
      )}
    </div>
  );
}

function SeatStatusIndicator() {
  return (
    <div className={styles.status}>
      <div className={`${styles.seat} ${styles.noHover}`}></div>
      <h3>Avl</h3>
      <div className={`${styles.seat} ${styles.book}`}></div>
      <h4>Occupied</h4>
    </div>
  );
}

export default BookMovie;
