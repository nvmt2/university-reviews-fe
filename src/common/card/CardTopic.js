import React from 'react';
import { NavLink } from 'react-router-dom';
import parse from 'html-react-parser';
//internal modules
import { myParseDate } from 'helper/parse';
//internal modules
import { SubBox } from 'theme/component/SubBox';
import { countStart } from 'helper/countStart';
//material-UI components
import Avatar from '@material-ui/core/Avatar';
//multiple i18n
import { useTranslation } from 'react-i18next';

function CardTopic(props) {
  //STATE
  const { t } = useTranslation();
  const {
    id,
    title,
    content,
    date,
    like,
    unlike,
    tags,
    user: { username, avatar },
  } = props;

  return (
    <SubBox className="group-topic container">
      <div className="row">
        <div className="col-md-8 group-user ">
          <div className="ava-user">
            <Avatar alt="avatar of user" src={!!avatar && avatar.publicUrl} />
          </div>
          <div className="infor-user">
            <p className="title-user">{username}</p>
            <p className="date-topic">{myParseDate(date)}</p>
          </div>
        </div>
        <div className="rating-topic col-md-4 ">
          <div className="count-topic">
            {
              // Math.floor(Math.random() * 5) + 1
              Array(countStart(like, unlike))
                .fill()
                .map((item, index) => (
                  <i className="fas fa-star" key={index}></i>
                )) //random number of start
            }
          </div>
          <p className="title-rating-topic">{t('topic.card.trustOfRating')}</p>
        </div>
      </div>
      <div className="infor-topic">
        <h2 className="title-infor-topic">{title}</h2>
        <p className="content-infor-topic">{parse(`${content}`)}</p>
        <div className="row view-topic">
          <div className="col-md-2">
            <NavLink
              className="viewMore-topic"
              to={(location) => {
                return {
                  pathname: `/topics/${id}/comments`,
                };
              }}
            >
              {t('topic.btn.more')}
            </NavLink>
          </div>
          <div className="col-md-10 wrap-topic-tag">
            <a href="." className="content-categories-topic">
              {tags}
            </a>
          </div>
        </div>
      </div>
    </SubBox>
  );
}
export default CardTopic;
