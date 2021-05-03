import React from 'react';
//internal components
import DonutChart from 'modules/pages/analysis/components/DonutChart';
import LineChart from 'modules/pages/analysis/components/LineChart';
import Header from 'modules/pages/analysis/components/Header';
//multiple i18n
import { useTranslation } from 'react-i18next';

function AnalysisPage() {
  //STATE
  const { t } = useTranslation();
  return (
    <div className=" analysis">
      <div className="container">
        {/* <h1>So sánh nhanh</h1> */}
        <h1>{t('analysis.title')}</h1>
        <Header />
        <DonutChart />
        <LineChart />
      </div>
    </div>
  );
}

export default AnalysisPage;
