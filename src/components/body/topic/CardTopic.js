import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import parse from "html-react-parser";

function CardTopic(props) {
  const { id, title, content, date, like, tags, user } = props;
  return (
    <div className="group-topic">
      <div className="row content-topic">
        <a href="/" className="col-md-8 row group-user">
          <AccountCircleIcon />
          <div className="infor-user">
            <p className="title-user">{user.username}</p>
            <p className="date-topic">{date}</p>
          </div>
        </a>
        <div className="rating-topic">
          <div className="count-topic">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p className="title-rating-topic">Độ uy tín của Topic</p>
        </div>
      </div>
      <div className="infor-topic">
        <h2 className="title-infor-topic">{title}</h2>
        <p className="content-infor-topic">{parse(`${content}`)}</p>
        <div className="row view-topic">
          <a href="#" className="viewMore-topic">
            Đọc thêm...
          </a>
          <div className="row group-content-categories-topic">
            <a href="3" className="content-categories-topic">
              {tags}
            </a>
            <a href="#" className="content-categories-topic">
              Cơ sở vật chất
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTopic;
