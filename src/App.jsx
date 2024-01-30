import { useState } from "react";
import { MoviesHeader } from "./components/MoviesHeader";
import { LandingPage } from "./pages/LandingPage";
import { MoviesGrid } from "./components/MoviesGrid";
import { MoviesFooter } from "./components/MoviesFooter";
import { MovieDetails } from "./pages/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <BrowserRouter>
      <MoviesHeader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/now_playing" element={<MoviesGrid />} />
        <Route path="/popular" element={<MoviesGrid />} />
        <Route path="/top_rated" element={<MoviesGrid />} />
        <Route path="/upcoming" element={<MoviesGrid />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
      <MoviesFooter />
    </BrowserRouter>
  );
};
