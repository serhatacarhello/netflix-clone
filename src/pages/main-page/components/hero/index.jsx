import { useSelector } from "react-redux";
import LoadingPage from "../../../loading-page";
import { baseImageURL } from "../../../../constants/constant";
import { Link } from "react-router-dom";

const Hero = ({ popularMovies }) => {
  //use store
  const state = useSelector((store) => store.movieReducer);
  const randomIndex = Math.floor(Math.random() * popularMovies?.length);
  const heroMovie = popularMovies[randomIndex];

  // console.log("🚀 ~ file: index.jsx:13 ~ Hero ~ heroMovie:", heroMovie);

  return (
    <div className="d-flex align-items-center justify-content-center bg-black bg-opacity-75 mt-2 ">
      {!state.isLoading && heroMovie && (
        <div className="row">
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center p-4">
            <h1 className="text-primary p-1 text-capitalize ">
              {heroMovie.title}
            </h1>
            <p className="text-md-start fw-medium fs-5 overflow-hidden">
              {heroMovie?.overview}
            </p>
            <p className="text-warning fw-bold">
              IMDB:&nbsp;{heroMovie?.vote_average}
            </p>
            <div className="d-flex gap-3 justify-content-center align-items-center">
              <Link to={`/watch/${heroMovie?.id}`}>
                <button className="btn btn-success">Watch Now</button>
              </Link>
              <button className="btn btn-info">Add List</button>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            {state.isLoading ? (
              <LoadingPage />
            ) : (
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src={`${baseImageURL}${heroMovie.backdrop_path}`}
                  alt="movie image"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
