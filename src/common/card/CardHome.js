import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useApolloClient } from '@apollo/client';
//internal modules
import { pageTransition } from 'common/page-transition/configVarian';
import {
  actionAddInfoUni,
  actionAddRatingUni,
  actionRemoveRatingAndInfo,
  actionAddRatingThreeYear,
} from 'state/ducks/common/actions/analysis';
import { ratingQuery } from 'query/rating';
import detailUniversityQuery from 'query/detail-university';
import { userProfileMutation } from 'query/user-profile';
import {
  getDateTimeISO8601OfCurrent,
  getDateTimeISO8601OfLastYear,
  getDateTimeISO8601OfLastOfLastYear,
} from 'helper/getDate';
import { getAverageTotalRating } from 'helper/getAverageRating';
//material-ui component
import IconButton from '@material-ui/core/IconButton';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
//multiple i18n
import { useTranslation } from 'react-i18next';
import { _colorStringFilter } from 'gsap/gsap-core';

function CardHome(props) {
  //STATE
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { address, introduce, logo, name, id, status } = props;
  const { infoUni } = useSelector((state) => state.analysis);
  const [mark, setMark] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const client = useApolloClient();
  const [addFavoriteUniversity, { data }] = useMutation(
    userProfileMutation.ADD_FAVORITE_UNI
  );
  //METHOD
  const handleClickMark = async () => {
    setMark(!mark);
    addFavoriteUniversity({
      variables: { idUni: id, idUser: localStorage.getItem('idUser') },
    });
  };
  const calcAverageRatingOfThreeYears = (
    dataRatingCurrentYear,
    dataRatingLastYear,
    dataRatingLastOfLastYear
  ) => {
    let payload = null;
    if (
      !!dataRatingCurrentYear &&
      !!dataRatingLastYear &&
      !!dataRatingLastOfLastYear
    ) {
      let averageRatingCurrent = getAverageTotalRating(
        dataRatingCurrentYear.allRatings
      );
      let averageRatingLastYear = getAverageTotalRating(
        dataRatingLastYear.allRatings
      );
      let averageRatingLastOfLastYear = getAverageTotalRating(
        dataRatingLastOfLastYear.allRatings
      );
      payload = {
        name: name,
        data: [
          averageRatingLastOfLastYear,
          averageRatingLastYear,
          averageRatingCurrent,
        ],
      };
    }
    return payload;
  };

  const handleAddUni = async () => {
    // getBasicInfoUni();
    const { data } = await client.query({
      query: detailUniversityQuery.GET_NAME_CODE_OF_UNIVERSITY,
      variables: { idUni: id },
    });
    dispatch(actionAddInfoUni(data));

    // getAllRating();
    const { data: dataAllRating } = await client.query({
      query: ratingQuery.GET_ALL_RATINGS_BY_UNIVERSITY,
      variables: { idUni: id },
    });
    dispatch(actionAddRatingUni(dataAllRating));

    // getRatingCurrentYear();
    const { data: dataRatingCurrentYear } = await client.query({
      query: ratingQuery.GET_LESSER_EQUAL_RATING,
      variables: {
        idUni: id,
        dateParam: getDateTimeISO8601OfCurrent(),
      },
    });
    // getRatingLastYear();
    const { data: dataRatingLastYear } = await client.query({
      query: ratingQuery.GET_LESSER_EQUAL_RATING,
      variables: {
        idUni: id,
        dateParam: getDateTimeISO8601OfLastYear(),
      },
    });

    // getRatingLastOfLastYear();
    const { data: dataRatingLastOfLastYear } = await client.query({
      query: ratingQuery.GET_LESSER_EQUAL_RATING,
      variables: {
        idUni: id,
        dateParam: getDateTimeISO8601OfLastOfLastYear(),
      },
    });

    let payload = calcAverageRatingOfThreeYears(
      dataRatingCurrentYear,
      dataRatingLastYear,
      dataRatingLastOfLastYear
    );
    payload !== null && dispatch(actionAddRatingThreeYear(payload));
  };
  const handleRemoveUni = () => {
    dispatch(actionRemoveRatingAndInfo(id));
  };

  //LIFECYCLE
  useEffect(() => {
    let indexOfArray = infoUni.findIndex((x) => x.University.id === id);
    if (indexOfArray !== -1) setIsSelected(true);
    else setIsSelected(false);
  }, [infoUni]);
  console.log(`CardHome`);

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
            {/* icon button for mark favorite university */}
            <IconButton onClick={handleClickMark}>
              <BookmarkBorderIcon style={{ color: mark ? 'blue' : '' }} />
            </IconButton>
            {/* icon button for analysis */}
            <IconButton
              onClick={handleAddUni}
              style={{ display: isSelected ? 'none' : 'block' }}
            >
              <AssessmentOutlinedIcon />
            </IconButton>
            <IconButton
              color="secondary"
              onClick={handleRemoveUni}
              style={{ display: isSelected ? 'block' : 'none' }}
            >
              <AssessmentOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CardHome;
