import { MoviesHeader } from "./components/MoviesHeader";
import { LandingPage } from "./pages/LandingPage";
import { MovieDetails } from "./pages/MovieDetails";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <header className="sticky top-0">
        <MoviesHeader />
      </header>
      <main className="bg-gray-300">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
