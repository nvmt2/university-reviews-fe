import React, { useEffect, useState } from "react";
import "./home-page.css";
import { NavLink } from "react-router-dom";
import { useQuery } from "@apollo/client";
import homepageQueries from "query/homepage";
import CardHome from "./CardHome";
import FilterBar from "./FilterBar";
import Banner from "./Banner";
import { fetchUniversityAction } from "state/ducks/common/actions/home-page";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();

  const [paramPagination, setParamPagination] = useState({
    first: 5,
    skip: 0,
  });
  const { data, loading, error } = useQuery(
    homepageQueries.GET_ALL_UNIVERSITY,
    {
      variables: paramPagination,
    }
  );

  const dataApi = !loading && !error && data && data.allUniversities; //get data from api
  const state = useSelector((state) => state.homePage); //get data from reducer
  const contentMainHome = !!state.data && state.data; //check data from reducer whether is available or not ?
  console.log("STATE", state);

  useEffect(() => {
    if (!!data) {
      dispatch(fetchUniversityAction(dataApi));
    }
  }, [data, loading, error, paramPagination, dataApi, dispatch]);

  // using callback to memoize function after each time render
  const increasePage = (index) => {
    setParamPagination({
      first: 5,
      skip: 5 * index,
    });
  };

  return (
    <div className="body-homepage">
      <div style={{ display: "none" }}>
        {array.map((item, index) => {
          return (
            <div key={index}>
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
          );
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
            {!!contentMainHome ? (
              contentMainHome.map((item, index) => {
                return <CardHome key={index} {...item} />;
              })
            ) : (
              <h5>Loading...</h5>
            )}

            {/* <!-- ------phân trang  --> */}
            <nav className="pagination justify-content-center">
              <ul className="pagination">
                <li className="page-item">
                  <span className="page-link">Trước</span>
                </li>
                {Array(8)
                  .fill(1)
                  .map((item, index) => (
                    <li className="page-item" key={index}>
                      <span
                        className="page-link"
                        onClick={() => increasePage(index)}
                      >
                        {index}
                      </span>
                    </li>
                  ))}
                <li className="page-item">
                  <span className="page-link">...</span>
                </li>
                <li className="page-item">
                  <span className="page-link">Sau</span>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!-- =========end content=========== -->  */}
        </div>
      </div>
    </div>
  );
}

export default Index;
