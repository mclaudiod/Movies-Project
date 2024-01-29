import { Link } from "react-router-dom";

export const MoviesCard = ({ movie }) => {
  const imgURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <li className="rounded border-8 border-gray-800 bg-gray-800 h-full hover:border-gray-700 hover:bg-gray-700">
      <Link className="flex flex-col h-full w-full" to={`/movie/${movie.id}`}>
        <img
          className="h-full w-full"
          src={imgURL}
          alt={movie.title}
        />
        <div className="text-white text-lg font-bold text-center flex items-center justify-center h-20 px-4">{movie.title}</div>
      </Link>
    </li>
  );
};
