import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                  NHÓM C1SE.04<span></span>
                </h5>
                <p>
                  Là trang web cung cấp thông tin về các trường đại học, và nơi
                  chia sẻ quan điểm...{' '}
                </p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Truy cập nhanh<span></span>
                </h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Trang chủ</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Chi tiết trường học</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Bài đăng nổi bật</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Đánh giá</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Khu vực</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Chuyên ngành</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Câu hỏi thường găp</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Bắt đầu<span></span>
                </h5>
                <p>Đăng nhập để cùng trải nghiệm</p>
                <a className="btn btn-home-page" href="#." target="_blank">
                  Register Now
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Liên lạc<span></span>
                </h5>
                <p>cs1e.04@gmail.com</p>
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
