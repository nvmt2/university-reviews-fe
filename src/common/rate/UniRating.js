import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
//internal modules
import { ratingQuery } from 'query/rating';
import { getAverageRating } from 'helper/getAverageRating';
//material-ui components
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function UniRating() {
  //STATE
  let labels = {
    0.5: 'Useless',
    1: 'Useless+',
    2: 'Poor+',
    3: 'Ok+',
    4: 'Good+',
    5: 'Excellent+',
  };
  const [qualityOfEducation, setQualityOfEducation] = useState(5);
  const [infrastructure, setInfrastructure] = useState(5);
  const [fee, setFee] = useState(5);
  const [activities, setActivities] = useState(5);
  const [jobOpportunities, setJobOpportunities] = useState(5);

  const { data, loading, error } = useQuery(
    ratingQuery.GET_ALL_RATINGS_BY_UNIVERSITY,
    {
      variables: {
        idUni: localStorage.getItem('slugUniversity'),
      },
    }
  );

  //LIFECYCLE
  useEffect(() => {
    if (!!data) {
      let array = data.allRatings;
      setQualityOfEducation(getAverageRating(array, 'qualityOfEducation'));
      setInfrastructure(getAverageRating(array, 'fee'));
      setFee(getAverageRating(array, 'qualityOfEducation'));
      setActivities(getAverageRating(array, 'activities'));
      setJobOpportunities(getAverageRating(array, 'jobOpportunities'));
    }
  }, [loading, data, error]);
  return (
    <div>
      <Rating
        name="hover-feedback"
        value={qualityOfEducation}
        precision={0.5}
        readOnly
      />
      {qualityOfEducation !== null && <Box>{labels[qualityOfEducation]}</Box>}
      <Rating
        name="hover-feedback"
        value={infrastructure}
        precision={0.5}
        readOnly
      />
      {infrastructure !== null && <Box>{labels[infrastructure]}</Box>}
      <Rating name="hover-feedback" value={fee} precision={0.5} readOnly />
      {fee !== null && <Box>{labels[fee]}</Box>}
      <Rating
        name="hover-feedback"
        value={activities}
        precision={0.5}
        readOnly
      />
      {activities !== null && <Box>{labels[activities]}</Box>}
      <Rating
        name="hover-feedback"
        value={jobOpportunities}
        precision={0.5}
        readOnly
      />
      {jobOpportunities !== null && <Box>{labels[jobOpportunities]}</Box>}
    </div>
  );
}

export default UniRating;
