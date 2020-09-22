import React from "react";
import "./SignIn.css";
import "bootstrap/dist/css/bootstrap.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import gsap from "gsap";
import { TweenMax, Power2, Bounce } from "gsap";
function SignIn() {
  return (
    <div className="SignIn">
      <div className="container">
        <div className="row">
          <h1 className="title-SignIn">
            Đăng nhập để cùng chia sẽ cảm nghĩ của bạn nào...
          </h1>
          <form>
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
              <a href="#" className="forgot">Quên mật khẩu</a>
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
