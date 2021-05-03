import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { routes } from 'constant/routes-detail-university';
//importing local
import Wrapper from 'modules/pages/detail-university/components/Wrapper';
//multiple i18n
import { useTranslation } from 'react-i18next';

function DetailUniversity(props) {
  //STATE
  const { t } = useTranslation();
  const navigationDetailUniversity = [
    {
      name: t('navBar.introduce'),
      field: '',
    },
    {
      name: t('navBar.major'),
      field: '/major',
    },
    {
      name: t('navBar.cooperation'),
      field: '/cooperation',
    },
    {
      name: t('navBar.gallery'),
      field: '/gallery',
    },
  ];
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
              {t('navBar.btn.comment')}
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
