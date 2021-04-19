import React from 'react';
//internal components
import DonutChart from 'modules/pages/analysis/components/DonutChart';
import LineChart from 'modules/pages/analysis/components/LineChart';
import Header from 'modules/pages/analysis/components/Header';

function AnalysisPage() {
  return (
    <div className=" analysis">
      <div className="container">
        {/* <h1>So sánh nhanh</h1> */}
        <h1>Nheo đáng ghét</h1>
        <Header />
        <DonutChart />
        <LineChart />
      </div>
    </div>
  );
}

export default AnalysisPage;
