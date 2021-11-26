import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleCard from "../../Compontents/SingleCard/SingleCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="row g-5 mt-5 container mx-auto">
      <h1 className="text-center">Our Top Services</h1>
      {services.map((data) => (
        <SingleCard data={data} key={data.name}></SingleCard>
      ))}
    </div>
  );
};

export default Services;
