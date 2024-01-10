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

  const imgURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <div className="">
      <img className="" src={imgURL} alt={movie.title} />
      <div className="">
        <p className="">
          <strong>Titulo:</strong>
          {movie.title}
        </p>

        <p>
          <strong>Descripcion</strong>
          {movie.overview}
        </p>

        <p>
          <strong>Generos:</strong>
          {movie.genres.map((genre) => genre.name).join(" - ")}
        </p>

        <p>
          <strong>Fecha de Lanzamiento</strong>
          {movie.release_date}
        </p>
        <p>
          <strong>Compañias productoras: </strong>
          {movie.production_companies
            .map((company) => company.name)
            .join(" - ")}
          {/*      <img src={compania} alt={compania} /> */}
        </p>
      </div>
    </div>
  );
};