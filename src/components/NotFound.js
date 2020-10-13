import React from "react";
import './NotFound.css';

function NotFound() {
  return (
    <div className="wrap-not-found">
      <img src="/assets/not-found/not-found.png" class="img-notFound" alt="not-found" />
      <h5 className="text-not-found">Không tìm thấy trang</h5>
      <p className="content">Bạn đã nhập sai hoặc trang này không tồn tại</p>
      <a href="/"> Vui lòng quay lại trang chủ</a>
    </div>
  );
}

export default NotFound;
