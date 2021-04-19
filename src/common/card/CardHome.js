import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useLazyQuery } from '@apollo/client';
//internal modules
import { pageTransition } from 'common/page-transition/configVarian';
import {
  actionAddInfoUni,
  actionAddRatingUni,
} from 'state/ducks/common/actions/analysis';
import { ratingQuery } from 'query/rating';
import detailUniversityQuery from 'query/detail-university';
//material-ui component
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
//multiple i18n
import { useTranslation } from 'react-i18next';

function CardHome(props) {
  //STATE
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { address, introduce, logo, name, id, status } = props;
  const [mark, setMark] = useState(false);
  const [getAllRating, { called, loading, data }] = useLazyQuery(
    ratingQuery.GET_ALL_RATINGS_BY_UNIVERSITY,
    {
      variables: {
        idUni: id,
      },
    }
  );
  const [
    getBasicInfoUni,
    { called: calledGetInf0, loading: loadingGetInfo, data: dataGetInfo },
  ] = useLazyQuery(detailUniversityQuery.GET_NAME_CODE_OF_UNIVERSITY, {
    variables: {
      idUni: id,
    },
  });
  //METHOD
  const handleClickMark = () => {
    setMark(!mark);
  };
  const handleAddUni = () => {
    getAllRating();
    getBasicInfoUni();
  };
  //LIFECYCLE
  useEffect(() => {
    !!data && dispatch(actionAddRatingUni(data));
  }, [data]);

  useEffect(() => {
    !!dataGetInfo && dispatch(actionAddInfoUni(dataGetInfo));
  }, [dataGetInfo]);

  return (
    <motion.div
      className="highlight-topic container-fluid"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <div className="row body-card-home border-bottom">
        <div className="col-md-1">
          <div id="img-logo">
            <img
              src={logo.publicUrl}
              alt="logo university"
              className="logo-university img-fluid"
            />
          </div>
        </div>
        <div className="col-md-11">
          <IconButton onClick={handleAddUni}>
            <AssessmentOutlinedIcon />
          </IconButton>
          <p className="university-name">{name}</p>

          <span className="address">{address}</span>
          <span className="count-rate mr-3">
            <i className="fas fa-star"></i> 5 {t('cardHome.rating')}
          </span>
          <span className="count-comment">
            <i className="fas fa-comments"></i> 15 {t('cardHome.comment')}
          </span>

          <p className="demo-content">{introduce}</p>
        </div>
      </div>
      <div className="row">
        <div className="offset-md-1 col-md-11 footer-card-home">
          {
            <NavLink
              className="detail-card-home"
              to={(location) => {
                return {
                  pathname: `/detail-university/${id}`,
                };
              }}
              onClick={() => localStorage.setItem('slugUniversity', id)} //pass id university to localStorage so that it resolve matching url at detail-university/index directory
            >
              {t('cardHome.detail')}
            </NavLink>
          }
          <i className="fas fa-chevron-right"></i>
          <div className="favourite-bookmark">
            {/* <Tooltip
            title={
              <React.Fragment>
                <Rating />
              </React.Fragment>
            }
            ></Tooltip> */}
            {/* <button className="card-star"></button> */}
            <IconButton onClick={handleClickMark}>
              <BookmarkBorderIcon style={{ color: mark ? 'blue' : '' }} />
            </IconButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CardHome;
