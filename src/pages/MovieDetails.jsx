import { get } from "../../utils/httpClient";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    get(`/movie/${movieId}`)
      .then((data) => {
        if (data.success === false) {
          navigate("/404");
        } else {
          setMovie(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
      });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  let imgURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  if (movie.poster_path === null) {
    imgURL = "/placeholder-poster.jpg";
  }

  return (
    <div className="container mx-auto">
      <div className="w-full p-4 text-center bg-gray-800 border border-gray-700 rounded-lg shadow sm:p-8 mb-7 mt-24">
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
  );
};
