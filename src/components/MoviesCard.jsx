import { Link } from "react-router-dom";

export const MoviesCard = ({ movie }) => {
  let imgURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  if (movie.poster_path === null) {
    imgURL = "/placeholder-poster.jpg";
  }

  return (
    <div className="rounded border-8 border-gray-800 bg-gray-800 h-full hover:border-gray-700 hover:bg-gray-700">
      <Link className="flex flex-col h-full w-full" to={`/movie/${movie.id}`}>
        <img
          loading="eager"
          className="h-full w-full"
          src={imgURL}
          alt={movie.title}
        />
        <div className="text-white text-lg font-bold text-center flex items-center justify-center h-20 px-4">
          {movie.title}
        </div>
      </Link>
    </div>
  );
};
