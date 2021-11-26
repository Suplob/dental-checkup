import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../utilities/img/carousel-img/1.jpg";
import img2 from "../../utilities/img/carousel-img/2.jpg";
import img3 from "../../utilities/img/carousel-img/3.jpg";
import "./HomeCarousel.css";

const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Digital Equipments</h3>
          <p>We use ultra digital equipments imported from other dimension</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Hygiene</h3>
          <p>
            We care about our customer's hygiene. We clean our equipments with
            digital technology.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Top Doctors</h3>
          <p>We have world's top rated doctors.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
