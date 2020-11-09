import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { NavLink } from "react-router-dom";
//importing local file
import "./user.css";
import MyPost from "./MyPost";
import PinPost from "./PinPost";
//material-ui
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Index() {
  return (
    <div className="user">
      <div className="banner-user">
        <div className="container">
          <div className="group-banner-user">
            <AccountCircleIcon />
            <span className="userName">UserName1</span>
          </div>

          <NavLink className="edit-presonal" to="/user/editor">
            Chỉnh sửa trang cá nhân
          </NavLink>
        </div>
      </div>
      <div className="container main-user">
        {/*<div className="row">
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
        </div>*/}

        {/**------------tab----- */}

        <Tabs className="tabs-user">
          <TabList className="tabList-user">
            <Tab className="tab-user">Bài viết của tôi</Tab>
            <Tab className="tab-user">Bài viết đã ghim</Tab>
          </TabList>

          <TabPanel className="tabPanel-user">
            <MyPost />
            <MyPost />
            <MyPost />
            <MyPost />
          </TabPanel>
          <TabPanel className="tabPanel-user">
            <PinPost />
            <PinPost />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
