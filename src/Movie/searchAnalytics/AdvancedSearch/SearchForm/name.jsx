import styles from "../advancedSearch.module.css";
import { isAlphabetic } from "./inputValidatorFunctions.js";

function Name({ autocompleteData, byName, setByName, dispatch }) {
  function handleName(inp) {
    const isValid = isAlphabetic(inp.trim());

    if (isValid) {
      setByName((s) => ({ ...s, isError: false, value: inp }));
      dispatch({ type: "reset" });
    } else {
      setByName((s) => ({ ...s, isError: true, value: inp }));
      dispatch({ type: "reset" });
    }
  }

  function handleToggle() {
    setByName((s) => ({
      ...s,
      isError: false,
      value: "",
      isChecked: !s.isChecked,
    }));
    dispatch({ type: "reset" });
  }

  return (
    <div className="m-2">
      <input
        type="checkbox"
        checked={byName.isChecked}
        onChange={handleToggle}
      />
      <input
        type="text"
        list="autocomplete"
        className={styles.input}
        disabled={!byName.isChecked}
        onChange={(e) => handleName(e.target.value)}
        value={byName.value}
        placeholder="Search by actor,director..."
      />
      <datalist id="autocomplete">
        {autocompleteData.map((el, i) => (
          <option key={`${i}+${el}`} value={el} />
        ))}
      </datalist>
      {byName.isError && <p className="text-danger">Strings only</p>}
    </div>
  );
}

export default Name;
