import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./pages/main-page";
import MovieDetail from "./pages/movie-detail/index";
import ErrorPage from "./pages/404Page/404Page";
import Header from "./components/header";
import SearchResults from "./pages/search-results";
import WatchMovie from "./pages/watch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/search/:keyword"} element={<SearchResults />} />
          <Route path={"/:movieId"} element={<MovieDetail />} />
          <Route path={"/watch/:movieId"} element={<WatchMovie />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
