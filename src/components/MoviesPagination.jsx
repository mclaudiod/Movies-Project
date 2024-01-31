import { Link } from "react-router-dom";

export const MoviesPagination = ({ currentPage, totalPages }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex items-center justify-between mt-8">
      {!isFirstPage && (
        <Link
          to={`?page=${currentPage - 1}`}
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700"
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
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
          to={`?page=${currentPage + 1}`}
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700"
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
