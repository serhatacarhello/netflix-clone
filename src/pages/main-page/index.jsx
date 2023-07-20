import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getMovies, setLoading } from "../../redux/actions/actions";
import MovieList from "./components/movie-list";
import Hero from "./components/hero";

const MainPage = () => {
  const dispatch = useDispatch();
  // get data from store and assign it  to state
  const state = useSelector((store) => store.movieReducer);

  useEffect(() => {
    //set loading
    dispatch(setLoading(true));

    //get popular movies data
    dispatch(getMovies());

    //get categories data
    dispatch(getGenres());
  }, [dispatch]);

  const popularMovies = useSelector(
    (state) => state.movieReducer.popularMovies
  );

  return (
    <div className="bg-secondary">
      <Hero popularMovies={popularMovies} />
      {state.genres.map((genre) => (
        <MovieList key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;
