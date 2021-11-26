import React from "react";
import { Link } from "react-router-dom";
import img from "../../utilities/img/notFound.png";

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h1>404 ROUTE NOT FOUND</h1>
      <img src={img} alt="" className="w-75" />
      <Link to="/">
        <button className="btn-regular">Go Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
