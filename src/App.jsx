import { LandingPage } from "./pages/LandingPage";
import { MovieDetails } from "./pages/MovieDetails";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className="title">MOVIES</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;