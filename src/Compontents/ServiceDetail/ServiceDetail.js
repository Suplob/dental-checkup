import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const [service, setService] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/serviceData.json")
      .then((res) => res.json())
      .then((data) => setService(data.serviceData));
  }, []);

  useEffect(() => {
    const filterData = service.find((data) => data.id == id);
    setFilteredData(filterData);
  }, [service]);

  const { name, img, rating, price } = filteredData || {};

  return (
    <div className="wrapper2">
      <div className="product-img">
        <img src={img} height="420" width="327" />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{name}</h1>
          <h2>Dental Checkup</h2>
        </div>
        <div className="product-price-btn">
          <p>
            <span className="span">{price}</span>
          </p>
          <Link to="/home">
            <button type="button" className="btn-regular mt-5">
              GO HOME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
