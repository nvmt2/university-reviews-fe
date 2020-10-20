import React from "react";
import "./Introduce.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';

function Introduce() {
  return (
    <div className="intro-Uni">
      <div className="container">
        <p className="infor-intro">admin.duytan</p>
        <div className="row dates-intro">
          <p className="date-intro ">07/05/2020</p>
          <p className="date-intro">4:30:PM</p>
          <p className="date-intro">- 89 lượt đọc</p>
        </div>
      </div>
      <h1 className="container title-intro-Uni">Giới thiệu tổng quan</h1>
      <div className='view-intro'>
        <img src='/assets/intro/logo.png' className='logo-intro' />
        <FavoriteIcon />
        <p className='count-view'>0</p>
        <VisibilityIcon />
      </div>
      <div className="container main-intro-Uni">
        <h4 className="title-main-intro">Sơ lược</h4>

        <p className="content-intro">
          Tọa lạc giữa trung tâm thành phố Đà Nẵng, bên bờ biển Thái Bình Dương
          quanh năm đầy nắng ấm, Đại học Duy Tân đang từng ngày vươn lên cùng
          thành phố với khát vọng đổi mới theo hướng hiện đại. Được thành lập từ
          ngày 11/11/1994 theo Quyết định Số 666/TTg của Thủ tướng Chính phủ,
          Đại học Duy Tân là trường Đại học Tư thục đầu tiên và Lớn nhất miền
          Trung đào tạo đa bậc, đa ngành, đa lĩnh vực
        </p>

        <h4 className="title-main-intro">Sứ mạng</h4>

        <p className="content-intro">
          Đào tạo, Nghiên cứu gắn liền với Khoa học và Công nghệ nhằm tạo ra
          những Sinh viên và Học viên có lòng yêu nước, có phẩm chất Nhân văn
          mang đậm Bản sắc Việt Nam, có ý thức sinh hoạt cộng...
        </p>
        
        <h4 className="title-main-intro">Cơ sở vật chất</h4>

        <div className="row infrastructure">
          <img
            src="/assets/intro/csvc.jpg"
            className="img-infrastructure col-md-5"
          />
          <div className="group-infrastructure col-md-7">
            <a href="#" className="title-infrastructure">
              Đại học Duy Tân với Hệ thống Cơ sở Vật chất Hiện Đại Bậc nhất miền
              Trung
            </a>
            <p className="content-infrastructure">
              Bên cạnh việc chú trọng xây dựng đội ngũ giảng viên có trình độ
              chuyên môn cao cùng hợp tác quốc tế để nâng cao chất lượng đào
              tạo, việc đẩy mạnh đầu tư cơ sở vật chất là một trong những..
            </p>
          </div>
        </div>
        <h4 className="contact-intro">Liên lạc với chúng tôi</h4>

        <div className="row group-contact">
          <div className="left-contact col-md-5">
            <img src="/assets/intro/contact.png" className="img-contact" />
            <p className="address-contact">
              Địa chỉ: 254 Nguyễn Văn Linh, Quận Thanh Khê - Tp. Đà Nẵng
            </p>
            <p className="address-contact">
              Điện thoại: (+84) 236.3650403 - (+84) 236.3827111
            </p>
          </div>
          <form className="form-contact col-md-7">
            <input type="text" className="name-contact" placeholder="Họ" />
            <input type="text" className="name-contact" placeholder="Tên" />
            <input type="email" className="name-contact" placeholder="Email" />
            <input
              type="number"
              className="name-contact"
              placeholder="Số điện thoại"
            />
            <button className="send-contact">Gửi thông tin</button>
            <p className="content-form-contact">
              Hoặc muốn biết thêm thông tin về trường liên lạc qua{" "}
              <b className="more-contact">dtu@gmail.com</b>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
