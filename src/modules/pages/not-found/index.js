import React from 'react';
import { NavLink } from 'react-router-dom';
//multiple i18n
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="wrap-not-found">
      <img
        src="/assets/not-found/not-found.png"
        className="img-notFound"
        alt="not-found"
      />
      <h5 className="text-not-found">{t('notFound.title')}</h5>
      <p className="content">{t('notFound.subTitle')}</p>
      <NavLink to="/">{t('notFound.link')}</NavLink>
    </div>
  );
}

export default NotFound;
