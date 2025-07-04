import styles from "./bookingHistory.module.css";
import { MovieContext } from "../../movie.jsx";
import { useContext } from "react";

function BookingHistory() {
  const { bookingData, updateBookingData, updateUpcomingMoviesData } =
    useContext(MovieContext);
  return (
    <div>
      <h2 className="m-1 text-success text-center">
        {bookingData.length ? "Your booking History" : "No Bookings.."}
      </h2>
      {bookingData.map((data) => (
        <Booking
          key={data.bookingId}
          data={data}
          updateBookingData={updateBookingData}
          updateMovieData={updateUpcomingMoviesData}
        />
      ))}
    </div>
  );
}

function Booking({ data, updateBookingData, updateMovieData }) {
  function cancelBooking(currentData) {
    //updating the total seat
    updateMovieData((s) =>
      s.map((el) => {
        if (el.Title === currentData.name) {
          console.log("el and currentData", el, currentData);
          const updatedSeat = el.SelectedSeats.filter(
            (el) => !currentData.seatNumbers.includes(el)
          );
          return { ...el, SelectedSeats: [...updatedSeat] };
        } else {
          return el;
        }
      })
    );

    //canceling booking
    updateBookingData((s) =>
      s.map((data) => {
        if (data.bookingId === currentData.bookingId) {
          return { ...data, isCancel: true };
        } else {
          return data;
        }
      })
    );
  }

  return (
    <div className={`${styles.book} ${data.isCancel ? styles.cancel : ""}`}>
      <div className={styles.top}>
        <p className={styles.date}>
          <strong>On: </strong>
          {data.releaseDate}
        </p>
        <p className={styles.id}>
          <strong>BookingId: </strong> {data.bookingId}
        </p>
      </div>

      <p className="m-0 p-0">
        <strong>Movie name: </strong>
        {data.name}
      </p>
      <p className="m-0 p-0">
        <strong> Seat Numbers: </strong>{" "}
        {"[" + data.seatNumbers.join(", ") + "]"}
      </p>
      <p className="m-0 p-0">
        <strong>Total seats: </strong> {data.totalSeat}{" "}
      </p>
      <p className="m-0 p-0">
        <strong>Booking date: </strong> {data.bookingDate}
      </p>
      {data.isCancel ? (
        <p className={styles.can}>Already cancelled</p>
      ) : (
        <button
          onClick={() => cancelBooking(data)}
          className="btn btn-warning my-1"
        >
          Cancel Booking
        </button>
      )}
    </div>
  );
}

export default BookingHistory;
