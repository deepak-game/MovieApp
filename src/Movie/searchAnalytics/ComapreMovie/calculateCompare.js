export default function calculateCompare(data, select_1, select_2) {
  //finding actor similar and differce

  const movie_1 = data.find((el) => `${el.Title} ${el.Year}` === select_1);
  const movie_2 = data.find((el) => `${el.Title} ${el.Year}` === select_2);

  const actorResult = compareNames(movie_1, movie_2, "Actors");
  const directorResult = compareNames(movie_1, movie_2, "Director");
  const genreResult = compareNames(movie_1, movie_2, "Genre");
  const ratingResult = compareByNumbers(movie_1, movie_2, "imdbRating");
  const languageResult = compareNames(movie_1, movie_2, "Language");

  return {
    actor: actorResult,
    director: directorResult,
    genre: genreResult,
    rating: ratingResult,
    language: languageResult,
  };
}

function compareNames(movie_1, movie_2, by) {
  //checking whether fields exist or not, if empty string
  const field_1 = movie_1[by];
  const field_2 = movie_2[by];

  if (!field_1 || !field_2) {
    return {
      unique: ["No Data"],
      difference_1: ["No Data"],
      difference_2: ["No Data"],
    };
  }

  const data_1 = field_1.split(",").map((el) => el.trim());
  const data_2 = field_2.split(",").map((el) => el.trim());

  //finding unique actor/director out of two movies
  const unique = data_1.filter((el) => data_2.includes(el));

  //findin different actor/director of both movies
  const difference_1 = data_1.filter((el) => !data_2.includes(el));
  const difference_2 = data_2.filter((el) => !data_1.includes(el));

  return {
    unique,
    difference_1,
    difference_2,
  };
}

function compareByNumbers(movie_1, movie_2, by) {
  let result = {};
  const result_1 = movie_1[by] !== "N/A" && movie_1[by].length > 0;

  const result_2 = movie_1[by] !== "N/A" && movie_2[by].length > 0;

  if (result_1) {
    result.result_1 = movie_1[by];
  } else {
    result.result_1 = "N/A";
  }

  if (result_2) {
    result.result_2 = movie_2[by];
  } else {
    result.result_2 = "N/A";
  }

  return result;
}
