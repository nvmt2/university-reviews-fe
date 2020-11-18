import React, { useEffect } from "react";
import detailUniversityQuery from "query/detail-university";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import LoadingIcon from "common/loading/LoadingIcon";
import Author from "./common/Author";
import "./style/introduce.css";

function Introduce() {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(
    detailUniversityQuery.GET_INTRODUCE,
    {
      variables: {
        id: slug,
      },
    }
  );
  useEffect(() => {}, [data, loading, error]);

  const contentIntroduce =
    !loading &&
    !error &&
    !!data.allUniversities[0].detailUniversity &&
    data.allUniversities[0].detailUniversity.introduce;
  console.log("INTROCDUCE", data);
  return (
    <div className="intro-background">
      <div className="container ">
        <Author />
        <h1 className=" title-intro-Uni">Giới thiệu tổng quan</h1>
        <div>
          {!!contentIntroduce ? (
            <span>{parse(`${contentIntroduce}`)}</span>
          ) : (
            <LoadingIcon />
          )}
        </div>
        <h4 className="contact-intro">Liên lạc với chúng tôi</h4>
        {/* Form contact  */}
        <div className="container row group-contact">
          <div className="left-contact col-md-5">
            <img
              src="/assets/intro/contact.png"
              className="img-contact"
              alt="logo"
            />
            <p className="address-contact">
              Địa chỉ: Số 99 đường Hùng Vương, phường Hải Châu 1, quận Hải Châu,
              Tp. Đà Nẵng
            </p>
            <p className="address-contact">
              Điện thoại: (+84) 254.66441123- (+84) 254.6644112325
            </p>
          </div>
          <form className="form-contact col-md-4">
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
              <b className="more-contact">yduoc@gmail.com</b>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
