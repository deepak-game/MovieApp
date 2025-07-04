import CompareByName from "./compareByName.jsx";
import CompareByRating from "./compareByRating.jsx";
import CompareByLanguage from "./comapreByLanguage.jsx";

function CompareResult({ data }) {
  return (
    <div className="bg-light p-2">
      <p className="text-center text-success">
        <strong>
          Compare Result for {data.movie1.slice(0, data.movie1.length - 5)}(
          {data.movie1.slice(-5)}) and &nbsp;
          {data.movie2.slice(0, data.movie2.length - 5)}({data.movie2.slice(-5)}
          )
        </strong>
      </p>
      <CompareByName data={data.actor} by="Actor/s" />
      <CompareByName data={data.director} by="Director/s" />
      <CompareByName data={data.genre} by="Genre" />
      <CompareByLanguage data={data.language} by="Language" />
      <CompareByRating data={data.rating} />
    </div>
  );
}
export default CompareResult;
