import React, { useEffect } from "react";
import "./home-page.css";
import { NavLink } from "react-router-dom";
import { useQuery } from "@apollo/client";
import homepageQueries  from "query/homepage";
import CardHome from "./CardHome";

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
    const { data, loading, error } = useQuery(homepageQueries.GET_ALL_UNIVERSITY);
    useEffect(() => {
        
    }, [data, loading, error])
  return (
    <div>
      <div>
          {array.map((item, index) => {
              return (
                  <div   key={index}>
                  <NavLink
              
                to={(location) => {
                  return {
                    pathname: `${location.pathname}topics/${item.slug}`,
                    state: { slugs: slugs },
                  };
                }}  
              >
                 Topic
              </NavLink>
              <br />
              <NavLink
              
                to={(location) => {
                  return {
              
                    pathname: `${location.pathname}detail-university/${item.slug}`,
                    state: { slugs: slugs },
                  };
                }}  
              >
                 Chi tiet truong
              </NavLink>
                  </div> 
              )      
              
          })}
     
      </div>
      <div id="banner">
        <div id="bg-banner">   
        </div>
        <h1 className=" text-capitalize font-weight-bold">university reviews</h1>
        <h3 className="text-center text-light">A place to share basic information about university</h3>
    </div>

    <div className="container">
      <div className="row">
      <div className="col-md-3 p-0" id="sidebar">
                    <div id="filter" className="text-center">
                        <a href="#" className="map d-block text-center"><i className="fas fa-map-marked-alt"></i> Xem vị trí</a>
                        <form action="" className="filter-form">
                            <div className="form-group">
                                <label for="" className="region d-block font-weight-bold">Tìm kiếm theo vùng</label>
                                <label for="" className="locate d-block">
                                    <input type="radio" name="locate" value="" id="bac" /><label for="bac">Miền Bắc</label>
                                </label>
                                <label for="" className="locate d-block">
                                    <input type="radio" name="locate" value="" id="trung" /><label for="trung">Miền Trung</label>
                                </label>
                                <label for="" className="locate  d-block">
                                    <input type="radio" name="locate" value="" id="nam" /><label for="nam">Miền Nam</label>
                                </label>
                                <hr />
                                {/* <!-- -----------end tìm kiếm theo vùng---------- --> */}
                                <label for="" className="region d-block font-weight-bold mb-3">Nhóm ngành</label>
                                <label for="" className="locate d-block margin-r-10">
                                    <select name="nhomNghanh" id="nhomNghanh" className="form-control">
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
                                <label for="" className="region d-block font-weight-bold mb-3">Ngành</label>
                                <label for="" className="locate d-block margin-r-10">
                                    <select name="nhomNghanh" id="nhomNghanh" className="form-control">
                                        <option value="">Tất cả nghành</option>
                                    </select>
                                </label>
                                <hr />
                                {/* <!-- end ngành  --> */}
                                <label for="" className="region d-block font-weight-bold mb-3">Loại trường</label>
                                <label for="" className="locate d-block">
                                    <input type="checkbox" name="loaiTruong" value="" id="DHCL" /><label for="DHCL">Đại học công lập</label>
                                </label>
                                <label for="" className="locate d-block">
                                    <input type="checkbox" name="loaiTruong" value="" id="DHTH" /><label for="DHTH">Đại học tư thục</label>
                                </label>
                                <label for="" className="locate d-block">
                                    <input type="checkbox" name="loaiTruong" value="" id="CD" /><label for="CD">Cao đẳng</label>
                                </label>
                                <label for="" className="locate d-block">
                                    <input type="checkbox" name="loaiTruong" value="" id="DTN" /><label for="DTN">Đào tạo nghề</label>
                                </label>
                                {/* <!-- end --> */}
                                <button className="btn btn-loc">Lọc</button>
                            </div>
                            
                        </form>
                    </div>
                </div> 
                {/* <!-- ket thuc sidebar --> */}
                <div className="col-md-9" id="content">
                {
                    !loading && !error && data ? (
                        data.allUniversities.map((item, index)=> {
                        return (
                            <CardHome key={index} {...item} /> 
                        )
                      
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

                    <nav className="pagination justify-content-center">
                        <ul className="pagination">
                            <li className="page-item">
                                <span className="page-link">Trước</span>
                            </li>
                            <li className="page-item">
                                <a href="" className="page-link">1</a>
                            </li>
                            <li className="page-item">
                                <a href="" className="page-link">2</a>
                            </li>
                            <li className="page-item">
                                <a href="" className="page-link">3</a>
                            </li>
                            <li className="page-item">
                                <a href="" className="page-link">...</a>
                            </li>
                            <li className="page-item">
                                <span className="page-link">Sau</span>
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
