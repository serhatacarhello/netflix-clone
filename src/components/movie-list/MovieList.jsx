import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { setLoading } from "../../redux/actions/actions";
import { optionsForGenres } from "../../constants/constant";
import axios from "axios";
import MovieCard from "./movie-card/MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const dispatch = useDispatch();
  const [genreMovies, setGenreMovies] = useState();

  const getMoviesByGenres = () => {
    // get movies by genres
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`,
        optionsForGenres
      )
      .then((res) => setGenreMovies(res.data.results))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    dispatch(setLoading(true));
    getMoviesByGenres();
    dispatch(setLoading(false));
  }, [genre.id]);
  return (
    <div className="container-fluid mb-3 mt-3 px-3 shadow  bg-black">
      <h2 className="text-start">{genre.name}</h2>
      <div className="row d-flex align-items-center justify-content-center w-100 ">
        <Splide
          aria-label="My Favorite Images"
          options={{
            // rewind: true,
            autoWidth: true,
            gap: ".25rem",
            focus: 0,
            omitEnd: true,
            pagination: false,
          }}
        >
          {genreMovies?.map((movie) => (
            <SplideSlide key={movie.id}>
              <Link to={`/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default MovieList;
