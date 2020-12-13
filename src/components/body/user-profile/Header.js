import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { NavLink } from "react-router-dom";

function Header() {
  return (
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
  );
}

export default Header;
