import styles from "../advancedSearch.module.css";
import { isNumeric } from "./inputValidatorFunctions.js";

function Year({ byYear, setByYear, dispatch }) {
  function handleChange(input) {
    const isValid = isNumeric(input.trim());

    if (isValid && input >= 1900 && input <= new Date().getFullYear()) {
      setByYear((s) => ({ ...s, isError: false, value: input }));
      dispatch({ type: "reset" });
    } else {
      setByYear((s) => ({ ...s, isError: true, value: input }));
      dispatch({ type: "reset" });
    }
  }

  function toggleCheckbox() {
    setByYear((s) => ({
      ...s,
      value: "",
      isChecked: !s.isChecked,
      isError: false,
    }));
    dispatch({ type: "reset" });
  }

  return (
    <div className="m-2">
      <input
        type="checkbox"
        checked={byYear.isChecked}
        onChange={toggleCheckbox}
      />
      <input
        type="text"
        className={styles.input}
        disabled={!byYear.isChecked}
        onChange={(e) => handleChange(e.target.value)}
        value={byYear.value}
        placeholder="Search by year(e.g 2002)"
      />
      {byYear.isError && (
        <p className="text-danger">
          Year should be between 1900 and {new Date().getFullYear()}
        </p>
      )}
    </div>
  );
}

export default Year;
