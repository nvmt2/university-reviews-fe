import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
//internal modules
import { ratingQuery } from 'query/rating';
import { actionOpenDialogRating } from 'state/ducks/common/actions/dialog';
import { getAverageRating } from 'helper/getAverageRating';
//internal components
import SliderRating from 'common/slider/SliderRating';
import AlertAuthor from 'common/alert/AlertAuthor';
//multiple i18n
import { useTranslation } from 'react-i18next';
//material-ui components
import Button from '@material-ui/core/Button';

function FormRating() {
  //STATE
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isRating, setIsRating] = useState('unAuthentication');
  const [qualityOfEducation, setQualityOfEducation] = useState(5);
  const [infrastructure, setInfrastructure] = useState(5);
  const [fee, setFee] = useState(5);
  const [activities, setActivities] = useState(5);
  const [jobOpportunities, setJobOpportunities] = useState(5);
  const [average, setAverage] = useState(null);
  //apollo call api
  const { data, loading, error } = useQuery(
    ratingQuery.GET_ALL_RATINGS_BY_UNIVERSITY,
    {
      variables: {
        idUni: localStorage.getItem('slugUniversity'),
      },
    }
  );
  const {
    data: dataRating,
    loading: loadingRating,
    error: errorRating,
  } = useQuery(ratingQuery.GET_RATING_BY_AUTHOR, {
    variables: {
      idUni: localStorage.getItem('slugUniversity'),
      idUser: localStorage.getItem('idUser'),
    },
  });
  let array = !!data && data.allRatings;
  let numberOfRating = array.length;
  let marks = [
    {
      value: 1,
      label: t('detailUniversity.formRating.mark.bad'),
    },
    {
      value: 2,
      label: t('detailUniversity.formRating.mark.normal'),
    },
    {
      value: 3,
      label: t('detailUniversity.formRating.mark.ok'),
    },
    {
      value: 4,
      label: t('detailUniversity.formRating.mark.good'),
    },
    {
      value: 5,
      label: t('detailUniversity.formRating.mark.excellent'),
    },
  ];
  //METHOD
  const handleRatingClick = () => {
    dispatch(actionOpenDialogRating());
  };
  //LIFECYCLE
  useEffect(() => {
    if (localStorage.getItem('idUser') !== null) {
      if (!!dataRating && dataRating.allRatings.length === 0)
        setIsRating('notYetRated');
      else setIsRating('rated');
    }
  }, [dataRating, loadingRating, errorRating]);

  useEffect(() => {
    if (!!data) {
      setQualityOfEducation(getAverageRating(array, 'qualityOfEducation'));
      setInfrastructure(getAverageRating(array, 'infrastructure'));
      setFee(getAverageRating(array, 'fee'));
      setActivities(getAverageRating(array, 'activities'));
      setJobOpportunities(getAverageRating(array, 'jobOpportunities'));
    }
  }, [loading, data, error]);

  useEffect(() => {
    let total =
      qualityOfEducation + infrastructure + fee + activities + jobOpportunities;
    let averageTotal = total / 5;
    setAverage(averageTotal);
  }, [qualityOfEducation, infrastructure, fee, activities, jobOpportunities]);
  return (
    // <div className="container">
    // <div className="row ">
    //   <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
    //   <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-3 rating-uni-form">
    <div className="rating-uni-form">
      {/* header */}
      <h1>
        <span>{t('detailUniversity.formRating.evaluate')}</span>{' '}
        {t('detailUniversity.formRating.aboutUs')}
      </h1>
      <img
        src="/assets/detail-university/form-rating/5.png"
        id="plants-image"
        alt="plants green"
      />
      <h5>
        {t('detailUniversity.formRating.available')}{' '}
        <span>{numberOfRating}</span>{' '}
        {t('detailUniversity.formRating.userEvaluate')}
      </h5>
      <span id="text-average-gray">
        {t('detailUniversity.formRating.averageRating')}
      </span>
      <div className="score-average-rating">
        <p>{average} /</p>
        <span>5</span>
      </div>
      {/* body */}
      <hr></hr>
      <div className="box-slider-rating">
        <span className="title-factor-rating">
          {t('detailUniversity.formRating.qualityOfEducation')}
        </span>
        <SliderRating
          marks={marks}
          key={`slider-${qualityOfEducation}`}
          defaultValue={qualityOfEducation}
        />
      </div>
      <div className="box-slider-rating">
        <span className="title-factor-rating">
          {t('detailUniversity.formRating.infrastructure')}
        </span>
        <SliderRating
          key={`slider-${infrastructure}`}
          defaultValue={infrastructure}
        />
      </div>
      <div className="box-slider-rating">
        <span className="title-factor-rating">
          {t('detailUniversity.formRating.fee')}
        </span>
        <SliderRating key={`slider-${fee}`} defaultValue={fee} />
      </div>
      <div className="box-slider-rating">
        <span className="title-factor-rating">
          {t('detailUniversity.formRating.activities')}
        </span>
        <SliderRating key={`slider-${activities}`} defaultValue={activities} />
      </div>
      <div className="box-slider-rating">
        <span className="title-factor-rating">
          {t('detailUniversity.formRating.jobOpportunities')}
        </span>
        <SliderRating
          key={`slider-${jobOpportunities}`}
          defaultValue={jobOpportunities}
        />
      </div>
      <Button
        variant="outlined"
        disabled={isRating === 'notYetRated' ? false : true}
        onClick={handleRatingClick}
      >
        {isRating === 'unAuthentication'
          ? ''
          : isRating === 'rated'
          ? t('detailUniversity.formRating.btn.rated')
          : t('detailUniversity.formRating.btn.rate')}
      </Button>
      {isRating === 'unAuthentication' && (
        <AlertAuthor label="để đánh giá!" variant="outlined" />
      )}
    </div>

    //    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
    //   </div>
    // </div>
    // </div>
  );
}
export default FormRating;
