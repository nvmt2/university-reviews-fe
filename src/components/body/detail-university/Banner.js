import React from "react";
import "./style/banner.css";
import Carousel from "react-bootstrap/Carousel";

function Banner() {
  return (
    <div className="banner-Uni">
      <div className="carousel-Uni">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 img-Uni"
              src="/assets/"
              alt="banner slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 img-Uni"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1QnsjLmVSRKPd_FBBCntpxN-BNVeikhHOA5N024QNx-QRdAZwLeXDiUfZCPH-DTtyXxrSPc1wyV4htJ-m-_Eeu7BkNyu6wKhkYZzsEEk&usqp=CAU&ec=45714081"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-Uni"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSx5DOR4LE2JAJXcVXYiQUH-ng5LjOblLwa74kxqdbXiitLPd-3L4bJ1lFORWv2oD54fprBXrcP5ddhmlfMHQDUf9Dgc7z7ogF0rHf2-x0&usqp=CAU&ec=45714081"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
