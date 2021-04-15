import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//internal modules
import { actionOpenDialogNewPost } from 'state/ducks/common/actions/dialog';
//material-ui components
import { makeStyles } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import CameraRollIcon from '@material-ui/icons/CameraRoll';
import Button from '@material-ui/core/Button';
//multiple i18n
import { useTranslation } from 'react-i18next';

const useBannerStyle = makeStyles((theme) => ({
  reviewTopic: {
    marginTop: 17,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    borderRadius: 50,
    alignItems: 'center',
    padding: ' 6px 17px 6px 17px',
    background: '#5ca751',
  },
  write: {
    width: 250,
  },
  read: {
    width: 380,
  },
}));
function Banner(props) {
  //STATE
  const classes = useBannerStyle();
  const { t } = useTranslation();
  const { name } = props;
  const history = useHistory();
  const { slug } = useParams();
  const dispatch = useDispatch();
  //METHOD
  const handleNewPost = () => {
    dispatch(actionOpenDialogNewPost());
  };
  const handleViewUni = () => {
    history.push(`/detail-university/${slug}`);
  };

  return (
    <div className="banner-topic">
      <div className="container">
        <div className="title-banner-topic">
          <h2 className="title-school">{name}</h2>
          <Button
            className={`${classes.reviewTopic} ${classes.write}`}
            startIcon={<CreateIcon />}
            onClick={handleNewPost}
          >
            {t('topic.btn.review')}
          </Button>
          <Button
            className={`${classes.reviewTopic} ${classes.read}`}
            startIcon={<CameraRollIcon />}
            onClick={handleViewUni}
          >
            {t('topic.btn.viewUni')}
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Banner;
