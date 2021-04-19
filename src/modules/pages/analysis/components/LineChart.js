import React from 'react';
import Chart from 'react-apexcharts';

function LineChart() {
  let series = [
    {
      name: 'Likes',
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ];
  let options = {
    chart: {
      height: 350,
      type: 'line',
    },
    stroke: {
      width: 7,
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '1/11/2000',
        '2/11/2000',
        '3/11/2000',
        '4/11/2000',
        '5/11/2000',
        '6/11/2000',
        '7/11/2000',
        '8/11/2000',
        '9/11/2000',
        '10/11/2000',
        '11/11/2000',
        '12/11/2000',
        '1/11/2001',
        '2/11/2001',
        '3/11/2001',
        '4/11/2001',
        '5/11/2001',
        '6/11/2001',
      ],
      tickAmount: 10,
    },
    title: {
      text: 'Chi Phi 3 năm gần nhất',
      align: 'left',
      style: {
        fontSize: '16px',
        color: '#666',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
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
      min: -10,
      max: 40,
      title: {
        text: 'Engagement',
      },
    },
  };
  return (
    <div>
      <Chart options={options} series={series} type="line" />
    </div>
  );
}

export default LineChart;
