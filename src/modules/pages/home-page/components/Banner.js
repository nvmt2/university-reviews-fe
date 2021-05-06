import React from 'react';
//multiple i18n
import { useTranslation } from 'react-i18next';

function Banner() {
  const { t } = useTranslation();
  return (
    <div id="bg-banner" className="text-center">
      <h1 className="font-weight-bold text-white">{t('bannerMain.title')}</h1>
      <h3 className="text-center text-light">{t('bannerMain.description')}</h3>
    </div>
  );
}

export default Banner;
