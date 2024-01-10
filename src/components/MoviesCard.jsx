import { Link } from "react-router-dom";

export const MoviesCard = ({ movie }) => {
  const imgURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <li className="">
      <Link to={`/movie/${movie.id}`}>
        <img className="movieImage" src={imgURL} alt={movie.title} />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
};