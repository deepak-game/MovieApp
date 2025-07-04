import { useState } from "react";
import styles from "./compareMovie.module.css";

//to selector movie
function MovieSelector({ suggestionData, data, updateSelect, list_id }) {
  const [isError, setIsError] = useState(false);

  function handleSelect(value) {
    const isMovieExist = data.filter(
      (el) => `${el.Title} ${el.Year}` === value.trim()
    );

    if (isMovieExist.length) {
      updateSelect(value);
      setIsError(false);
    } else {
      setIsError(true);
      updateSelect("");
    }
  }

  return (
    <div className={styles.selector}>
      <h6>Please select {list_id}</h6>
      <input
        type="text"
        className="w-50"
        list={list_id}
        onChange={(e) => handleSelect(e.target.value)}
      />
      <datalist id={list_id}>
        {suggestionData.map((el) => (
          <option key={el.id} value={`${el.title} ${el.year}`} />
        ))}
      </datalist>
      {isError && (
        <p className="text-danger">
          Please select a movie, without any modification
        </p>
      )}
    </div>
  );
}

export default MovieSelector;
