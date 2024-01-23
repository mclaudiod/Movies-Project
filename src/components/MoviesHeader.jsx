import { Link } from "react-router-dom";

export const MoviesHeader = () => {
  return (
    <div className="p-8 bg-gray-800 text-gray-100">
      <Link to="/">
        <h1 className="">MOVIES</h1>
      </Link>
    </div>
  );
};
