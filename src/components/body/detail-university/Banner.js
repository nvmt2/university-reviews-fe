import React from "react";
import "./style/banner.css";
import Carousel from "react-bootstrap/Carousel";

function Banner() {
  const photos = [
    {
      className: "d-block w-100 img-Uni",
      src: "/assets/detail-university/banner/banner_4.jpg",
    },
    {
      className: "d-block w-100 img-Uni",
      src: "/assets/detail-university/banner/banner_3.jpg",
    },
    {
      className: "d-block w-100 img-Uni",
      src: "/assets/detail-university/banner/banner_2.jpg",
    },
  ];
  return (
    <div className="banner-Uni">
      <div className="carousel-Uni">
        <Carousel>
          {photos.map((item, index) => (
            <Carousel.Item interval={2000} key={index}>
              <img {...item} alt="banner-slide" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
