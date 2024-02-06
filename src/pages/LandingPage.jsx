import { MoviesGrid } from "../components/MoviesGrid";
import { useLocation } from "react-router-dom";

export const LandingPage = () => {
  const location = useLocation();

  return (
    <>
      {location.search && <MoviesGrid />}

      {!location.search && (
        <div className="container m-auto">
          <div className="w-full p-4 text-center bg-gray-800 border border-gray-700 rounded-lg shadow sm:p-8 mb-7 mt-24">
            <img
              className="mx-auto max-h-96 w-auto mb-5"
              src="/logo.svg"
              alt="Movies Logo"
            />
            <h1 className="mb-5 text-3xl font-bold text-white">Movies</h1>
            <p className="mb-5 text-base text-gray-400 sm:text-lg">
              On this website you will be able to find all the movies you want!
              You can see which ones are now playing on cinemas, the most
              popular, the top rated, the upcoming or even find a movie by name!
            </p>
          </div>
        </div>
      )}
    </>
  );
};
