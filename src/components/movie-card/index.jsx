import { baseImageURL } from "../../constants/constant";

const MovieCard = ({ movie }) => {
  // console.log(movie.id);

  return (
    <div className="w-100">
      <img
        className="img-fluid opacity-50"
        style={{ maxWidth: 350 }}
        src={`${baseImageURL}${movie.poster_path}`}
        alt={movie?.title}
      />
    </div>
  );
};

export default MovieCard;
