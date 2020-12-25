import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { motion } from "framer-motion";
//import local file
import { userEditorMutation } from "query/user-editor";
import { fetchAccountAction } from "state/ducks/common/actions/login";
import { pageTransition } from "common/page-transition/configVarian";
import "./style.css";

function Index() {
  const dispatch = useDispatch();
  const history = useHistory();
  const idUser = useSelector((state) => state.login.data.id);
  const [formData, setFormData] = useState({
    idUser,
    passwordUser: "",
    username: "",
  });
  const [updateUserProfile, { data, error, loading }] = useMutation(
    userEditorMutation.EDIT_USER_PROFILE
  );

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  //handle button update
  const handleUpdate = (e) => {
    e.preventDefault();
    if (formData.username.length <= 0 || formData.passwordUser.length <= 0)
      alert("Nhập đầy đủ thông tin ở các trường bên dưới ");
    else {
      updateUserProfile({
        variables: formData,
      });
    }
  };
  useEffect(() => {
    !!data && alert("Cập nhập thành công");
    !!error && alert("Lỗi 404");
  }, [data, error, loading]);

  // handle button Log out: dispath empty object into login state into reducer and remove localstorage[idUser]
  const handleLogOut = () => {
    dispatch(fetchAccountAction(false));
    localStorage.removeItem("idUser");
    history.push("/login");
  };
  //display image profile when upload
  function loadFile(event) {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("outputUserProfile");
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  return (
    <motion.div
      className="container user-editor"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <h1 className="text-center mt-5">Thiết lập tài khoản</h1>
      <form className="form-user-editor">
        <div id="thay-doi-avatar">
          <div id="display-anh-dai-dien" className="mb-3">
            <label>Ảnh đại diện :</label>
            <img
              id="outputUserProfile"
              alt="profile user"
              height="150px"
              width="150px"
            />
          </div>
          <div id="them-anh" className="form-group ml-2">
            <input type="file" accept="image/*" onChange={loadFile} />
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Tên người dùng"
            className="form-control"
            name="username"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group form-users">
          <div className="row">
            <input type="radio" name="gioitinh" id="nam" value="Nam" />
            <label>Nam</label>
          </div>
          <div className="row">
            <input type="radio" name="gioitinh" id="nu" value="Nu" />
            <label>Nữ</label>
          </div>
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
          name="passwordUser"
          onChange={handleOnChange}
        />
        {/* <input
          type="password"
          id="upd-password-2"
          placeholder="Nhập lại mật khẩu"
          className="form-control"
        /> */}

        <div className="text-right">
          <button id="btn-cap-nhat-tt" className="btn" onClick={handleUpdate}>
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
    </motion.div>
  );
}

export default Index;
