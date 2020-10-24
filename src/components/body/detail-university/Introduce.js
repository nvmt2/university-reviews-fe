import React, { useEffect } from 'react';
import detailUniversityQuery from "query/detail-university";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import Loading from "common/Loading";
import Author from "./common/Author";
import Sticky from "./common/Sticky";
import "./style/introduce.css";


function Introduce() {
    const { slug } = useParams();
    const { data, loading, error } = useQuery(detailUniversityQuery.GET_INTRODUCE, {
        variables: {
            id: slug
        }
    })
    useEffect(()=>{

    }, [data, loading, error]);
    const contentIntroduce = !loading && !error && !!data && data.allUniversities[0].detailUniversity.introduce
    return (
      <>
      <Sticky />
      <div className="intro-Uni container">
      <div className=" main-intro-Uni">
      <Author />
      <h1 className=" title-intro-Uni">Giới thiệu tổng quan</h1>
        {
            !!contentIntroduce ? (
                <span>
                    {
                     parse(`${contentIntroduce}`)
                    }
                </span>
            ) :(
                <Loading />
            )
        }  
     
   
        <h4 className="contact-intro">Liên lạc với chúng tôi</h4>
        {/* Form contact  */}
        <div className="row group-contact">
          <div className="left-contact col-md-5">
            <img src="/assets/intro/contact.png" className="img-contact" alt="logo" />
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
    </>
  );
}

export default Introduce;
