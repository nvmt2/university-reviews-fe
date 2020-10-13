import React from "react";
import "./style.css";
import NavBar from "./nav-link/NavBar";
// import { } from "<i class="fa fa-search-minus" aria-hidden="true"></i>"

function Header() {
  return (
    <>
      <div className="container-fluid header-page">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 ">
            <div className="row">
              <div className="col-lg-1">
                <img
                  src="/assets/header/logo-cat.png"
                  alt="logo"
                  width="80px"
                ></img>
              </div>

              <div className="col-lg-9 nav">
                {/* Search form */}
                <div className="col-lg-9">
                  <form>
                    <div>
                      <i
                        className="fa fa-search fa-lg icons"
                        aria-hidden="true"
                      ></i>
                      <input
                        className="input-field"
                        type="text"
                        placeholder="Nhập tên trường cần tìm kiếm..."
                      />
                    </div>
                  </form>
                </div>
                {/* select list languages */}
                <div className="col-lg-3">
                  <form className="form-list-lang">
                    <img
                      src="/assets/header/Vietnam.jpg"
                      width="40px"
                      alt="logo vietnam"
                    />
                    <select name="language" className="list-lang">
                      <option>Vi</option>
                      <option>En</option>
                      <option>Fr</option>
                    </select>
                  </form>
                </div>
              </div>

              <div className="col-lg-2 nav">
                <div className="wrap-account">
                  <NavBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
