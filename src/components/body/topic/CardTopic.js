import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { NavLink } from "react-router-dom";
import parse from "html-react-parser";
import { myParseDate } from "components/helper/parse";
import Avatar from "@material-ui/core/Avatar";
import "./style/topic.css";

function CardTopic(props) {
  const {
    id,
    title,
    content,
    date,
    like,
    tags,
    user: { username, avatar },
  } = props;

  return (
    <div className="group-topic container">
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
              Array(4)
                .fill()
                .map((item, index) => (
                  <i className="fas fa-star" key={index}></i>
                )) //random number of start
            }
          </div>
          <p className="title-rating-topic">Độ uy tín của Topic</p>
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
              Chi tiết
            </NavLink>
          </div>
          <div className="col-md-10 wrap-topic-tag">
            <a href="." className="content-categories-topic">
              {tags}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardTopic;
