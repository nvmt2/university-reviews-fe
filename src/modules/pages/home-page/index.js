import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//internal modules
import homepageQueries from 'query/homepage';
import { fetchUniversityAction } from 'state/ducks/common/actions/home-page';
import { MyContainer } from 'theme/component/MyContainer';
import { MyTextChange } from 'theme/component/MyTextChange';
//internal components
import CardHome from 'common/card/CardHome';
import FilterBar from 'modules/pages/home-page/components/FilterBar';
import Banner from 'modules/pages/home-page/components/Banner';
//material UI component
import Pagination from '@material-ui/lab/Pagination';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//material icon
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import CloseIcon from '@material-ui/icons/Close';
//multiple i18n
import { useTranslation } from 'react-i18next';

function HomePage() {
  //STATE
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // using for pagination
  const [paramPagination, setParamPagination] = useState({
    // its mean show 5 universities from index = 0
    first: 5,
    skip: 0,
  });
  const [isOpen, setIsOpen] = useState(false);
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
  let groupMBTI = {
    one: {
      first: 5,
      skip: 0,
      name_major: 'Nghệ thuật - Thẩm mỹ - Đồ họa',
    },
    two: {
      first: 5,
      skip: 0,
      name_major: 'Báo chí - Khoa học và xã hội',
    },
    three: {
      first: 5,
      skip: 0,
      name_major: 'Công nghệ thông tin',
    },
    four: {
      first: 5,
      skip: 0,
      name_major: 'Kinh doanh',
    },
  };
  let urlMBTI =
    'https://diendat.net/mbti-quiz/?fbclid=IwAR0BMsfJP7_p-61gRcmMWdbfo9bf7ptJCTorRmDMpd-ZnSRdzsi-tazydn0';
  //METHOD
  //handle event pagination
  const increasePage = (e, page) => {
    setParamPagination({
      first: 5,
      skip: 5 * (page - 1),
    });
  };
  const openMBTI = () => {
    setIsOpen(true);
  };
  const closeMBTI = () => {
    setIsOpen(false);
  };
  const handleChooseMBTI = (group) => {
    switch (group) {
      case 1:
        setParamPagination(groupMBTI.one);
        break;
      case 2:
        setParamPagination(groupMBTI.two);
        break;
      case 3:
        setParamPagination(groupMBTI.three);
        break;
      case 4:
        setParamPagination(groupMBTI.four);
        break;
      default:
        return null;
    }
    closeMBTI();
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
      <MyContainer>
        <Banner />
        <div className="container">
          <div className="row">
            <div className="col-md-3 p-0" id="sidebar">
              <FilterBar />
            </div>
            <div className="col-md-9" id="content">
              {/* card include content of university */}
              <div className="content-main-home">
                {!!contentMainHome ? (
                  contentMainHome.map((item, index) => {
                    return (
                      <CardHome key={index} {...item} status={'homepage'} />
                    );
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
      </MyContainer>
      <button className="mbti" onClick={openMBTI}>
        MBTI
      </button>
      <div
        className="mbti-table"
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <IconButton aria-label="close" onClick={closeMBTI}>
          <CloseIcon />
        </IconButton>
        <div className="body-mbti">
          <p> {t('mbti.title')}</p>
          <a href={urlMBTI} target="_black">
            {t('mbti.survey')}
          </a>
          <br />
          <Button onClick={() => handleChooseMBTI(1)}>
            {t('mbti.group.one')}
          </Button>
          <br />
          <Button onClick={() => handleChooseMBTI(2)}>
            {t('mbti.group.two')}
          </Button>
          <br />
          <Button onClick={() => handleChooseMBTI(3)}>
            {' '}
            {t('mbti.group.three')}
          </Button>
          <br />
          <Button onClick={() => handleChooseMBTI(4)}>
            {' '}
            {t('mbti.group.four')}
          </Button>
        </div>
      </div>
      <button className="chatbot">
        <a href="http://localhost:3001/">
          {' '}
          <ChatBubbleIcon />
        </a>
      </button>
    </div>
  );
}

export default HomePage;
