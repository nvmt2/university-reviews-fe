import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { routes } from 'constant/routes-detail-university';
import { navigationDetailUniversity } from 'constant/navigation';
//importing local
import Wrapper from 'modules/pages/detail-university/components/Wrapper';

function DetailUniversity(props) {
  return (
    <Wrapper>
      <div className="wrap-detail-university">
        <ul className="nav-detail-university">
          {navigationDetailUniversity.map((item, index) => (
            <li key={index}>
              <NavLink
                to={() => {
                  return {
                    pathname: `/detail-university/${localStorage['slugUniversity']}${item.field}`, //Because it don't keep old slug, it update new slug
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
                  pathname: `/topics/${localStorage['slugUniversity']}`,
                };
              }}
            >
              Bình luận
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

export default DetailUniversity;
