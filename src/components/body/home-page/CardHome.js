import React from "react";
import { NavLink } from "react-router-dom";

function CardHome(props) {
  const { address, introduce, logo, name, zone, id } = props;
  return (
    <div className="highlight-topic container-fluid">
      <div className="row body-card-home border-bottom">
        <div className="col-md-1">
          <div id="img-logo">
            <img
              src={logo.publicUrl}
              alt="logo univesity"
              className="logo-university img-fluid"
            />
          </div>
        </div>
        <div className="col-md-11">
          <p className="university-name">{name}</p>
          <span className="address">{address}</span>
          <span className="count-rate mr-3">
            <i className="fas fa-star"></i> 200 đánh giá
          </span>
          <span className="count-comment">
            <i className="fas fa-comments"></i> 462 bình luận
          </span>

          <p className="demo-content">{introduce}</p>
        </div>
      </div>
      <div className="row">
        <div className="offset-md-1 col-md-11 footer-card-home">
          {
            <NavLink
              className="detail-card-home"
              to={(location) => {
                return {
                  pathname: `${location.pathname}detail-university/${id}`,
                };
              }}
              onClick={() => localStorage.setItem("slugUniversity", id)} //pass id university to localStorage so that it resolve matching url at detail-university/index directory
            >
              Chi tiết
            </NavLink>
          }
          <i className="fas fa-chevron-right"></i>
          <i className="far fa-bookmark "></i>
        </div>
      </div>
    </div>
  );
}

export default CardHome;
