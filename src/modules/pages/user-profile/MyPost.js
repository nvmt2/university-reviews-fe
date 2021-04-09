import React from 'react';
import parse from 'html-react-parser';
import { NavLink } from 'react-router-dom';
//local file
import { myParseDate } from 'helper/parse';
import { countStart } from 'helper/countStart';
//material-ui
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function MyPost(props) {
  const {
    title,
    content,
    date,
    user: { username },
    tags,
    id,
    like,
    unlike,
  } = props;
  return (
    <div className="myPost">
      <div className="group-user-topic">
        <div className="row content-user-topic">
          <a href="/" className="col-md-8 row group-users">
            <AccountCircleIcon />
            <div className="infor-users">
              <p className="title-users">{username}</p>
              <p className="date-topics"> {myParseDate(date)}</p>
            </div>
          </a>
          <div className="rating-topics">
            <div className="count-topics">
              {
                // Math.floor(Math.random() * 5) + 1
                Array(countStart(like, unlike))
                  .fill()
                  .map((item, index) => (
                    <i className="fas fa-star" key={index}></i>
                  )) //random number of start
              }
            </div>
            <p className="title-rating-topics">Độ uy tín của Topic</p>
          </div>
        </div>
        <div className="infor-topics">
          <h2 className="title-infor-topics">{title}</h2>
          <p className="content-infor-topics">{parse(`${content}`)}</p>
          <div className="row view-topics">
            <NavLink
              className="viewMore-topics"
              to={() => {
                return {
                  pathname: `/topics/${id}/comments`,
                };
              }}
            >
              Đọc thêm...
            </NavLink>

            <div className="row group-content-categories-topics">
              <a href="3" className="content-categories-topics">
                {tags}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPost;
