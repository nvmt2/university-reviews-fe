import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
//internal modules
import { actionCloseDialog } from 'state/ducks/common/actions/dialog';
import { ratingMutation, ratingQuery } from 'query/rating';
import { myGetDate } from 'helper/getDate';
//internal components
import SliderRating from 'common/slider/SliderRating';
import DialogTitle from 'common/dialog/TitleDialog';
//material-ui component
import DialogActions from '@material-ui/core/DialogActions';
// import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
//multiple i18n
import { useTranslation } from 'react-i18next';

function RatingDialog() {
  //STATE
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [start, setStart] = useState({
    qualityOfEducation: 5,
    infrastructure: 5,
    fee: 5,
    activities: 5,
    jobOpportunities: 5,
  });
  const [createRating, { data: inforRating }] = useMutation(
    ratingMutation.CREATE_RATING
  );

  //METHOD
  const handleClose = () => {
    dispatch(actionCloseDialog());
  };
  const handleCancel = () => {
    handleClose();
  };
  //METHOD
  const handleChangeStart = (valueParsed, label) => {
    // let value = e.target.value;
    // let valueParsed = parseInt(value);
    switch (label) {
      case 'qualityOfEducation':
        setStart({ ...start, qualityOfEducation: valueParsed });
        break;
      case 'infrastructure':
        setStart({ ...start, infrastructure: valueParsed });
        break;
      case 'fee':
        setStart({ ...start, fee: valueParsed });
        break;
      case 'activities':
        setStart({ ...start, activities: valueParsed });
        break;
      case 'jobOpportunities':
        setStart({ ...start, jobOpportunities: valueParsed });
        break;
      default:
        return null;
    }
  };
  const handleClickRate = () => {
    createRating({
      variables: {
        ...start,
        idUser: localStorage.getItem('idUser'),
        idUni: localStorage.getItem('slugUniversity'),
        dateParam: myGetDate(),
      },
      refetchQueries: [
        {
          query: ratingQuery.GET_ALL_RATINGS_BY_UNIVERSITY,
          variables: {
            idUni: localStorage.getItem('slugUniversity'),
          },
        },
        {
          query: ratingQuery.GET_RATING_BY_AUTHOR,
          variables: {
            idUni: localStorage.getItem('slugUniversity'),
            idUser: localStorage.getItem('idUser'),
          },
        },
      ],
    });
    handleClose();
  };

  return (
    <Box>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <div className="header-dialog-rating">
          <p className="title">{t('dialog.rating.title')}</p>
          <p>{t('dialog.rating.subtitle')}</p>
          <p>{t('dialog.rating.subTitle2')}</p>
        </div>
      </DialogTitle>
      {/* body */}
      <DialogContent dividers>
        <div className="body-dialog-rating">
          <p>{t('dialog.rating.qualityOfEducation')}</p>
          <SliderRating
            onChange={(e, val) => handleChangeStart(val, 'qualityOfEducation')}
          />
          <p>{t('dialog.rating.infrastructure')}</p>
          <SliderRating
            onChange={(e, val) => handleChangeStart(val, 'infrastructure')}
          />
          <p>{t('dialog.rating.fee')}</p>
          <SliderRating onChange={(e, val) => handleChangeStart(val, 'fee')} />
          <p>{t('dialog.rating.activities')}</p>
          <SliderRating
            onChange={(e, val) => handleChangeStart(val, 'activities')}
          />
          <p>{t('dialog.rating.jobOpportunities')}</p>
          <SliderRating
            onChange={(e, val) => handleChangeStart(val, 'jobOpportunities')}
          />
        </div>
      </DialogContent>
      {/* end of body */}
      <DialogActions>
        <div className="footer-dialog-rating">
          <Button color="secondary" variant="outlined" onClick={handleCancel}>
            {t('dialog.rating.btn.rate')}
          </Button>
          <Button color="primary" variant="outlined" onClick={handleClickRate}>
            {t('dialog.rating.btn.cancel')}
          </Button>
        </div>
      </DialogActions>
    </Box>
  );
}

export default RatingDialog;
