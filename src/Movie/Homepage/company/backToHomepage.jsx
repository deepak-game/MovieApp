import { useNavigate } from "react-router-dom";

function BackToHomePage() {
  const navigate = useNavigate();

  const btnStyle = {
    position: "absolute",
    top: "0.2rem",
    right: "0.2rem",
  };

  return (
    <button
      style={btnStyle}
      className="btn btn-primary"
      onClick={() => navigate("/")}
    >
      &larr;
    </button>
  );
}

export default BackToHomePage;
