function CompareByName({ data, by }) {
  return (
    <div className="my-3 p-2 border rounded">
      <h5 className="text-danger">{by} Similarity</h5>
      <div>
        {data.unique.length ? (
          <p>
            <strong>Common {by}: </strong>
            {data.unique.join()}
          </p>
        ) : (
          `No common ${by} in both movies.`
        )}
      </div>
      {!data.difference_1.length && !data.difference_2.length > 0 ? (
        <strong>No {by} differences in both movies. </strong>
      ) : (
        <Different data={data} by={by} />
      )}
    </div>
  );
}

function Different({ data, by }) {
  return (
    <div className="mt-2">
      <h5 className="text-danger">{by} Differences</h5>
      <p className="p-0 m-0">
        <strong>Movies1 {by}: </strong>
        {data.difference_1.length > 0
          ? data.difference_1.join()
          : data.unique.join()}
      </p>
      <p className="p-0 m-0">
        <strong>Movies2 {by}: </strong>
        {data.difference_2.length > 0
          ? data.difference_2.join()
          : data.unique.join()}
      </p>
    </div>
  );
}

export default CompareByName;
