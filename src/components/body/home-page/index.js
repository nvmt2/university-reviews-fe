import React, { useEffect } from "react";
import "./home-page.css";
import { NavLink } from "react-router-dom";
import { useQuery } from "@apollo/client";
import homepageQueries  from "query/homepage";
import CardHome from "./CardHome";
import FilterBar from "./FilterBar";
import Banner from "./Banner"

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

    <Banner />
    <div className="container">
      <div className="row">
      <div className="col-md-3 p-0" id="sidebar">
                   <FilterBar />
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
