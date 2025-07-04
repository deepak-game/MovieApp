import styles from "./watchedMovies.module.css";
import { useEffect } from "react";
import {
  calculateCollection,
  calculateRating,
  calculateRuntime,
} from "./watchedStatsCalculation.js";

function ShowWatchedStats({ watchedData, updateFilterData }) {
  //calculating total Movies
  const totalMovies = watchedData.length;

  const ratings = calculateRating(watchedData);
  const runTime = calculateRuntime(watchedData);
  const collection = calculateCollection(watchedData);

  useEffect(() => {
    updateFilterData([
      { ratings: ratings, runTime: runTime, collection: collection },
    ]);
  }, [watchedData]);

  return (
    <div className={styles.summary}>
      <h4>Watched Summary Stats</h4>
      <div className="text-danger">
        <p>
          <strong>Total Movies: </strong>
          {totalMovies}
        </p>
        <p>
          <strong>Average Rating: </strong>
          {ratings.avg}
        </p>
        <p>
          <strong>Average Collection: </strong>${collection.avg}
        </p>
        <p>
          <strong>Average Runtime: </strong>
          {runTime.avg} min
        </p>
      </div>
    </div>
  );
}

export default ShowWatchedStats;
