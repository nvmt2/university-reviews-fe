import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
//internal modules
import { defaultColor } from 'modules/pages/analysis/components/optionChart';
//multiple i18n
import { useTranslation } from 'react-i18next';

function LineChart() {
  const { t } = useTranslation();
  const series = useSelector((state) => state.analysis.ratingThreeYears);
  let options = {
    colors: defaultColor,
    chart: {
      height: 350,
      type: 'line',
    },
    stroke: {
      width: 7,
      curve: 'smooth',
    },
    xaxis: {
      categories: ['31/12/2019', '31/12/2020', '31/12/2021'],
      tickAmount: 10,
    },
    title: {
      text: t('analysis.titleOfLineChart'),
      align: 'left',
      style: {
        fontSize: '16px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 500,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        // gradientToColors: ['#FDD835'],
        // shadeIntensity: 1,
        // type: 'horizontal',
        // opacityFrom: 1,
        // opacityTo: 1,
        // stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 4,
      colors: ['#FFA41B'],
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: 0,
      max: 5,
      title: {
        text: t('analysis.noteY'),
        style: {
          fontSize: '15px',
          fontFamily: 'Roboto',
          fontWeight: 700,
        },
      },
    },
  };
  console.log('lineChart');
  return (
    <div className="container-line-chart">
      <Chart options={options} series={series} type="line" />
    </div>
  );
}

export default LineChart;
