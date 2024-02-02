import { MoviesGrid } from "../components/MoviesGrid";
import { useLocation } from "react-router-dom";

export const LandingPage = () => {
  const location = useLocation();

  return (
    <>
      {location.search && <MoviesGrid />}
    </>
  );
};
