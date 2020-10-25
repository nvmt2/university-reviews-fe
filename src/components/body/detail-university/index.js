import React from "react";
import { useParams } from "react-router-dom";
import { Route, NavLink } from "react-router-dom";
import { routes, toRoutes } from "routes-detail-university";
import Wrapper from "./Wrapper";
import "./style/nav.css";

function Index(props) {
  const slug = useParams();
  return (
    <Wrapper>
      <div className="wrap-detail-university">
        <ul className="nav-detail-university">
          {toRoutes.map((item, index) => (
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
        </ul>
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
      </div>
    </Wrapper>
  );
}

export default Index;
