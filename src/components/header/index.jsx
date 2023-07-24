import { Link, useNavigate } from "react-router-dom";
import options, { baseImageURL } from "../../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import ActionTypes from "../../constants/actionTypes";
import { BiSearch } from "react-icons/bi";
import { FiBell } from "react-icons/fi";

const Header = () => {
  // const [icon, setIcon] = useState({});
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const query = inputValue.toLowerCase();
  const navigate = useNavigate();

  const handleSearch = () => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?query=${query}`, options)
      .then((res) =>
        dispatch({
          type: ActionTypes.FETCH_QUERY_MOVIES,
          payload: res.data.results,
        })
      )
      .catch((err) => console.log(err));
    setInputValue("");
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const handleKeyDownCapture = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      navigate(`/search/${e.target.value}`);
    }
  };

  const state = useSelector((state) => {
    // console.log("🚀 ~ file: index.jsx:39 ~ Header ~ state:", state);
    return state.movieReducer;
  });
  return (
    <>
      <header
        style={{ maxHeight: 100 }}
        className="w-100 d-flex  align-items-center justify-content-between  shadow pe-2"
      >
        <div className="logo ">
          <Link to={"/"}>
            {!state.isLoading && (
              <img
                className="p-2"
                style={{ maxWidth: "160px" }}
                src={`${baseImageURL}/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`}
              />
            )}
          </Link>
        </div>
        <div
          className="search_input_container d-flex align-items-center justify-content-center"
          style={{ marginRight: "200px" }}
        >
          {inputValue.length == 0 && (
            <div className="search-icon">
              <BiSearch className="fs-3 text-dark" />
            </div>
          )}
          <input
            className="form-control rounded-5 fs-4 px-4"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDownCapture={handleKeyDownCapture}
          />
          {inputValue.length !== 0 && (
            <Link to={`/search/${inputValue}`}>
              <BiSearch
                className="text-white fs-2 active ms-1"
                onClick={handleSearch}
              />
            </Link>
          )}
        </div>
        <div className="notification">
          <FiBell className="fs-3 " />
          {/* <span className="badge">{state.movieReducer.length}</span> */}
        </div>
      </header>
    </>
  );
};

export default Header;
