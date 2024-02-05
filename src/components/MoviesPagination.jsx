import { Link, useLocation, useParams } from "react-router-dom";

export const MoviesPagination = ({ currentPage, totalPages }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages || currentPage === 500;
  const location = useLocation();
  const { movieName } = useParams();

  const pageUrl = (page) => {
    if (movieName) {
      return `/movie/${movieName}?page=${page}`;
    } else {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("page", page);
      return `${location.pathname}?${searchParams.toString()}`;
    }
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex items-center justify-between mt-8">
      {!isFirstPage && (
        <Link
          to={pageUrl(currentPage - 1)}
          className="flex items-center px-4 h-10 text-white font-semibold bg-gray-800 rounded-lg hover:bg-gray-700"
          onClick={handleLinkClick}
        >
          <svg
            className="w-3.5 h-3.5 me-2 mt-1 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </Link>
      )}
      {!isLastPage && (
        <Link
          to={pageUrl(currentPage + 1)}
          className="flex items-center px-4 h-10 text-white font-semibold bg-gray-800 rounded-lg hover:bg-gray-700 ml-auto"
          onClick={handleLinkClick}
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 mt-1 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};
