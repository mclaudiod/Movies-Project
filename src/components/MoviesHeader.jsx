import { Link } from "react-router-dom";

export const MoviesHeader = () => {
  return (
    <div className="p-8 shadow-lg shadow-black">
      <Link to="/">
        <h1 className="">MOVIES</h1>
      </Link>
    </div>
  );
};
