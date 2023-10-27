import { MoviesCard } from "./MoviesCard";
import { get } from "../../utils/httpClient";
import { useState, useEffect } from "react";

const MoviesGrid = () => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovie(data.results);
    });
  }, []);

  return (
    <ul className="moviesGrid">
      {movies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesGrid;