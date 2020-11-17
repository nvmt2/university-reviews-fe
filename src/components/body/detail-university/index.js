import React from "react";
import { Route, NavLink } from "react-router-dom";
import { routes, navigations } from "routes-detail-university";
//importing local
import Wrapper from "./Wrapper";
import "./style/nav.css";

function Index(props) {
  return (
    <Wrapper>
      <div className="wrap-detail-university">
        <ul className="nav-detail-university">
          {navigations.map((item, index) => (
            <li key={index}>
              <NavLink
                to={() => {
                  return {
                    pathname: `/detail-university/${localStorage["slugUniversity"]}${item.field}`, //Because it don't keep old slug, it update new slug
                  };
                }}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to={(location) => {
                return {
                  pathname: `/topics/${localStorage["slugUniversity"]}`,
                };
              }}
            >
              <button className="btn btn-warning">Bình luận </button>
            </NavLink>
          </li>
        </ul>
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
      </div>
    </Wrapper>
  );
}

export default Index;
