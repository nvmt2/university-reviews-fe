import React, { useRef, useEffect } from "react";
import "./SignIn.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { TweenMax, Power2, Elastic } from "gsap";
import "./style.css";

function SignIn() {
  let title = useRef(null);
  let formSignIn = useRef(null);

  useEffect(() => {
    TweenMax.from(title, {
      duration: 2.5,
      x: -1000,
      ease: Elastic.easeOut(1, 0.3),
    });
    TweenMax.from(formSignIn, {
      duration: 2.5,
      x: 1000,
      ease: Elastic.easeOut(1, 0.3),
    });
  }, []);

  return (
    <div className="SignIn">
      <div className="container">
        <div className="row">
          <h1
            className="title-SignIn"
            ref={(el) => {
              title = el;
            }}
          >
            Đăng nhập để cùng chia sẽ cảm nghĩ của bạn nào...
          </h1>
          <form
            ref={(el) => {
              formSignIn = el;
            }}
          >
            <h2>Đăng nhập</h2>
            <div className="form-SignIn">
              <span className="title-input">Email</span>
              <div className="SignIn-input">
                <MailOutlineIcon />
                <input type="email" placeholder="Nhập tài khoản Email" />
              </div>
              <span className="title-input">Mật khẩu</span>
              <div className="SignIn-input">
                <LockOpenIcon />
                <input type="password" placeholder="Nhập mật khẩu của bạn" />
                <div className="hidden-pass">
                  <VisibilityOffIcon />
                </div>
              </div>
              <a href="#" className="forgot">
                Quên mật khẩu
              </a>
              <button className="done">Xong</button>
              <div className="infor-SignIn">
                <p>Theo dõi chúng tôi qua</p>
                <ul className="social-group">
                  <li>
                    <a href="#" className="social">
                      <FacebookIcon />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social">
                      <TwitterIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
