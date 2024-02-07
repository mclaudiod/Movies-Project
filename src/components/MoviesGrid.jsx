import { MoviesCard } from "./MoviesCard";
import { MoviesPagination } from "./MoviesPagination";
import { MoviesLoading } from "./MoviesLoading";
import { get } from "../../utils/httpClient";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get("page")) || 1;
    const query = searchParams.get("search");

    if (page > 500 || page < 1) {
      navigate("/404");
      return;
    }

    if (query === "") {
      navigate("/404");
      return;
    }

    let url = `/movie${location.pathname}?page=${page}`;

    if (query) {
      url = `/search/movie?query=${query}&page=${page}`;
    }

    get(url)
      .then((data) => {
        if (page > data.total_pages) {
          navigate("/404");
        } else {
          setMovies(data.results);
          setCurrentPage(data.page);
          setTotalPages(data.total_pages);
        }
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, [location.pathname, location.search]);

  return (
    <>
      {loading && <MoviesLoading />}
      <div className="container min-h-screen m-auto pb-7 pt-24">
        <div className="grid gap-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {movies.map((movie) => (
            <MoviesCard key={movie.id} movie={movie} />
          ))}
        </div>
        <MoviesPagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );
};
