import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
//internal components
import CreateIcon from '@material-ui/icons/Create';
import CameraRollIcon from '@material-ui/icons/CameraRoll';
//multiple i18n
import { useTranslation } from 'react-i18next';

function Banner(props) {
  //STATE
  const { t } = useTranslation();
  const { name } = props;
  const { slug } = useParams();
  return (
    <div className="banner-topic">
      <div className="container">
        <div className="title-banner-topic">
          <h2 className="title-school">{name}</h2>

          <NavLink
            style={{}}
            className="review-topic write"
            to={() => {
              return { pathname: `/topics/${slug}/new-post` };
            }}
          >
            <CreateIcon />
            {t('topic.btn.review')}
          </NavLink>
          <NavLink
            className="review-topic read"
            to={() => {
              return { pathname: `/detail-university/${slug}` };
            }}
          >
            <CameraRollIcon />
            {t('topic.btn.viewUni')}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Banner;
