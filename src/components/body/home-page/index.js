import React, { useEffect } from "react";
import "./home-page.css";
import { NavLink } from "react-router-dom";
import { useQuery } from "@apollo/client";
import homepageQueries  from "query/homepage";
import MainHome from "./MainHome";

const array = [
  {
    id: "123ie12bd@8",
    name: "Duy Tan",
    slug: "dtu",
    rating: 5,
  },
];
const slugs = array.map((item) => item.slug);
function Index({ match }) {
    const { data, loading, error } = useQuery(homepageQueries.GET_ALL_UNIVERSITY)
    useEffect(() => {
        
    }, [data, loading, error])
  return (
    <div>
      <div>
          {array.map((item, index) => {
              return (
                  <div>

                  <NavLink
                key={index}
                to={(location) => {
                  return {
                    pathname: `${location.pathname}topics/${item.slug}`,
                    state: { slugs: slugs },
                  };
                }}
              >
                 Topic
              </NavLink>

              <NavLink
                key={index}
                to={(location) => {
                  return {
                    pathname: `${location.pathname}detail-university/${item.slug}`,
                    state: { slugs: slugs },
                  };
                }}
              >
                 Chi tiết mỗi trường
              </NavLink>
                  </div> 
              )      
              
          })}
     
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
                {
                    !loading && !error && data ? (
                        data.allUniversities.map((item, index)=> {
                        return <MainHome {...item} key={index}/>
                    })
                    ) : 
                    (
                        <h5>Loading...</h5>
                    )
                }
                {
                    console.log("Index home page", data, loading, error)
                }
                  

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
