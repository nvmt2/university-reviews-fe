// màu tương ứng với mỗi series
export const defaultColor = ['#54ecb9', '#fecc6a', '#3ba9fc'];
export const defaultDonutChartOption = {
  colors: defaultColor,
  chart: {
    type: 'donut',
    // toolbar: {
    //   show: true,
    // },
  },
  legend: {
    show: false,
    labels: {
      useSeriesColors: false,
    },
    markers: {
      strokeWidth: 100,
    },
  },
  plotOptions: {
    pie: {
      startAngle: 0,
      endAngle: 360,
      donut: {
        labels: {
          show: true,
          value: {
            show: true,
          },
          total: {
            show: true,
            label: 'Total',
            color: 'black',
            fontWeight: 600,
          },
        },
      },
    },
  },
};
