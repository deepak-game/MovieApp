import styles from "../advancedSearch.module.css";
import { isNumeric } from "./inputValidatorFunctions.js";

function Rating({ byRating, setByRating, dispatch }) {
  function handleChange(inp) {
    const isValid = isNumeric(inp.trim());

    if (isValid && inp >= 0 && inp <= 10) {
      setByRating((s) => ({
        ...s,
        isError: false,
        value: { ...s.value, input: inp },
      }));
      dispatch({ type: "reset" });
    } else {
      setByRating((s) => ({
        ...s,
        isError: true,
        value: { ...s.value, input: inp },
      }));
      dispatch({ type: "reset" });
    }
  }

  function toggleCheckbox() {
    setByRating((s) => ({
      ...s,
      value: { range: "<=", input: "" },
      isChecked: !s.isChecked,
      isError: false,
    }));
    dispatch({ type: "reset" });
  }

  function handleRange(inp) {
    setByRating((s) => ({ ...s, value: { ...s.value, range: inp } }));
  }

  return (
    <div className="m-2">
      <input
        type="checkbox"
        checked={byRating.isChecked}
        onChange={toggleCheckbox}
      />
      <select
        className="ms-2"
        disabled={!byRating.isChecked}
        value={byRating.value.range}
        onChange={(e) => handleRange(e.target.value)}
      >
        <option value="<=">&le;</option>
        <option value=">=">&ge;</option>
      </select>
      <input
        type="text"
        disabled={!byRating.isChecked}
        className={styles.range}
        value={byRating.value.input}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search by rating(e.g 5,7)"
      />
      {byRating.isError && (
        <p className="text-danger">Ratings should be between(0-10)</p>
      )}
    </div>
  );
}

export default Rating;
