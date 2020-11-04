import React from "react";
import parse from "html-react-parser";

//importing material UI
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";

function HeaderComment(props) {
  const {
    title,
    content,
    date,
    tags,
    user: { username },
  } = props;

  return (
    <>
      <div className="banner-comment">
        {/* header of topic */}
        <div className="container">
          <h2 className="title-banner-comment">{title}</h2>
          <div className="row">
            <a href="." className="row group-user-comment">
              <AccountCircleIcon />
              <div className="infor-user-comment">
                <p className="title-user-comment">{username}</p>
                <p className="date-topic-comment">{date}</p>
              </div>
            </a>
            <div className="group-like-comment">
              <ThumbDownAltOutlinedIcon />
              <ThumbUpOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
      {/* content of topic */}
      <div className="container news-comment">
        <p className="content-comment">{parse(`${content}`)}</p>
      </div>
    </>
  );
}

export default HeaderComment;
