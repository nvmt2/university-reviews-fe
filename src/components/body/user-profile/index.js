import React from "react";
import "./user.css";

import MyPost from './MyPost';

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Index() {
  return (
    <div className="user">
      <div className="banner-user">
        <div className="container">
          <a href='#' className="group-banner-user">
            <AccountCircleIcon />
            <span className="userName">UserName1</span>
          </a>
          <a href="#" className="edit-presonal">
            Chỉnh sửa trang cá nhân
          </a>
        </div>
      </div>
      <div className="container main-user">
        <div className="row">
          <div className="my-posts">
            <a href="#" className="my-post">
              Bài viết của tôi
            </a>
            <MyPost />
            <MyPost />
          </div>
          <div className="pin-posts">
            <a href="#" className="my-post">
              Bài viết ghim
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
