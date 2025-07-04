function CompareByRating({ data }) {
  const isBothRating = data.result_1 !== "N/A" && data.result_2 !== "N/A";
  return (
    <div className="border rounded p-2">
      <p className="p-0 m-0">
        Movie_1 Rating: ⭐
        {data.result_1 == "N/A" ? "Not Available" : data.result_1}
      </p>
      <p className="p-0 mx-0">
        Movie_2 Rating: ⭐
        {data.result_2 == "N/A" ? "Not Available" : data.result_2}
      </p>
      {isBothRating && (
        <div className="p-0 m-0">
          {data.result_1 > data.result_2 && (
            <strong>Movie_1 having higher rating</strong>
          )}
          {data.result_1 < data.result_2 && (
            <strong>Movie_2 having higher rating</strong>
          )}
          {data.result_1 == data.result_2 && (
            <strong>Both having same rating</strong>
          )}
        </div>
      )}
    </div>
  );
}

export default CompareByRating;
