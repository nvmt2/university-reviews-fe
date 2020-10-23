import React from "react";

import "./Cooperation.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import VisibilityIcon from "@material-ui/icons/Visibility";

export default function Cooperation() {
  return (
    <div className="cooperation">
      <div className="view-intro">
        <img src="/assets/intro/logo.png" className="logo-intro" alt="logo"/>
        <FavoriteIcon />
        <p className="count-view">0</p>
        <VisibilityIcon />
      </div>

      <div className="container">
        <p className="infor-intro">admin.duytan</p>
        <div className="row dates-intro">
          <p className="date-intro ">07/05/2020</p>
          <p className="date-intro">4:30:PM</p>
          <p className="date-intro">- 89 lượt đọc</p>
        </div>
      </div>
      <h1 className="container title-cooperation">Các đối tác quan hệ</h1>
    
      <div className="container main-cooperation">
        <div className="item-cooperation">
          <h2 className="title-main-cooperation">Đối tác trong nước</h2>

          <table className="table-cooperation">
            <tr>
              <th className="th-cooperation">#</th>
              <th className="th-cooperation">Tên đối tác</th>
              <th className="th-cooperation">Quốc gia</th>
              <th className="th-cooperation">Mô tả</th>
              <th className="th-cooperation">Chi tiết</th>
            </tr>
            <tbody className="tbody-cooperation">
              <tr>
                <td className="td-coopreation">1</td>
                <td className="td-coopreation">Duy Tân</td>
                <td className="td-coopreation">Việt Nam</td>
                <td className="td-coopreation">Chương trình CMU</td>
                <td className="td-coopreation">fgfghghgrgfs</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
