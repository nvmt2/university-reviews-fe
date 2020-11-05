import React from "react";
import { NavLink, useParams } from "react-router-dom";
import CreateIcon from "@material-ui/icons/Create";
import CameraRollIcon from "@material-ui/icons/CameraRoll";

function Banner(props) {
  const { name } = props;
  const { slug } = useParams();
  return (
    <div className="banner-topic">
      <div className="container">
        <div className="title-banner-topic">
          <h2 className="title-school">{name}</h2>
          <NavLink
            className="review-topic wirte"
            to={() => {
              return { pathname: `/topics/${slug}/new-post` };
            }}
          >
            <CreateIcon />
            Viết review
          </NavLink>
          <NavLink
            className="review-topic read"
            to={() => {
              return { pathname: `/detail-university/${slug}` };
            }}
          >
            <CameraRollIcon />
            Xem thông tin về trường
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Banner;
