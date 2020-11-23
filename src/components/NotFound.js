import React from "react";
import "./NotFound.css";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="wrap-not-found">
      <img
        src="/assets/not-found/not-found.png"
        className="img-notFound"
        alt="not-found"
      />
      <h5 className="text-not-found">Không tìm thấy trang</h5>
      <p className="content">Bạn đã nhập sai hoặc trang này không tồn tại</p>
      <NavLink to="/">Vui lòng quay lại trang chủ</NavLink>
    </div>
  );
}

export default NotFound;
