import React, { useEffect, useState } from "react";
import "./home-page.css";
import { NavLink } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { fetchUniversityAction } from "state/ducks/common/actions/home-page";
import { useDispatch, useSelector } from "react-redux";
//importing local file
import homepageQueries from "query/homepage";
import CardHome from "./CardHome";
import FilterBar from "./FilterBar";
import Banner from "./Banner";
//importing material UI
import Pagination from "@material-ui/lab/Pagination";
import Button from "@material-ui/core/Button";

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
  const increasePage = (e, page) => {
    setParamPagination({
      first: 5,
      skip: 5 * (page - 1),
    });
  };

  return (
    <div className="body-homepage">
      <div style={{ display: "block" }}>
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
            <div className="offset-md-3 col-md-9 pagination-material">
              <Pagination
                count={8}
                color="primary"
                shape="rounded"
                variant="outlined"
                size="medium"
                onChange={increasePage}
              />
            </div>
          </div>
          {/* <!-- =========end content=========== -->  */}
        </div>
      </div>
    </div>
  );
}

export default Index;
