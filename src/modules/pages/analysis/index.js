import React from 'react';
//internal components
import DonutChart from 'modules/pages/analysis/components/DonutChart';
import LineChart from 'modules/pages/analysis/components/LineChart';
import Header from 'modules/pages/analysis/components/Header';
import { MyContainer } from 'theme/component/MyContainer';
//multiple i18n
import { useTranslation } from 'react-i18next';

function AnalysisPage() {
  //STATE
  const { t } = useTranslation();
  return (
    <MyContainer className=" analysis">
      <div className="container">
        <h1>{t('analysis.title')}</h1>
        <Header />
        <DonutChart />
        <LineChart />
      </div>
    </MyContainer>
  );
}

export default AnalysisPage;
