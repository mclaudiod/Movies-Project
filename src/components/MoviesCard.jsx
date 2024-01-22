import { Link } from "react-router-dom";

export const MoviesCard = ({ movie }) => {
  const imgURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <li className="rounded border-4 border-black shadow-lg shadow-black h-full">
      <Link className="flex flex-col h-full" to={`/movie/${movie.id}`}>
        <img
          className="h-full border-b-4 border-black"
          src={imgURL}
          alt={movie.title}
        />
        <div className="text-lg font-bold text-center flex items-center justify-center h-20 mx-4">{movie.title}</div>
      </Link>
    </li>
  );
};
