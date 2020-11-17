import React, { useRef, useEffect } from "react";
import "./style/signup.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { TweenMax, Power2, Bounce } from "gsap";

function SignUp() {
  //let title = useRef(null);
  let formSignUp = useRef(null);

  useEffect(() => {
    // TweenMax.from(title, {
    //   duration: 0.8,
    //   y: -1000,
    //   ease: Bounce,
    // });
    TweenMax.from(formSignUp, {
      duration: 0.8,
      delay: 0,
      y: -1250,
      ease: Power2.in,
    });
  }, []);

  return (
    <div className="SignUp">
      <div className="container">
        <div
          ref={(el) => {
            formSignUp = el;
          }}
          className="row main-signIn"
        >
          <img src="/assets/signIn/SignIn.png" className="img-signIn" />
          <form
            // ref={(el) => {
            //   formSignUp = el;
            // }}
            className="form-SignUp"
          >
            <h2>Đăng ký</h2>
            <div className="form-group">
              <span className="title-input">Tên người dùng</span>
              <div className="SignUp-input">
                <AccountCircleIcon />
                <input type="text" placeholder="Nhập tên của bạn" />
              </div>
              <span className="title-input">Email</span>
              <div className="SignUp-input">
                <MailOutlineIcon />
                <input type="email" placeholder="Nhập tài khoản Email" />
              </div>
              <span className="title-input">Mật khẩu</span>
              <div className="SignUp-input">
                <LockOpenIcon />
                <input type="password" placeholder="Nhập mật khẩu của bạn" />
                <div className="hidden-pass">
                  <VisibilityOffIcon />
                </div>
              </div>
              <span className="title-input">Nhập lại mật khẩu</span>
              <div className="SignUp-input">
                <LockOpenIcon />
                <input
                  type="password"
                  placeholder="Nhập lại mật khẩu của bạn"
                />
                <div className="hidden-pass">
                  <VisibilityOffIcon />
                </div>
              </div>
              <a href="#" className="acc">
                Đã có tài khoản
              </a>
              <button className="done">Xong</button>
              <div className="infor">
                <p>Theo dõi chúng tôi qua</p>
                <a href="https://www.facebook.com/messages/t/3555565087788394">
                  https://www.facebook/cs41.04
                </a>
              </div>
            </div>
          </form>
        </div>
        {/**---------background---SignIn--------- */}
        {/* <div className='bg-signIn'>
        
          </div> */}
      </div>
    </div>
  );
}

export default SignUp;
