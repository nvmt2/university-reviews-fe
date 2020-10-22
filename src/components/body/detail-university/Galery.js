import React from "react";

import "./Galery.css";

import FavoriteIcon from "@material-ui/icons/Favorite";
import VisibilityIcon from "@material-ui/icons/Visibility";

function Galery() {
  return (
    <div className="galery">
      <div className="container">
        <p className="infor-intro">admin.duytan</p>
        <div className="row dates-intro">
          <p className="date-intro ">07/05/2020</p>
          <p className="date-intro">4:30:PM</p>
          <p className="date-intro">- 89 lượt đọc</p>
        </div>
      </div>
      <h1 className="container title-galery">Các hoạt động của trường</h1>
      <div className="view-intro">
        <img src="/assets/intro/logo.png" className="logo-intro" />
        <FavoriteIcon />
        <p className="count-view">0</p>
        <VisibilityIcon />
      </div>
      <div className="container main-galery">
        <div className="row gird-galery">
          <div className="item-galery">
            <img
              className="img-galery"
              src="https://cdn.duytan.edu.vn/upload/images/1-11-2017-14-33-38-8.jpg"
            />
            <p className="content-img-galery">Trường duy tânTrường duy tânTrường duy tânTrường duy tânTrường duy tânTrường duy tânTrường duy tânTrường duy tânTrường duy tân</p>
          </div>
          <div className="item-galery">
            <img
              className="img-galery"
              src="https://cdn.duytan.edu.vn/upload/images/csvc1-71.jpg"
            />
            <p className="content-img-galery">Trường duy tân</p>
          </div>
          <div className="item-galery">
            <img
              className="img-galery"
              src="https://cohoi.tuoitre.vn/upload/hinhbaiviet/images/2019/Thang-04/03-04/030419_duytan_cover.jpg"
            />
            <p className="content-img-galery">Trường duy tân</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Galery;
