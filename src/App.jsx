import { MoviesHeader } from "./components/MoviesHeader";
import { LandingPage } from "./pages/LandingPage";
import { GridPage } from "./pages/GridPage";
import { MoviesFooter } from "./components/MoviesFooter";
import { MovieDetails } from "./pages/MovieDetails";
import { ErrorPage } from "./pages/ErrorPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const App = () => {

  return (
    <BrowserRouter>
      <MoviesHeader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/now_playing" element={<GridPage />} />
        <Route path="/popular" element={<GridPage />} />
        <Route path="/top_rated" element={<GridPage />} />
        <Route path="/upcoming" element={<GridPage />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <MoviesFooter />
    </BrowserRouter>
  );
};
