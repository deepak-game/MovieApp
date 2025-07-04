import styles from "../advancedSearch.module.css";
import Year from "./year.jsx";
import Name from "./name.jsx";
import Rating from "./rating.jsx";
import { useState } from "react";
import { createSearchQuery } from "./inputValidatorFunctions.js";

let nameInitialState = {
  value: "",
  isChecked: false,
  isError: false,
};

let yearInitialState = {
  value: "",
  isChecked: false,
  isError: false,
};

let ratingInitialState = {
  value: { range: "<=", input: "" },
  isChecked: false,
  isError: false,
};

function SearchForm({ autocompleteData, dispatch, analyticsData }) {
  const [nameField, setNameField] = useState(nameInitialState);
  const [yearField, setYearField] = useState(yearInitialState);
  const [ratingField, setRatingField] = useState(ratingInitialState);

  function handleSubmit(e) {
    e.preventDefault();
    if (nameField.isChecked || yearField.isChecked || ratingField.isChecked) {
      const t = createSearchQuery(
        nameField,
        yearField,
        ratingField,
        setNameField,
        setYearField,
        setRatingField
      );
      if (t) {
        dispatch({ ...t, data: analyticsData });
      }
    }
  }

  function handleClear(e) {
    e.preventDefault();

    if (
      !nameField.isChecked &&
      !yearField.isChecked &&
      !ratingField.isChecked
    ) {
      return;
    }

    setNameField(nameInitialState);
    setYearField(yearInitialState);
    setRatingField(ratingInitialState);
  }

  return (
    <div className="bg-dark p-3 border rounded text-white">
      <h5 className="text-center">Advance Movie Search</h5>
      <form className={styles.search}>
        <Name
          autocompleteData={autocompleteData}
          byName={nameField}
          setByName={setNameField}
          dispatch={dispatch}
        />
        <Year byYear={yearField} setByYear={setYearField} dispatch={dispatch} />
        <Rating
          byRating={ratingField}
          setByRating={setRatingField}
          dispatch={dispatch}
        />
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn btn-info ms-2" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
