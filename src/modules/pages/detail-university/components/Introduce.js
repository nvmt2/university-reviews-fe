import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { useDispatch } from 'react-redux';
//internal modules
import detailUniversityQuery from 'query/detail-university';
import { ratingQuery } from 'query/rating';
import { actionOpenDialogRating } from 'state/ducks/common/actions/dialog';
//internal components
import LoadingIcon from 'common/loading/LoadingIcon';
import Author from 'modules/pages/detail-university/common/Author';
import FormMail from 'modules/pages/detail-university/common/FormMail';
import UniRating from 'common/rate/UniRating';
import AlertAuthor from 'common/alert/AlertAuthor';
//multiple i18n
import { useTranslation } from 'react-i18next';
//material-ui components
import Button from '@material-ui/core/Button';

function Introduce() {
  //STATE
  const { t } = useTranslation();
  const { slug } = useParams();
  const [isRating, setIsRating] = useState('unAuthentication');
  const dispatch = useDispatch();
  //query apollo
  const { data, loading, error } = useQuery(
    detailUniversityQuery.GET_INTRODUCE,
    {
      variables: {
        id: slug,
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
  const contentIntroduce =
    !loading &&
    !error &&
    !!data.allUniversities[0].detailUniversity &&
    data.allUniversities[0].detailUniversity.introduce;

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

  // let myLoading = false;
  // setTimeout(() => {
  //   myLoading = false;
  // }, 3000);

  // useEffect(() => {}, [data, loading, error, myLoading]);

  return (
    <div className="intro-background">
      <div className="container">
        <Author />
        <h1 className=" title-intro-Uni">
          {t('detailUniversity.introduce.title')}
        </h1>
        {!!contentIntroduce ? (
          <span>{parse(`${contentIntroduce}`)}</span>
        ) : (
          <LoadingIcon />
        )}
        <div className="container row group-contact">
          <FormMail />
        </div>
        <h3>Uni rating</h3>
        <UniRating />
        <Button
          variant="outlined"
          disabled={isRating === 'notYetRated' ? false : true}
          onClick={handleRatingClick}
        >
          Đánh giá
        </Button>
        {isRating === 'unAuthentication' && (
          <AlertAuthor label="để đánh giá!" severity="success" />
        )}
      </div>
    </div>
  );
}

export default Introduce;
