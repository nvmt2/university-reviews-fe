import React from "react";
import "./Major.css";

import FavoriteIcon from "@material-ui/icons/Favorite";
import VisibilityIcon from "@material-ui/icons/Visibility";

function Major() {
  return (
    <div className="major-Uni">
      <div className="container">
        <p className="infor-intro">admin.duytan</p>
        <div className="row dates-intro">
          <p className="date-intro ">07/05/2020</p>
          <p className="date-intro">4:30:PM</p>
          <p className="date-intro">- 89 lượt đọc</p>
        </div>
      </div>
      <h1 className="container title-major">Ngành nghề đào tạo</h1>
      <div className="view-intro">
        <img src="/assets/intro/logo.png" className="logo-intro" />
        <FavoriteIcon />
        <p className="count-view">0</p>
        <VisibilityIcon />
      </div>
      <table className="container table-major">
        <tr>
          <th className="th-major">Nhóm ngành</th>
          <th className="th-major">Ngành</th>
          <th className="th-major">Tổ hợp môn</th>
        </tr>
        <tbody className="tbody-major">
          <tr>
            <td rowSpan="4" className="td-major">
              Công nghệ thông tin
            </td>
            <td className="td-major">Công nghệ thông tin</td>
            <td className="td-major">
              D01 (Toán, Ngữ Văn, Tiếng Anh)
              <br /> D90 (Toán, Tiếng Anh, KHTN)
            </td>
          </tr>
          <tr>
            <td className="td-major">
              Công nghệ thông tin định hướng thị trường Nhật Bản
            </td>
            <td className="td-major">
              D01 (Toán, Ngữ Văn, Tiếng Anh)
              <br /> D90 (Toán, Tiếng Anh, KHTN)
            </td>
          </tr>
          <tr>
            <td className="td-major">Hệ thống thông tin</td>
            <td className="td-major">
              D01 (Toán, Ngữ Văn, Tiếng Anh)
              <br /> D90 (Toán, Tiếng Anh, KHTN)
            </td>
          </tr>
          <tr>
            <td className="td-major">Mạng máy tính và truyền thông dữ liệu</td>
            <td className="td-major">
              D01 (Toán, Ngữ Văn, Tiếng Anh)
              <br /> D90 (Toán, Tiếng Anh, KHTN)
            </td>
          </tr>
          {/**------------------- */}
          <tr>
            <td rowSpan="3" className="td-major">
              Máy tính và Robot
            </td>
            <td className="td-major">Kỹ thuật máy tính</td>
            <td className="td-major">
              A00 (Toán, Lý, Hóa)
              <br />
              A01 (Toán, Lý, Anh)
            </td>
          </tr>
          <tr>
            <td className="td-major">Kỹ thuật Robot</td>
            <td className="td-major">
              A00 (Toán, Lý, Hóa)
              <br /> A01 (Toán, Lý, Anh)
            </td>
          </tr>
          <tr>
            <td className="td-major">Kỹ thuật máy tính và robot</td>
            <td className="td-major">
              A00 (Toán, Lý, Hóa)
              <br /> A01 (Toán, Lý, Anh)
            </td>
          </tr>
          {/**----------------------- */}
          <tr>
            <td rowSpan="5" className="td-major">
              Sư phạm
            </td>
            <td className="td-major">Kỹ thuật máy tính</td>
            <td className="td-major">
              A00 (Toán, Lý, Hóa)
              <br /> A01 (Toán, Lý, Anh)
            </td>
          </tr>
          <tr>
            <td className="td-major">Kỹ thuật Robot</td>
            <td className="td-major">
              A00 (Toán, Lý, Hóa)
              <br />
              A01 (Toán, Lý, Anh)
            </td>
          </tr>
          <tr>
            <td className="td-major">Kỹ thuật Robot</td>
            <td className="td-major">
              A00 (Toán, Lý, Hóa)
              <br /> A01 (Toán, Lý, Anh)
            </td>
          </tr>
          <tr>
            <td className="td-major">Kỹ thuật Robot</td>
            <td className="td-major">
              A00 (Toán, Lý, Hóa)
              <br /> A01 (Toán, Lý, Anh)
            </td>
          </tr>
          <tr>
            <td className="td-major">Kỹ thuật Robot</td>
            <td className="td-major">
              A00 (Toán, Lý, Hóa)
              <br /> A01 (Toán, Lý, Anh)
            </td>
          </tr>
        </tbody>
      </table>
      {/**--------------------- */}
      <button className="btn-major">Xem thêm</button>
      <div className="contact-major">
        <h4 className="title-contact-major">
          Để lại thông tin để chúng tôi liên lạc
        </h4>
        <p className="p-title-contact">
          Đừng lo, chúng tôi sẽ không gửi quá nhiều email
        </p>
        <input
          type="email"
          placeholder="Email"
          className="input-contact-major"
        />
        <button type="submit" className="btn-submit-major">
          Gửi thông tin
        </button>
      </div>
    </div>
  );
}

export default Major;
