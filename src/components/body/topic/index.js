import React, { useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./topic.css";
import Categories from './Categories';

import CreateIcon from "@material-ui/icons/Create";
import CameraRollIcon from "@material-ui/icons/CameraRoll";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Index({ location }) {
  console.log("LOCATION", location)
  // const slugs = location.state ? location.state.slugs : [];
  // const checkslugs = (nameSlug) => nameSlug === slug;
  // useEffect(() => {
  //   //Check current param with array params in data
  //   var result = slugs.find(checkslugs);
  //   if (!result) history.push("/error");
  // }, []);
  const { slug } = useParams();
  let history = useHistory();

  useEffect(() => {
    //Check current param with array params in data
    if (!location.state) history.push("/notfound");
  }, []);
  return (
    <>
    <NavLink

      to={() => {
       return {
        pathname: `${location.pathname}/comments`,
        };
      }}
>
 comment
</NavLink>
    <div className="topic">
      <div className="banner-topic">
        <div className="container">
          <div className="title-banner-topic">
            <h2 className="title-school">Đại học Duy Tân</h2>
            <a href="#" className="review-topic wirte">
              <CreateIcon />
              Viết review
            </a>
            <a href="#" className="review-topic read">
              <CameraRollIcon />
              Xem thông tin về trường
            </a>
          </div>
        </div>
      </div>
        <div className="container">
          <div className="main-topic">
            <div className="row">
              <div className="col-md-8 items-topics">
                <div className="group-topic">
                  <div className="row content-topic">
                    <a href="#" className="col-md-8 row group-user">
                      <AccountCircleIcon />
                      <div className="infor-user">
                        <p className="title-user">Username1</p>
                        <p className="date-topic">05/08/2020</p>
                      </div>
                    </a>
                    <div className="rating-topic">
                      <div className="count-topic">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <p className="title-rating-topic">Độ uy tín của Topic</p>
                    </div>
                  </div>
                  <div className="infor-topic">
                    <h2 className="title-infor-topic">
                      Cơ sở vật chất thật tuyệt!!!
                    </h2>
                    <p className="content-infor-topic">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Maiores enim ab qui aperiam iste eos voluptate alias iure
                      voluptatum, amet culpa, vero, consectetur voluptatem!
                      Reprehenderit aut, tempora, quasi suscipit minima fugiat
                      consequatur quas nisi at est maiores ab iure vero dolorem
                      rem distinctio? Tempora, eligendi deserunt sint
                      perspiciatis quis recusandae.
                    </p>
                    <div className="row view-topic">
                      Đọc thêm
                      <div className="row group-content-categories-topic">
                        <a href="3" className="content-categories-topic">
                          Carzy
                        </a>
                        <a href="#" className="content-categories-topic">
                          Cơ sở vật chất
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-topic">
                  <div className="row content-topic">
                    <a href="#" className="col-md-8 row group-user">
                      <AccountCircleIcon />
                      <div className="infor-user">
                        <p className="title-user">Username1</p>
                        <p className="date-topic">05/08/2020</p>
                      </div>
                    </a>
                    <div className="rating-topic">
                      <div className="count-topic">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <p className="title-rating-topic">Độ uy tín của Topic</p>
                    </div>
                  </div>
                  <div className="infor-topic">
                    <h2 className="title-infor-topic">
                      Cơ sở vật chất thật tuyệt!!!
                    </h2>
                    <p className="content-infor-topic">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Maiores enim ab qui aperiam iste eos voluptate alias iure
                      voluptatum, amet culpa, vero, consectetur voluptatem!
                      Reprehenderit aut, tempora, quasi suscipit minima fugiat
                      consequatur quas nisi at est maiores ab iure vero dolorem
                      rem distinctio? Tempora, eligendi deserunt sint
                      perspiciatis quis recusandae.
                    </p>
                    <div className="row view-topic">
                      <a href="#" className="viewMore-topic">
                        Đọc thêm...
                      </a>
                      <div className="row group-content-categories-topic">
                        <a href="#" className="content-categories-topic">
                          Carzy
                        </a>
                        <a href="#" className="content-categories-topic">
                          Cơ sở vật chất
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* --topic noi bat-- */}
              <Categories />
            </div>
          </div>
        </div>
    </div>
    </>
  );
}
export default Index;
