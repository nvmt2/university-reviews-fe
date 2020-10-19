import React from "react";

import "./Galery.css";

function Galery() {
  return (
    <div className="container galery">
      <h1 className="title-galery">Các hoạt động của trường</h1>
      <div className="main-galery">
        <div className="row gird-galery">
          <div className="item-galery">
            <img
              className="img-galery"
              src="https://cdn.duytan.edu.vn/upload/images/1-11-2017-14-33-38-8.jpg"
            />
            <p className="content-img-galery">Trường duy tân</p>
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
        <div className="row gird-galery">
          <div className="small-item-galery">
            <img
              className="small-img-galery"
              src="https://cdn.duytan.edu.vn/upload/images/1-11-2017-14-33-38-8.jpg"
            />
            <p className="content-img-galery">Trường duy tân</p>
          </div>
          <div className="big-item-galery">
            <img
              className="big-img-galery"
              src="https://cdn.duytan.edu.vn/upload/images/csvc1-71.jpg"
            />
            <p className="content-img-galery">Trường duy tân</p>
          </div>
          <div className="small-item-galery">
            <img
              className="small-img-galery"
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
