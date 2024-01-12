import { Link } from "react-router-dom";

export const MoviesCard = ({ movie }) => {
  const imgURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <li className="flex flex-col rounded border-4 border-black overflow-hidden shadow-lg shadow-black">
      <Link className="grow flex flex-col" to={`/movie/${movie.id}`}>
        <img className="border-b-4 border-black" src={imgURL} alt={movie.title} />
        <div className="text-lg font-bold text-center p-6">{movie.title}</div>
      </Link>
    </li>
  );
};