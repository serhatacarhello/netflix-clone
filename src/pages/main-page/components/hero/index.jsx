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
    <div className="w-100">
      {!state.isLoading && heroMovie && (
        <div className="row">
          {/* movie image */}
          <div className="col-lg-6 col-md-12 ">
            <img
              className="img-fluid"
              src={`${baseImageURL}${heroMovie.backdrop_path}`}
              alt="movie image"
              loading="lazy"
            />
          </div>
          {/* movie details */}
          <div className="col-lg-6 col-md-12 p-3 d-flex align-items-center justify-content-center flex-column">
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
        </div>
      )}
    </div>
  );
};

export default Hero;
