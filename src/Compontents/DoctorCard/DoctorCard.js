import React from "react";

const DoctorCard = ({ data }) => {
  const { name, img, qualification, certification } = data;
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card mt-4">
        <img src={img} className="card-img-top" alt="display picture" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Qualification: {qualification}</p>
          <p className="card-text">Certification: {certification}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
