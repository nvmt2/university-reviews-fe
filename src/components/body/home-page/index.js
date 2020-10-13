import React from "react";
import "./home-page.css";
import { NavLink } from "react-router-dom";

const data = [
  {
    name: "Duy Tan",
    slug: "dtu",
    rating: 5,
  },
];
const slugs = data.map((item) => item.slug);
function Index({ match }) {
  return (
    <div>
      <div>
  
          {data.map((item, index) => (
          
              <NavLink
                key={index}
                to={(location) => {
                  return {
                    pathname: `${location.pathname}topics/${item.slug}`,
                    state: { slugs: slugs },
                  };
                }}
              >
                 {item.name}
              </NavLink>
           
          ))}
    
      </div>

      <div>
        <div id="banner">
          <div id="bg-banner">
            <h1 className="text-center text-capitalize font-weight-bold text-light pt-3">
              university reviews
            </h1>
            <h3 className="text-center text-light">
              A place to share your felling
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-9" id="content">
              <div className="highlight-topic rounded-lg">
                <div className="row">
                  <div className="col-md-2">
                    <div id="img-logo">
                      <a href="#">
                        <img
                          src="images/logoDTU.png"
                          alt=""
                          className="anh logo-university img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <a href="a.com" className="university-name">
                      Đại Học Duy Tân
                    </a>
                    <span className="address">
                      254, Nguyễn Văn Linh, Hải Châu, Đà Nẵng
                    </span>
                    <span className="count-rate mr-3">
                      <i className="fas fa-star"></i> 200 đánh giá
                    </span>
                    <span className="count-comment">
                      <i className="fas fa-comments"></i> 462 bình luận
                    </span>

                    <p className="demo-content">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Maiores enim ab qui aperiam iste eos voluptate alias iure
                      voluptatum, amet culpa, vero, consectetur voluptatem!
                      Reprehenderit aut, tempora, quasi suscipit minima fugiat
                      consequatur quas nisi at est maiores ab iure vero dolorem
                      rem distinctio? Tempora, eligendi deserunt sint
                      perspiciatis quis recusandae.
                    </p>

                    <a href="a.com" className="detail">
                      Chi tiết <i className="fas fa-chevron-right"></i>
                    </a>
                    <i className="far fa-bookmark"></i>
                  </div>
                </div>
              </div>

              {/* <!-- ------phân trang  --> */}

              <nav className="pagination justify-content-center">
                <ul className="pagination">
                  <li className="page-item">
                    <span className="page-link">Trước</span>
                  </li>
                  <li className="page-item">
                    <a href="a.com" className="page-link">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="a.com" className="page-link">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="a.com" className="page-link">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="a.com" className="page-link">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <span className="page-link">Sau</span>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <!-- =========end content=========== --> */}
            <div className="col-md-3" id="sidebar">
              <div id="count-start" className="text-center rounded-lg">
                <p className="count-review">
                  Tổng đánh giá<span>(2100)</span>
                </p>
                <p className="count5">
                  <span>600</span> review <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </p>
                <p className="count4">
                  <span>500</span> review <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </p>
                <p className="count3">
                  <span>400</span> review <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </p>
                <p className="count2">
                  <span>300</span> review <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </p>
                <p className="count1">
                  <span>200</span> review <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
