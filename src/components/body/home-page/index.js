import React from "react";
import "./../style.css";
// import { NavLink } from "react-router-dom";

// const data = [
//   {
//     name: "Duy Tan",
//     slug: "dtu",
//     rating: 5,
//   },
//   {
//     name: "Dai hoc bach khoa",
//     slug: "bku",
//     rating: 4,
//   },
//   {
//     name: "Dai hoc Ha Noi",
//     slug: "hn",
//     rating: 4,
//   },
// ];
// const slugs = data.map((item) => item.slug);
function Index({ match }) {
  return (
    <div>
      {/* <div>
        <ul>
          {data.map((item, index) => (
            <li>
              <NavLink
                key={index}
                to={(location) => {
                  return {
                    pathname: `${location.pathname}topics/${item.slug}`,
                    state: { slugs: slugs },
                  };
                }}
              >
                Xem binh luận {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div> */}

      <div>
      <div id="banner">
        <div id="bg-banner">
            <h1 class="text-center text-capitalize font-weight-bold text-light pt-3">university reviews</h1>
        <h3 class="text-center text-light">A place to share your felling</h3>
        </div>
    </div>
    <div class="container">
            <div class="row">
                <div class="col-md-9" id="content">
                    <div class="highlight-topic rounded-lg">
                        <div class="row">
                            <div class="col-md-2">
                                <div id="img-logo">
                                    <a href="#" ><img src="images/logoDTU.png" alt=""class="anh logo-university img-fluid" /></a>
                                </div>
                            </div>
                            <div class="col-md-10">
                                <a href="#" class="university-name">Đại Học Duy Tân</a>
                                <span class="address">254, Nguyễn Văn Linh, Hải Châu, Đà Nẵng</span>
                                <span class="count-rate mr-3"><i class="fas fa-star"></i> 200 đánh giá</span>
                                <span class="count-comment"><i class="fas fa-comments"></i> 462 bình luận</span>
                
                                <p class="demo-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores enim ab qui aperiam iste eos voluptate alias iure voluptatum, amet culpa, vero, consectetur voluptatem! Reprehenderit aut, tempora, quasi suscipit minima fugiat consequatur quas nisi at est maiores ab iure vero dolorem rem distinctio? Tempora, eligendi deserunt sint perspiciatis quis recusandae.</p>
                
                                <a href="#" class="detail">Chi tiết <i class="fas fa-chevron-right"></i></a>
                                <i class="far fa-bookmark"></i>                
                            </div>
                        </div>
                    </div>

                    {/* <!-- ------phân trang  --> */}

                    <nav class="pagination justify-content-center">
                        <ul class="pagination">
                            <li class="page-item">
                                <span class="page-link">Trước</span>
                            </li>
                            <li class="page-item">
                                <a href="" class="page-link">1</a>
                            </li>
                            <li class="page-item">
                                <a href="" class="page-link">2</a>
                            </li>
                            <li class="page-item">
                                <a href="" class="page-link">3</a>
                            </li>
                            <li class="page-item">
                                <a href="" class="page-link">...</a>
                            </li>
                            <li class="page-item">
                                <span class="page-link">Sau</span>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* <!-- =========end content=========== --> */}
                <div class="col-md-3" id="sidebar">
                    <div id="count-start" class="text-center rounded-lg">
                        <p class="count-review">Tổng đánh giá<span>(2100)</span></p>
                        <p class="count5"><span>600</span> review <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
                        <p class="count4"><span>500</span> review <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></p>
                        <p class="count3"><span>400</span> review <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
                        <p class="count2"><span>300</span> review <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
                        <p class="count1"><span>200</span> review <i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
