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
    <main className="container mx-auto">
      <ul className="grid gap-16 grid-cols-4">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </main>
  );
};
