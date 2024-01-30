import { Link } from "react-router-dom";

export const MoviesPagination = () => {
  return (
    <div class="flex items-center justify-between mt-8">
      <Link
        href="#"
        class="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700"
      >
        <svg
          class="w-3.5 h-3.5 me-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        Previous
      </Link>
      <Link
        href="#"
        class="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700"
      >
        Next
        <svg
          class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
};
