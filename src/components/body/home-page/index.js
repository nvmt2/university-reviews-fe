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

  // using for pagination
  const [paramPagination, setParamPagination] = useState({
    // its mean show 5 universities from index = 0
    first: 5,
    skip: 0,
  });
  //call api to get all of university
  const { data, loading, error } = useQuery(
    homepageQueries.GET_ALL_UNIVERSITY,
    {
      variables: paramPagination,
    }
  );

  const dataApi = !loading && !error && data && data.allUniversities; //check where data is available or not ?
  const state = useSelector((state) => state.homePage);

  const contentMainHome = !!state.data && state.data; //check data from reducer whether is available or not ?

  useEffect(() => {
    if (!!data) {
      // pass data into reducer
      dispatch(fetchUniversityAction(dataApi));
    }
  }, [data, loading, error, paramPagination, dataApi, dispatch]); // re-render when one of variables changing

  //handle event pagination
  const increasePage = (e, page) => {
    setParamPagination({
      first: 5,
      skip: 5 * (page - 1),
    });
  };

  const state_1 = useSelector((state) => state);
  console.log("STATE_1", state_1);
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

          <div className="col-md-9" id="content">
            {/* card include content of university */}
            {!!contentMainHome ? (
              contentMainHome.map((item, index) => {
                return <CardHome key={index} {...item} />;
              })
            ) : (
              <h5>Loading...</h5>
            )}
            {/*end of cards include content of university */}

            {/* start of pagination */}
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
          {/* end of pagination */}
        </div>
      </div>
    </div>
  );
}

export default Index;
