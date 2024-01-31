import { MoviesCard } from "./MoviesCard";
import { MoviesPagination } from "./MoviesPagination";
import { get } from "../../utils/httpClient";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get("page")) || 1;

    get(`/movie${location.pathname}?page=${page}`)
      .then((data) => {
        setMovies(data.results);
        setCurrentPage(data.page);
        setTotalPages(data.total_pages);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [location.pathname, location.search]);

  return (
    <main className="bg-gray-300">
      <div className="container mx-auto py-8">
        <ul className="grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((movie) => (
            <MoviesCard key={movie.id} movie={movie} />
          ))}
        </ul>
        <MoviesPagination currentPage={currentPage} totalPages={totalPages}/>
      </div>
    </main>
  );
};
