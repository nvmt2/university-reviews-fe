import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "./../style/sticky.css";

function Sticky() {
  return (
    <div>
      <div className="view-intro">
        <img src="/assets/intro/logo.png" className="logo-intro" alt="logo" />
        <FavoriteIcon />
        <p className="count-view">0</p>
        <VisibilityIcon />
      </div>
    </div>
  );
}

export default Sticky;
