import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//internal modules
import homepageQueries from 'query/homepage';
import { fetchUniversityAction } from 'state/ducks/common/actions/home-page';
//internal components
import CardHome from 'common/card/CardHome';
import FilterBar from 'modules/pages/home-page/components/FilterBar';
import Banner from 'modules/pages/home-page/components/Banner';
//material UI component
import Pagination from '@material-ui/lab/Pagination';

function HomePage({ match }) {
  //STATE
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
  const state = useSelector((state) => state.homePage);
  const dataApi = !loading && !error && data && data.allUniversities; //check where data is available or not ?
  const contentMainHome = !!state.data && state.data; //check data from reducer whether is available or not ?

  //METHOD
  //handle event pagination
  const increasePage = (e, page) => {
    setParamPagination({
      first: 5,
      skip: 5 * (page - 1),
    });
  };

  //LIFECYCLE
  useEffect(() => {
    if (!!data) {
      // pass data into reducer
      dispatch(fetchUniversityAction(dataApi));
    }
  }, [data, loading, error, paramPagination, dataApi, dispatch]);

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
        <NavLink to="/analysis">Phân tích </NavLink>
        <div className="row">
          <div className="col-md-3 p-0" id="sidebar">
            <FilterBar />
          </div>
          <div className="col-md-9" id="content">
            {/* card include content of university */}
            <div className="content-main-home">
              {!!contentMainHome ? (
                contentMainHome.map((item, index) => {
                  return <CardHome key={index} {...item} status={'homepage'} />;
                })
              ) : (
                <h5>Loading...</h5>
              )}
            </div>
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
        </div>
      </div>
    </div>
  );
}

export default HomePage;
