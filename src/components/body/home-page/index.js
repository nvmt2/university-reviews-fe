import React, { useEffect, useState } from "react";
import "./home-page.css";
import { useQuery, useMutation } from "@apollo/client";
import { fetchUniversityAction } from "state/ducks/common/actions/home-page";
import { useDispatch, useSelector } from "react-redux";
//importing local file
import homepageQueries from "query/homepage";
import { loginMutation } from "query/login";
import CardHome from "./CardHome";
import FilterBar from "./FilterBar";
import Banner from "./Banner";
//importing material UI
import Pagination from "@material-ui/lab/Pagination";

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

  useEffect(() => {
    if (!!data) {
      dispatch(fetchUniversityAction(dataApi));
    }
  }, [data, loading, error, paramPagination, dataApi, dispatch]);

  const increasePage = (e, page) => {
    setParamPagination({
      first: 5,
      skip: 5 * (page - 1),
    });
  };
  // const [
  //   authenticaiton,
  //   { data: authData, loading: authLoading, error: authError },
  // ] = useMutation(loginMutation.AUTHENICATION);

  // useEffect(() => {
  //   authenticaiton();
  //   console.log(
  //     "authData",
  //     authData,
  //     " authLoading: ",
  //     authLoading,
  //     " authError",
  //     authError
  //   );
  // }, [authError]);

  // using callback to memoize function after each time render

  return (
    <div className="body-homepage">
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
