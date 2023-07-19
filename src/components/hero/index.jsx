import { useSelector } from "react-redux";
import LoadingPage from "../../pages/loading-page/LoadingPage";
import { baseImageURL } from "../../constants/constant";
import { Link } from "react-router-dom";

const Hero = ({ popularMovies }) => {
  //use store
  const state = useSelector((store) => store.movieReducer);
  const randomIndex = Math.floor(Math.random() * popularMovies?.length);
  const heroMovie = popularMovies[randomIndex];

  // console.log("🚀 ~ file: index.jsx:13 ~ Hero ~ heroMovie:", heroMovie);

  return (
    <div className="row d-flex bg-primary bg-opacity-50 align-items-center justify-content-center shadow py-3">
      {state.isLoading && <LoadingPage />}
      {!state.isLoading && heroMovie && (
        <div className="row p-4">
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-info p-1 text-capitalize ">
              {heroMovie.title}
            </h1>
            <p className="text-md-start fw-medium fs-5">
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
          <div className="hero-image col-md-6 d-flex justify-content-center">
            <img
              className="img-fluid rounded shadow"
              src={`${baseImageURL}${heroMovie.backdrop_path}`}
              alt="movie image"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
