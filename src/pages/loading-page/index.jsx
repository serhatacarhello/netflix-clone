import loadingImage from "../../assets/netflixLoading.png";

const LoadingPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100 h-100">
      <h1 className="text-success">Loading...</h1>
      <img className="img-fluid" src={loadingImage} alt="loading image" />
    </div>
  );
};

export default LoadingPage;
