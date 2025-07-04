function searchByName(el, action) {
  const t =
    el.Title.includes(action.payload.nameQuery) ||
    el.Actors.includes(action.payload.nameQuery) ||
    el.Director.includes(action.payload.nameQuery) ||
    el.Writer.includes(action.payload.nameQuery);
  return t;
}

function searchByRating(el, action) {
  if (action.payload.ratingQuery.range === "<=") {
    return el.imdbRating <= +action.payload.ratingQuery.input;
  } else if (action.payload.ratingQuery.range === ">=") {
    return el.imdbRating >= +action.payload.ratingQuery.input;
  }
}

function searchByYear(el, action) {
  return el.Year == action.payload.yearQuery;
}

//useReducer function
function advancedSearchReducer(state, action) {
  switch (action.type) {
    case "byName": {
      const movies = action.data.filter((el) => {
        if (searchByName(el, action)) {
          return el;
        }
      });
      return movies;
    }

    case "byRating": {
      const movies = action.data.filter((el) => searchByRating(el, action));
      return movies;
    }

    case "byYear": {
      const movies = action.data.filter((el) => searchByYear(el, action));
      return movies;
    }

    case "byNameAndYear": {
      const movies = action.data.filter(
        (el) => searchByName(el, action) && searchByYear(el, action)
      );
      return movies;
    }

    case "byNameAndRating": {
      const movies = action.data.filter(
        (el) => searchByName(el, action) && searchByRating(el, action)
      );
      return movies;
    }
    case "byYearAndRating": {
      const movies = action.data.filter(
        (el) => searchByYear(el, action) && searchByRating(el, action)
      );
      return movies;
    }

    case "byAll": {
      const movies = action.data.filter(
        (el) =>
          searchByName(el, action) &&
          searchByRating(el, action) &&
          searchByYear(el, action)
      );
      return movies;
    }
    case "reset":
      return [];

    default:
      return state;
  }
}

export default advancedSearchReducer;
