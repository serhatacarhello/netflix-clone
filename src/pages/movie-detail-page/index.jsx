import axios from "axios";
import { Link, useParams } from "react-router-dom";
import options, { baseImageURL } from "./../../constants/constant";
import { useEffect, useState } from "react";
import LoadingPage from "../loading-page";

const MovieDetailPage = () => {
  const [detail, setDetail] = useState({});
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);

  const getVideoDetails = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, options)
      .then(function (response) {
        setDetail(response.data);
      })
      .catch(function (error) {
        console.error(error.message);
      });
    setLoading(false);
  };

  // console.log(detail);
  useEffect(() => {
    getVideoDetails(movieId);
  }, [movieId]);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="movie-detail full w-100 h-100 bg-black d-flex align-items-center justify-content-center m-auto">
          <div className="row">
            <div className="col-lg-6 col-md-12 position-relative">
              {!loading && (
                <figure
                  className="figure overflow-hidden  position-relative  rounded-2 pt-4"
                  style={{ maxWidth: 600 }}
                >
                  <img
                    className="figure-img img-fluid shadow ro"
                    src={`${baseImageURL.concat(detail.poster_path)}`}
                    alt={detail.title}
                  />
                  <span className="badge bg-primary position-absolute text-warning rounded-2 fs-3  bottom-0 end-0 mb-3 m-2">
                    {Number(detail.vote_average).toFixed(1)}
                  </span>
                </figure>
              )}
            </div>
            <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center pt-2 justify-content-center p-5 ">
              <h1>{detail.title}</h1> <em> {detail.tagline}</em>
              {detail?.homepage && (
                <Link to={`${detail.homepage}`}>
                  <p className="p-1">Homepage:&nbsp;{detail.homepage} </p>
                </Link>
              )}
              <p className="lead fw-semibold"> {detail.overview}</p>
              <div className="row text-info mb-2 rounded d-flex align-items-start justify-content-start ">
                <div
                  className="col-md-6 col-6 d-flex flex-column
           align-items-start justify-content-start
            "
                >
                  <p className="text-nowrap">
                    <span className="text-warning">Budget</span> :&nbsp;$&nbsp;
                    {detail.budget}
                  </p>
                  {detail.belongs_to_collection && (
                    <p className="text-start">
                      <span className="text-warning">Collection</span> :
                      {detail.belongs_to_collection?.name}
                    </p>
                  )}
                  {detail.production_companies && <h3>Companies</h3>}
                  <ul className="d-flex flex-column   align-items-start  p-2 ">
                    {detail.production_companies?.map((comp, i) => (
                      <li className="text-nowrap" key={i}>
                        {comp.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="col-md-6 col-6 d-flex flex-column
           align-items-start justify-content-start"
                >
                  <p className="text-nowrap">
                    <span className="text-warning">Revenue</span> :&nbsp;$&nbsp;
                    {detail.revenue}&nbsp;
                  </p>
                  <p className="text-nowrap">
                    <span className="text-warning">Release date</span>
                    &nbsp;:&nbsp;
                    {detail.release_date}
                  </p>

                  {detail.genres && <h3>Genres</h3>}
                  <ul className="d-flex flex-column   align-items-start  p-2 ">
                    {detail.genres?.map((comp, i) => (
                      <li key={i}>{comp.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center align-items-center mb-3">
                <Link to={`/watch/${detail.id}`}>
                  <button className="btn btn-success">Watch Now</button>
                </Link>
                <button className="btn btn-info">Add List</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailPage;
