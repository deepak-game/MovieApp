import { useState, useEffect } from "react";
import {
  calculateCollection,
  calculateRating,
  calculateRuntime,
} from "./filterDataCalculation.js";
import styles from "./watchedMovies.module.css";

function WatchedFilter({ filterData, watchedData }) {
  const [input, setInput] = useState("hrt");
  const [currentData, setCurrentData] = useState("");

  useEffect(() => {
    if (!watchedData.length) {
      return;
    }

    //for rating calulation
    if (input == "hrt") {
      //when no ratings exist
      if (!filterData[0].ratings.highest) {
        setCurrentData((s) => ({ ...s, d: "No data about rating" }));
        return;
      }

      const data = calculateRating(watchedData, filterData[0].ratings.highest);
      setCurrentData(data);
    } else if (input == "lrt") {
      //when no ratings exist
      if (!filterData[0].ratings.lowest) {
        setCurrentData((s) => ({ ...s, d: "No data about rating" }));
        return;
      }
      const data = calculateRating(watchedData, filterData[0].ratings.lowest);
      setCurrentData(data);
    }

    //for runTime calculation
    if (input == "hrn") {
      //when no runtime exist
      if (!filterData[0].runTime.highest) {
        setCurrentData((s) => ({ ...s, d: "No data about runtime" }));
        return;
      }

      const data = calculateRuntime(watchedData, filterData[0].runTime.highest);
      setCurrentData(data);
    } else if (input == "lrn") {
      //when no runtime exist
      if (!filterData[0].runTime.lowest) {
        setCurrentData((s) => ({ ...s, d: "No data about runtime" }));
        return;
      }
      const data = calculateRuntime(watchedData, filterData[0].runTime.lowest);
      setCurrentData(data);
    }

    //for collection calculation
    if (input == "hc") {
      //when no collection exist
      if (!filterData[0].collection.highest) {
        setCurrentData((s) => ({ ...s, d: "No data about collection" }));
        return;
      }

      const data = calculateCollection(
        watchedData,
        filterData[0].collection.highest
      );

      setCurrentData(data);
    } else if (input == "lc") {
      //when no collection exist
      if (!filterData[0].collection.lowest) {
        setCurrentData((s) => ({ ...s, d: "No data collection" }));
        return;
      }
      const data = calculateCollection(
        watchedData,
        filterData[0].collection.lowest
      );
      setCurrentData(data);
    }
  }, [input]);

  return (
    <div>
      <form className="m-3">
        Show Movie by
        <select
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="ms-2"
          disabled={!currentData}
        >
          <option value="hc">Highest Collection</option>
          <option value="lc">Lowest Collection</option>
          <option value="hrt">Highest Rating</option>
          <option value="lrt">Lowest Rating</option>
          <option value="hrn">Highest Runtime</option>
          <option value="lrn">Lowest RunTime</option>
        </select>
        {currentData ? (
          <ShowFilterMovie data={currentData} />
        ) : (
          <p>No movie to filter</p>
        )}
      </form>
    </div>
  );
}

function ShowFilterMovie({ data }) {
  return (
    <div className="m-3 d-flex align-item-center">
      <img src={data.p} alt="movie-img" className={styles.filterImg} />
      <div className="ms-2">
        <p>{data.t}</p>
        <p className="text text-danger">{data.d}</p>
      </div>
    </div>
  );
}

export default WatchedFilter;
