import React from "react";
import { useParams } from "react-router-dom";
import { Route, NavLink } from "react-router-dom";
import { routes, toRoutes } from "routes-detail-university";
//importing local
import Wrapper from "./Wrapper";
import "./style/nav.css";

const array = [
  {
    id: "123ie12bd@8",
    name: "Duy Tan",
    slug: "dtu",
    rating: 5,
  },
];
const slugs = array.map((item) => item.slug);
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
