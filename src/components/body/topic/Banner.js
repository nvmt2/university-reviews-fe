import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import CameraRollIcon from "@material-ui/icons/CameraRoll";

function Banner(props) {
  const { name } = props;
  return (
    <div className="banner-topic">
      <div className="container">
        <div className="title-banner-topic">
          <h2 className="title-school">{name}</h2>
          <a href="." className="review-topic wirte">
            <CreateIcon />
            Viết review
          </a>
          <a href="." className="review-topic read">
            <CameraRollIcon />
            Xem thông tin về trường
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
