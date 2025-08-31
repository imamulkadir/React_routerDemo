import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  const handleGoBackToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>
        Oops... {error.status}! {error.statusText}
      </h1>
      <h2></h2>
      <button onClick={handleGoBackToHome}>Go back to Home</button>
    </div>
  );
};

export default ErrorPage;
