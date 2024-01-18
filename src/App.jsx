import { LandingPage } from "./pages/LandingPage";
import { MovieDetails } from "./pages/MovieDetails";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className="">MOVIES</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
