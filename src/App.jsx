import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./pages/main-page";
import ErrorPage from "./pages/404Page/404Page";
import Header from "./components/header";
import SearchResults from "./pages/search-results-page";
import MovieDetailPage from "./pages/movie-detail-page";
import WatchMoviePage from "./pages/watch-movie-page";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/search/:keyword"} element={<SearchResults />} />
          <Route path={"/:movieId"} element={<MovieDetailPage />} />
          <Route path={"/watch/:movieId"} element={<WatchMoviePage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
