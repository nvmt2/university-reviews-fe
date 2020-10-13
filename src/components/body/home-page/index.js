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
      <div id="banner">
        <div id="bg-banner">   
        </div>
        <h1 class=" text-capitalize font-weight-bold">university reviews</h1>
        <h3 class="text-center text-light">A place to share basic information about university</h3>
    </div>

    <div class="container">
      <div class="row">
      <div class="col-md-3 p-0" id="sidebar">
                    <div id="filter" class="text-center">
                        <a href="#" class="map d-block text-center"><i class="fas fa-map-marked-alt"></i> Xem vị trí</a>
                        <form action="" class="filter-form">
                            <div class="form-group">
                                <label for="" class="region d-block font-weight-bold">Tìm kiếm theo vùng</label>
                                <label for="" class="locate d-block">
                                    <input type="radio" name="locate" value="" id="bac" /><label for="bac">Miền Bắc</label>
                                </label>
                                <label for="" class="locate d-block">
                                    <input type="radio" name="locate" value="" id="trung" /><label for="trung">Miền Trung</label>
                                </label>
                                <label for="" class="locate  d-block">
                                    <input type="radio" name="locate" value="" id="nam" /><label for="nam">Miền Nam</label>
                                </label>
                                <hr />
                                {/* <!-- -----------end tìm kiếm theo vùng---------- --> */}
                                <label for="" class="region d-block font-weight-bold mb-3">Nhóm ngành</label>
                                <label for="" class="locate d-block margin-r-10">
                                    <select name="nhomNghanh" id="nhomNghanh" class="form-control">
                                        <option value="">Tất cả nhóm nghành</option>
                                        <option value="">Sản xuất và chế biến</option>
                                        <option value="">Kiến trúc và xây dựng</option>
                                        <option value="">Kinh doanh</option>
                                        <option value="">Công nghệ và thông tin</option>
                                        <option value="">Luật và nhân văn</option>
                                        <option value="">Nghệ thuật-thẩm mỹ-đồ họa</option>
                                        <option value="">Báo chí-khoa học và xã hội</option>
                                        <option value="">Khoa học cơ bản</option>
                                        <option value="">Sư Phạm</option>
                                        <option value="">Nông-lâm-ngư nghiệp</option>
                                    </select>
                                </label>
                                <hr />
                                {/* <!-- -----------end nhóm nghành---------- --> */}
                                <label for="" class="region d-block font-weight-bold mb-3">Ngành</label>
                                <label for="" class="locate d-block margin-r-10">
                                    <select name="nhomNghanh" id="nhomNghanh" class="form-control">
                                        <option value="">Tất cả nghành</option>
                                    </select>
                                </label>
                                <hr />
                                {/* <!-- end ngành  --> */}
                                <label for="" class="region d-block font-weight-bold mb-3">Loại trường</label>
                                <label for="" class="locate d-block">
                                    <input type="checkbox" name="loaiTruong" value="" id="DHCL" /><label for="DHCL">Đại học công lập</label>
                                </label>
                                <label for="" class="locate d-block">
                                    <input type="checkbox" name="loaiTruong" value="" id="DHTH" /><label for="DHTH">Đại học tư thục</label>
                                </label>
                                <label for="" class="locate d-block">
                                    <input type="checkbox" name="loaiTruong" value="" id="CD" /><label for="CD">Cao đẳng</label>
                                </label>
                                <label for="" class="locate d-block">
                                    <input type="checkbox" name="loaiTruong" value="" id="DTN" /><label for="DTN">Đào tạo nghề</label>
                                </label>
                                {/* <!-- end --> */}
                                <button class="btn btn-loc">Lọc</button>
                            </div>
                            
                        </form>
                    </div>

                </div> 
                {/* <!-- ket thuc sidebar --> */}
                <div class="col-md-9" id="content">
                    <div class="highlight-topic">
                        <div class="row">
                            <div class="col-md-1">
                                <div id="img-logo">
                                    <a href="#" ><img src="/assets/home-page/logoDTU.png" alt=""class="anh logo-university img-fluid" /></a>
                                </div>
                            </div>
                            <div class="col-md-11 padding-left-32">
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
               

      </div>
    </div>
    
    </div>
  );
}

export default Index;
