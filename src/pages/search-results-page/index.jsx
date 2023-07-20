import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingPage from "../loading-page";
import MovieCard from "../../components/movie-card";

const SearchResults = () => {
  const searchData = useSelector((state) => state.movieReducer.queryMovies);

  return (
    <div className="container">
      <h3>Search Results</h3>
      {searchData.length == 0 && (
        <p> There is no result. Please try another search.</p>
      )}
      {searchData.length > 0 && (
        <div className="d-flex align-items-center justify-content-center flex-wrap p-3  ">
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
                    <div className="w-100 h-100 position-relative">
                      <h5 className="position-absolute top-0">{movie.title}</h5>
                      <div>
                        {movie.poster_path && <MovieCard movie={movie} />}{" "}
                      </div>
                    </div>
                  )}
                </>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
