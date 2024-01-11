import { Link } from "react-router-dom";

export const MoviesCard = ({ movie }) => {
  const imgURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <li className="rounded border-2 border-black">
      <Link className="flex flex-col justify-center" to={`/movie/${movie.id}`}>
        <img className="" src={imgURL} alt={movie.title} />
        <div className="text-center">{movie.title}</div>
      </Link>
    </li>
  );
};