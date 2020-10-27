import React from "react";

import "./MyPost.css";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function MyPost() {
  return (
    <div className="myPost">
      <div className="group-user-topic">
        <div className="row content-user-topic">
          <a href="#" className="col-md-8 row group-users">
            <AccountCircleIcon />
            <div className="infor-users">
              <p className="title-users">Username1</p>
              <p className="date-topics">05/08/2020</p>
            </div>
          </a>
          <div className="rating-topics">
            <div className="count-topics">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p className="title-rating-topics">Độ uy tín của Topic</p>
          </div>
        </div>
        <div className="infor-topics">
          <h2 className="title-infor-topics">Cơ sở vật chất thật tuyệt!!!</h2>
          <p className="content-infor-topics">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            enim ab qui aperiam iste eos voluptate alias iure voluptatum, amet
            culpa, vero, consectetur voluptatem! Reprehenderit aut, tempora,
            quasi suscipit minima fugiat consequatur quas nisi at est maiores ab
            iure vero dolorem rem distinctio? Tempora, eligendi deserunt sint
            perspiciatis quis recusandae.
          </p>
          <div className="row view-topics">
            <a href="#" className="viewMore-topics">
              Đọc thêm...
            </a>
            <div className="row group-content-categories-topics">
              <a href="3" className="content-categories-topics">
                Carzy
              </a>
              <a href="#" className="content-categories-topics">
                Cơ sở vật chất
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPost;
