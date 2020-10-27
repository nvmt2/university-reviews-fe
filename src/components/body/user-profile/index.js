import React from "react";
import "./user.css";
import MyPost from "./MyPost";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Index() {
  return (
    <div className="user">
      <div className="banner-user">
        <div className="container">
          <a href="#" className="group-banner-user">
            <AccountCircleIcon />
            <span className="userName">UserName1</span>
          </a>
          <a href="#" className="edit-presonal">
            Chỉnh sửa trang cá nhân
          </a>
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
          </TabPanel>
          <TabPanel className="tabPanel-user">vnfngvkfmv</TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
