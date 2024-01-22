import { MoviesCard } from "./MoviesCard";
import { get } from "../../utils/httpClient";
import { useState, useEffect } from "react";

export const MoviesGrid = () => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovie(data.results);
    });
  }, []);

  return (
    <div className="container mx-auto py-8">
      <ul className="grid gap-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};
