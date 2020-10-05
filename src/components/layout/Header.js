import React from "react";
import "./style.css";
import NavBar from "./nav-link/NavBar";

function Header() {
  return (
    <>
      <div className="container-fluid border header-page">
        <div className="row">
          <div className="col-lg-2 border">
            <img src="" alt="logo"></img>
          </div>
          <div className="col-lg-7 border">
            <ul>
              <li>
                <fieldset>
                  <input
                    className="search"
                    type="text"
                    placeholder="Tìm kiếm... "
                  ></input>
                </fieldset>
              </li>
              <li>logo VietNam</li>
              <li>
                
              </li>
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
