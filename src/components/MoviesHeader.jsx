import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const MoviesHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    navigate(`/?search=${searchQuery}`);
  };

  return (
    <header className="sticky top-0">
      <nav className="bg-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.svg" className="h-8" alt="Movies Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Movies
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-600 rounded-lg bg-gray-700 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-white"
                placeholder="Search..."
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-600 rounded-lg bg-gray-700 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-white"
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 text-white hover:text-white border-gray-700">
                <Link
                  to="/now_playing"
                  className={
                    location.pathname === "/now_playing" ? "text-blue-500" : ""
                  }
                >
                  Now Playing
                </Link>
              </li>
              <li className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 text-white hover:text-white border-gray-700">
                <Link
                  to="/popular"
                  className={
                    location.pathname === "/popular" ? "text-blue-500" : ""
                  }
                >
                  Popular
                </Link>
              </li>
              <li className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 text-white hover:text-white border-gray-700">
                <Link
                  to="/top_rated"
                  className={
                    location.pathname === "/top_rated" ? "text-blue-500" : ""
                  }
                >
                  Top Rated
                </Link>
              </li>
              <li className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 text-white hover:text-white border-gray-700">
                <Link
                  to="/upcoming"
                  className={
                    location.pathname === "/upcoming" ? "text-blue-500" : ""
                  }
                >
                  Upcoming
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
