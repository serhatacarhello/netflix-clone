import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import options from "../../constants/constant";
import LoadingPage from "../loading-page";

const WatchMoviePage = () => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const param = useParams();
  const movie_id = param.movieId;

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, options)
      .then((res) => setVideos(res.data.results))
      .catch((err) => console.log(err));
    setLoading(false);
  }, [movie_id]);

  // console.log(videos);

  const youtubeVideosKeys = videos
    .filter((item) => item.site == "YouTube")
    .map((item) => item.key);

  const newVideosKey = youtubeVideosKeys.slice(0, 1);

  return (
    <div className="p-1 m-auto full">
      {loading == true && (
        <>
          <h1>Watch Movie Page</h1> <LoadingPage />
        </>
      )}
      {newVideosKey !== "" ? (
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={`https://www.youtube.com/watch?v=${newVideosKey}`}
            controls
            loop={false}
            playing={false}
            width="100%"
            height="100%"
          />
        </div>
      ) : (
        <p>There is no video...</p>
      )}
    </div>
  );
};

export default WatchMoviePage;
