import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { navigationsUnAuthen, navigationsAuthentication } from "routes-main";
import NavBar from "./nav-link/NavBar";
import "./style.css";

function Header() {
  let state = useSelector((state) => state);
  // useEffect(() => {

  // });

  return (
    <div className="container-fluid header-page">
      <div className="row">
        <div className="col-lg-10 offset-lg-1 ">
          <div className="row">
            <div className="col-lg-1">
              <NavLink to="/">
                <img
                  id="logo-header"
                  src="/assets/header/logo.png"
                  alt="logo"
                  width="80px"
                  height="auto"
                ></img>
              </NavLink>
            </div>
            <div className="col-lg-8 nav">
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
                    <option>France</option>
                  </select>
                </form>
              </div>
            </div>

            <div className="col-lg-3 nav">
              <div className="wrap-account">
                {!!state.login.data.id ? (
                  <NavBar navigations={navigationsAuthentication} />
                ) : (
                  <NavBar navigations={navigationsUnAuthen} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
