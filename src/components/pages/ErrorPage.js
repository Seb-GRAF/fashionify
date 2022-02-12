import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import "../../styles/ErrorPage.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>
        <FontAwesomeIcon icon={faSadTear} />
      </h1>
      <h2>Something went wrong...</h2>
      <p>Actually, it's all on purpose.</p>
      <p>There's just no checkout on this fake store ;)</p>
      <Link to="/shop">Shop</Link>
    </div>
  );
};

export default ErrorPage;
