import { MovieContext } from "../../movie.jsx";
import { useContext, useState } from "react";
import ShowWatchedStats from "./showWatchedStats.jsx";
import WatchedFilter from "./watchedSummaryFilter.jsx";
import ShowWatchedMovies from "./showWatchedMovies.jsx";

function WatchedMovies() {
  const { watchedData, updateWatched } = useContext(MovieContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterData, setFilterData] = useState([]);

  return (
    <div className="m-2">
      <button
        className="btn btn-primary ms-3"
        onClick={() => setShowFilter((s) => !s)}
      >
        {showFilter ? "Hide" : "Show"} Filter
      </button>
      {!showFilter && (
        <>
          <ShowWatchedStats
            watchedData={watchedData}
            updateFilterData={setFilterData}
          />
          <ShowWatchedMovies
            watchedData={watchedData}
            updateWatched={updateWatched}
          />
        </>
      )}
      {showFilter && (
        <WatchedFilter filterData={filterData} watchedData={watchedData} />
      )}
    </div>
  );
}

export default WatchedMovies;
