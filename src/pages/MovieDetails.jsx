import { get } from "../../utils/httpClient";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    get(`/movie/${movieId}`).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const imgURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="bg-gray-300 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto">
        <div className="w-full p-4 text-center bg-gray-800 border border-gray-700 rounded-lg shadow sm:p-8 my-4">
          <img className="mx-auto mb-5" src={imgURL} alt={movie.title} />
          <h5 className="mb-5 text-3xl font-bold text-white">{movie.title}</h5>
          <p className="mb-5 text-base text-gray-400 sm:text-lg">
            {movie.overview}
          </p>
          <p className="text-base text-gray-400">
            {movie.genres.map((genre) => genre.name).join(" - ")}
          </p>
          <p className="text-base text-gray-400">{movie.release_date}</p>
          <p className="text-base text-gray-400">
            {movie.production_companies
              .map((company) => company.name)
              .join(" - ")}
          </p>
        </div>
      </div>
    </div>
  );
};
