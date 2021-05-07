import React from 'react';
import { NavLink } from 'react-router-dom';
//internal components
import { SubBox } from 'theme/component/SubBox';
//multiple i18n
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();

  return (
    <SubBox className="wrap-not-found">
      <img
        src="/assets/not-found/not-found.png"
        className="img-notFound"
        alt="not-found"
      />
      <h5 className="text-not-found">{t('notFound.title')}</h5>
      <p className="content">{t('notFound.subTitle')}</p>
      <NavLink to="/">{t('notFound.link')}</NavLink>
    </SubBox>
  );
}

export default NotFound;
