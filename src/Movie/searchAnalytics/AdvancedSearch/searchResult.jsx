import styles from "./advancedSearch.module.css";

function SearchResult({ searchResult }) {
  return (
    <div className={styles.resultContainer}>
      <h6 className="text-center text-primary m-2  fs-2">Your search result</h6>
      {searchResult.length > 0 &&
        searchResult.map((el) => <Result data={el} key={el.imdbID} />)}
    </div>
  );
}

function Result({ data }) {
  return (
    <div className={styles.result}>
      <img src={data.Poster} alt="movie-image" className={styles.genreImg} />
      <div>
        <p className="m-0 p-0">{data.Title}</p>
        <p className="my-2 p-0">{data.Year}</p>
        <p className="m-0 p-0">{data.imdbRating}</p>
      </div>
    </div>
  );
}

export default SearchResult;
