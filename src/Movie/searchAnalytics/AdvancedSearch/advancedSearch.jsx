import { useState, useContext, useEffect, useReducer } from "react";
import styles from "./advancedSearch.module.css";
import { AnalyticsContext } from "../../movie.jsx";
import SearchForm from "./SearchForm/searchForm.jsx";
import SearchResult from "./searchResult.jsx";
import advancedSearchReducer from "./advancedSearch.reducer.js";

function AdvancedSearch() {
  const [searchResult, dispatch] = useReducer(advancedSearchReducer, []);
  const [autocompleteData, setAutocompleteData] = useState([]);
  const { moviesDataForAnalytics } = useContext(AnalyticsContext);

  useEffect(() => {
    if (!moviesDataForAnalytics.length) {
      return;
    }

    //finding actors
    let actorsData = moviesDataForAnalytics
      .map((el) => el.Actors.split(",").map((rl) => rl.trim()))
      .reduce((acc, curEl) => [...acc, ...curEl], []);
    //removing duplicates actors name
    const refineActorsData = [...new Set(actorsData)];
    setAutocompleteData(refineActorsData);
  }, []);

  return (
    <div className={styles.searchContainer}>
      <SearchForm
        analyticsData={moviesDataForAnalytics}
        autocompleteData={autocompleteData}
        dispatch={dispatch}
      />
      {searchResult.length > 0 ? (
        <SearchResult searchResult={searchResult} />
      ) : (
        "No Result"
      )}
    </div>
  );
}

export default AdvancedSearch;
