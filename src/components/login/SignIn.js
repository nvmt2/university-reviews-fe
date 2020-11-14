import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
//import local file
import {
  fetchAccountAction,
  passStatusSingin,
} from "state/ducks/common/actions/login";
import { loginQuery } from "query/login";
import "./style/signin.css";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { TweenMax, Power2, Elastic } from "gsap";

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { login } = useSelector((state) => state);
  let formSignIn = useRef(null);
  const [form, setForm] = useState({
    email: "",
    passwordUser: "",
  });
  const { data, loading, error } = useQuery(loginQuery.GET_ACCOUNT, {
    variables: form,
  });

  //handle sign in onSubmit
  const sigin = (event) => {
    event.preventDefault();
    //show alert when sign in fail
    if (data.allAccounts.length === 0) {
      alert("Tài khoản hoặc mật khâu không hợp lệ");
    }
    //turn back home-page when sign in success
    else {
      dispatch(fetchAccountAction(data.allAccounts[0]));
    }
  };
  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (!!login.data) history.push("/");
    // TweenMax.from(formSignIn, {
    //   duration: 1,
    //   x: 1000,
    //   ease: Elastic.easeOut(1, 0.3),
    // });
  }, [data, loading, error, login, history]);
  console.log("SIGN_IN");
  return (
    <div className="SignIn">
      <div className="container">
        <div
          ref={(el) => {
            formSignIn = el;
          }}
          className="row main-signIn"
        >
          <img
            src="/assets/signIn/SignIn.png"
            className="img-signIn"
            alt="logo"
          />
          <form onSubmit={sigin} className="form-SignIn">
            <h2>Đăng nhập</h2>
            <div className="form-group">
              <span className="title-input">Email</span>
              <div className="SignIn-input">
                <MailOutlineIcon />
                <input
                  type="email"
                  name="email"
                  placeholder="Nhập tài khoản Email"
                  onChange={handleOnChange}
                />
              </div>
              <span className="title-input">Mật khẩu</span>
              <div className="SignIn-input">
                <LockOpenIcon />
                <input
                  onChange={handleOnChange}
                  type="password"
                  name="passwordUser"
                  placeholder="Nhập mật khẩu của bạn"
                />
                <div className="hidden-pass">
                  <VisibilityOffIcon />
                </div>
              </div>
              <a href="/" className="forgot">
                Quên mật khẩu
              </a>
              <button className="done">Đăng nhập</button>
              {/* <div className="infor-SignIn">
                <p className="fl-me">Hoặc đăng nhập qua </p>
                <ul className="social-group">
                  <li>
                    <a href="/" className="social">
                      <FacebookIcon />
                    </a>
                  </li>
                  <li>
                    <a href="/" className="social">
                      <TwitterIcon />
                    </a>
                  </li>
                </ul>
              </div>
         
              <div className="account-signIn">
                <p className="q-account">Bạn chưa có tài khoản ?</p>
                <a href="/register" className="signUp-acc">
                  Đăng ký ngay
                </a>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
