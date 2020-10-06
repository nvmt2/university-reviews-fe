import React from "react";
import "./style.css";
import NavBar from "./nav-link/NavBar";
// import { } from ""

function Header() {
  return (
    <>
      <div className="container-fluid border background-color-header">
        <div className="row">
          <div className="col-lg-2 border">
            <img src="" alt="logo"></img>
          </div>
          <div className="col-lg-7 border">
            <ul className="list-header ">
              <li>
                <form className="border-red ">
                  <input
                    className="search border-red "
                    type="text"
                    placeholder="Tìm kiếm... "
                  />
                  <button type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <span>Nhập tên trường cần tìm</span>
                  </button>
                </form>
              </li>
              <li>logo VietNam</li>
              <li>drop box</li>
              <li>vi</li>
            </ul>
          </div>
          <div className="col-lg-3 border">
            <NavBar />
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
