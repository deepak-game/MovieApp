function calculateRating(watchedData) {
  let avgRating = 0;
  let highestRating = 0;
  let lowestRating = 0;

  const ratings = watchedData
    .filter((el) => el.imdbRating && el.imdbRating !== "N/A")
    .map((data) => +data.imdbRating)
    .filter((el) => Number.isFinite(el));

  if (ratings.length) {
    avgRating = +(
      ratings.reduce((acc, curEl) => acc + curEl, 0) / ratings.length
    ).toFixed(2);
    highestRating = Math.max(...ratings);
    lowestRating = Math.min(...ratings);
  }

  return { avg: avgRating, highest: highestRating, lowest: lowestRating };
}

function calculateRuntime(watchedData) {
  let avgRuntime = 0;
  let highestRuntime = 0;
  let lowestRuntime = 0;

  const runTime = watchedData
    .filter((el) => el.Runtime && el.Runtime !== "N/A")
    .map((el) => +el.Runtime.split(" ")[0])
    .filter((el) => Number.isFinite(el));

  if (runTime.length) {
    avgRuntime = +(
      runTime.reduce((acc, curEl) => acc + curEl, 0) / runTime.length
    ).toFixed(2);
    console.log("runtine and avg", runTime, avgRuntime);
    highestRuntime = Math.max(...runTime);
    lowestRuntime = Math.min(...runTime);
  }
  return { avg: avgRuntime, highest: highestRuntime, lowest: lowestRuntime };
}

function calculateCollection(watchedData) {
  let highestBoxOfficeCollection = 0;
  let lowestBoxOfficeCollection = 0;
  let averageCollection = 0;

  const boxOfficeCollection = watchedData
    .filter((el) => el.BoxOffice && el.BoxOffice !== "N/A")
    .map((el) => el.BoxOffice.split("$")[1])
    .map((el) => +el.split(",").join(""));

  if (boxOfficeCollection.length) {
    averageCollection = +(
      boxOfficeCollection.reduce((acc, cu) => acc + cu, 0) /
      boxOfficeCollection.length
    ).toFixed(2);

    highestBoxOfficeCollection = Math.max(...boxOfficeCollection);
    lowestBoxOfficeCollection = Math.min(...boxOfficeCollection);
  }

  return {
    avg: averageCollection,
    highest: highestBoxOfficeCollection,
    lowest: lowestBoxOfficeCollection,
  };
}

export { calculateCollection, calculateRuntime, calculateRating };
