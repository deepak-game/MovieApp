import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function SearchBar({ query, updateQuery }) {
  const navigate = useNavigate();
  const location = useLocation();

  //will make search from home route only
  //focus on input from any route take on homepage
  function changeRouteToHome() {
    if (location.pathname === "/") {
      return;
    } else {
      navigate("/");
    }
  }

  //resetting search query when route changes
  useEffect(() => {
    updateQuery("");
  }, [location.pathname]);

  return (
    <form>
      <input
        type="text"
        className="mx-1 border rounded flex-grow-1 w-100"
        placeholder="Search movie...."
        onFocus={changeRouteToHome}
        value={query}
        onChange={(e) => updateQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
