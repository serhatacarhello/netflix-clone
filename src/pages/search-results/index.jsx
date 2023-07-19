import { useSelector } from "react-redux";
import MovieCard from "../../components/movie-list/movie-card/MovieCard";
import { Link } from "react-router-dom";
import LoadingPage from "../loading-page/LoadingPage";

const SearchResults = () => {
  const searchData = useSelector((state) => state.movieReducer.queryMovies);

  return (
    <div className="full m-auto p-2 w-100 h-100 ">
      <h3>Search Results</h3>
      <div className="d-flex  align-items-center justify-content-center flex-wrap p-3  ">
        {searchData.map((movie, i) => (
          <Link key={i} to={`/${movie.id}`}>
            <div
              className="movie  col-4 col-lg-3 col-md-6 p-1 m-1"
              style={{ minWidth: 350 }}
            >
              <>
                {!movie ? (
                  <LoadingPage />
                ) : (
                  <>
                    <h5>{movie.title}</h5>
                    {movie.poster_path && <MovieCard movie={movie} />}{" "}
                  </>
                )}
              </>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
