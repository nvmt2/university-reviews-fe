import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
//internal modules
import { defaultColor } from 'modules/pages/analysis/components/optionChart';
//internal components
import { SubBox } from 'theme/component/SubBox';
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
    legend: {
      show: true,
      labels: {
        colors: '#8e8e8e',
      },
    },
    stroke: {
      width: 7,
      curve: 'smooth',
    },
    xaxis: {
      categories: ['2019', '2020', '2021'],
      tickAmount: 10,
      labels: {
        show: true,
        style: {
          colors: '#8e8e8e',
        },
      },
    },
    title: {
      text: t('analysis.titleOfLineChart'),
      align: 'left',
      style: {
        fontSize: '16px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 500,
        color: '#8e8e8e',
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
          color: '#8e8e8e',
        },
      },
      labels: {
        show: true,
        style: {
          colors: '#8e8e8e',
        },
      },
    },
  };
  console.log('lineChart');
  return (
    <SubBox className="container-line-chart">
      <Chart options={options} series={series} type="line" />
    </SubBox>
  );
}

export default LineChart;
