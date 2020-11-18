import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchAccountAction } from "state/ducks/common/actions/login";
import "./style.css";

function Index() {
  const dispatch = useDispatch();
  const history = useHistory();
  // dispath empty object into login state in reducer
  const handleLogOut = () => {
    dispatch(fetchAccountAction());
    history.push("/login");
  };
  return (
    <div className="container user-editor">
      <h1 className="text-center mt-5">Thiết lập tài khoản</h1>
      <form className="form-user-editor">
        <div id="thay-doi-avatar">
          <div id="display-anh-dai-dien" className="mb-3">
            <label for="file">Ảnh đại diện :</label>
            <img
              src="/assets/user-editor/avt.jpg"
              alt="ảnh đại diện"
              className=" img-fluid rounded"
            />
          </div>
          <div id="them-anh" className="form-group ml-2">
            <input type="file" name="file-avatar" />
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Tên người dùng"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input type="radio" name="gioitinh" id="nam" value="Nam" />
          <label for="nam">Nam</label>
          <input type="radio" name="gioitinh" id="nu" value="Nu" />
          <label for="nu">Nữ</label>
        </div>
        <textarea
          name="moTa-thong-tin"
          id="maTa"
          cols="30"
          rows="5"
          placeholder="Mô tả thông tin về bạn .."
          className="form-control"
        ></textarea>
        <input
          type="password"
          id="upd-passwor-1"
          placeholder="Nhập mật khẩu"
          className="form-control mb-3"
        />
        <input
          type="password"
          id="upd-password-2"
          placeholder="Nhập lại mật khẩu"
          className="form-control"
        />

        <div className="text-right">
          <button id="btn-cap-nhat-tt" className="btn">
            Cập nhật
          </button>
        </div>
        <hr />
        <button
          id="btn-huy-tt"
          className="btn btn-outline-danger"
          onClick={handleLogOut}
        >
          Đăng xuất
        </button>
      </form>
    </div>
  );
}

export default Index;
