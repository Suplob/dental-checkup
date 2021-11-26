import React from "react";
import { useHistory } from "react-router";
import "./SingleCard.css";

const SingleCard = ({ data }) => {
  const { name, img, rating, price, id } = data || "";
  const history = useHistory();

  function serviceDetail() {
    history.push(`/servicedetail/${id}`);
  }

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card">
        <img src={img} className="card-img-top" alt="display picture" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: {price}</p>
          <p className="card-text">Rating: {rating}</p>
        </div>
        <button className="btn-regular" onClick={serviceDetail}>
          Click For Detail
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
