import React, { useEffect, useState } from "react";
import DoctorCard from "../../Compontents/DoctorCard/DoctorCard";

const Specialists = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("/specialists.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const { name, img, qualification, certification } = doctors;

  return (
    <div>
      <h1 className="text-center">Our top specialists</h1>
      <div className="row container mx-auto">
        {doctors.map((data) => (
          <DoctorCard data={data} key={data.id}></DoctorCard>
        ))}
      </div>
    </div>
  );
};

export default Specialists;
