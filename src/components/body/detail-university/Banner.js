import React from "react";
import "./style/banner.css";
import Carousel from "react-bootstrap/Carousel";

function Banner() {
  const photos = [
    {
      className: "d-block w-100 img-Uni",
      src:
        "https://as1.ftcdn.net/jpg/01/22/82/76/500_F_122827651_CP5EFYCbeFavIvnXa45GxnLgjTAG4Ae7.jpg",
    },
    {
      className: "d-block w-100 img-Uni",
      src:
        "https://as1.ftcdn.net/jpg/03/09/64/16/500_F_309641639_1tp2b5kobwsgaMccluTQnGUN7ckmEWO6.jpg",
    },
    {
      className: "d-block w-100 img-Uni",
      src:
        "https://as2.ftcdn.net/jpg/02/54/42/41/500_F_254424115_dx1k43aqXF7dGW42ElK0QwDSBBSeEW8h.jpg",
    },
  ];
  return (
    <div className="banner-Uni">
      <div className="carousel-Uni">
        <Carousel>
          {photos.map((item, index) => (
            <Carousel.Item interval={2000}>
              <img {...item} key={index} alt="banner-slide" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
