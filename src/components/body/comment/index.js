import React from "react";

import "./comment.css";
import PostComment from "./PostComment";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const Index = () => {
  return (
    <div className="comment">
      <div className="banner-comment">
        <div className="container">
          <h2 className="title-banner-comment">Cơ sở vật chất thật tuyệt!!!</h2>
          <div className="row">
            <a href="#" className="row group-user-comment">
              <AccountCircleIcon />
              <div className="infor-user-comment">
                <p className="title-user-comment">Username1</p>
                <p className="date-topic-comment">05/08/2020</p>
              </div>
            </a>
            <div className="group-like-comment">
              <ThumbUpAltIcon />
              <ThumbDownIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="container news-comment">
        <p className="content-comment">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores enim
          ab qui aperiam iste eos voluptate alias iure voluptatum, amet culpa,
          vero, consectetur voluptatem! Reprehenderit aut, tempora, quasi
          suscipit minima fugiat consequatur quas nisi at est maiores ab iure
          vero dolorem rem distinctio? Tempora, eligendi deserunt sint
          perspiciatis quis recusandae
        </p>
      </div>
      {/* Post comment */}
      <PostComment />
    </div>
  );
};
export default Index;
