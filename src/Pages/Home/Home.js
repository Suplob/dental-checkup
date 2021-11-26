import React from "react";
import HomeCarousel from "../../Compontents/HomeCarousel/HomeCarousel";
import WhyUs from "../../Compontents/WhyUs/WhyUs";
import WorkingHours from "../../Compontents/WorkingHours/WorkingHours";
import Services from "../../Compontents/Services/Services";

const Home = () => {
  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <Services></Services>
      <WorkingHours></WorkingHours>
      <WhyUs></WhyUs>
    </div>
  );
};

export default Home;
