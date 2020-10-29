import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                  COMPANY NAME<span></span>
                </h5>
                <p>About the company, little discription will goes here.. </p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Quick Links<span></span>
                </h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Get Started</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Top Leaders</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Success Stories</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Event/Tickets</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">News</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Lifestyle</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">About</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Get Started<span></span>
                </h5>
                <p>Get access to your full Training and Marketing Suite.</p>
                <a className="btn btn-home-page" href="#." target="_blank">
                  Register Now
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Contact Us<span></span>
                </h5>
                <p>group.sun.vtp@gmail.com</p>
                <ul className="social-footer2"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                @Bản quyền của nhóm CS1E.04 - mọi sự sao chép cần xin phép nhóm
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
