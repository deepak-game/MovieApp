function calculateRating(watchedData, input) {
  const data = watchedData
    .filter((el) => el.imdbRating && el.imdbRating !== "N/A")
    .find((el) => el.imdbRating == input);

  const { Poster: p = "N/A", Title: t = "N/A", imdbRating: d = "N/A" } = data;
  return { p, t, d };
}

function calculateRuntime(watchedData, input) {
  const data = watchedData
    .filter((el) => el.Runtime && el.Runtime !== "N/A")
    .find((el) => el.Runtime.split(" ")[0] == input);
  const { Poster: p = "N/A", Title: t = "N/A", Runtime: d = "N/A" } = data;
  return { p, t, d };
}

function calculateCollection(watchedData, input) {
  const data = watchedData
    .filter((el) => el.BoxOffice && el.BoxOffice !== "N/A")
    .find((el) => el.BoxOffice.split("$")[1].split(",").join("") == input);

  const { Poster: p = "N/A", Title: t = "N/A", BoxOffice: d = "N/A" } = data;
  return { p, t, d };
}

export { calculateRating, calculateRuntime, calculateCollection };
