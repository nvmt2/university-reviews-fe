import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
//internal modules
import { actionCloseDialog } from 'state/ducks/common/actions/dialog';
import { ratingMutation, ratingQuery } from 'query/rating';
//material-ui component
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

function RatingDialog() {
  //STATE
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
  const handleChangeStart = (e, label) => {
    let value = e.target.value;
    let valueParsed = parseInt(value);
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
        <Typography>RATING</Typography>
      </DialogTitle>
      {/* body */}
      <DialogContent dividers>
        <div>
          <Rating
            name="qualityOfEducation"
            defaultValue={5}
            onChange={(e) => handleChangeStart(e, 'qualityOfEducation')}
          />
          <br />
          <Rating
            name="infrastructure"
            defaultValue={5}
            onChange={(e) => handleChangeStart(e, 'infrastructure')}
          />
          <br />
          <Rating
            name="fee"
            defaultValue={5}
            onChange={(e) => handleChangeStart(e, 'fee')}
          />
          <br />
          <Rating
            name="activities"
            defaultValue={5}
            onChange={(e) => handleChangeStart(e, 'activities')}
          />
          <br />
          <Rating
            name="jobOpportunities"
            defaultValue={5}
            onChange={(e) => handleChangeStart(e, 'jobOpportunities')}
          />
        </div>
      </DialogContent>
      {/* end of body */}
      <DialogActions>
        <Button color="secondary" variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>
        <Button color="primary" variant="outlined" onClick={handleClickRate}>
          Rate
        </Button>
      </DialogActions>
    </Box>
  );
}

export default RatingDialog;
