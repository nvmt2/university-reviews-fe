import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Chart from 'react-apexcharts';
//internal modules
import { getAverageRating } from 'helper/getAverageRating';
import { defaultOption } from 'modules/pages/analysis/components/optionChart';

function DonutChart() {
  //STATE
  const { ratingsUni } = useSelector((state) => state.analysis);
  const { infoUni } = useSelector((state) => state.analysis);
  const [qualityOfEducationSeries] = useState([]);
  const [infrastructure] = useState([]);
  const [fee] = useState([]);
  const [activities] = useState([]);
  const [jobOpportunities] = useState([]);
  const [label] = useState([]);
  const seriesTest = [1, 2, 2];

  const qualityOfEducationOption = {
    ...defaultOption,
    labels: label,
    // tiêu đề chú thích cho biểu đồ
    title: {
      text: 'GIÁO DỤC',
      align: 'centner',
      style: {
        fontSize: '15px',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#263238',
      },
    },
  };
  const infrastructureOption = {
    ...defaultOption,
    labels: label,
    // tiêu đề chú thích cho biểu đồ
    title: {
      text: 'CƠ SỞ HẠ TẦNG',
      align: 'centner',
      style: {
        fontSize: '15px',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#263238',
      },
    },
  };
  const feeOption = {
    ...defaultOption,
    labels: label,
    // tiêu đề chú thích cho biểu đồ
    title: {
      text: 'HỌC PHÍ',
      align: 'centner',
      style: {
        fontSize: '15px',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#263238',
      },
    },
  };
  const activitiesOption = {
    ...defaultOption,
    labels: label,
    // tiêu đề chú thích cho biểu đồ
    title: {
      text: 'HOẠT ĐỘNG TRONG TRƯỜNG',
      align: 'centner',
      style: {
        fontSize: '15px',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#263238',
      },
    },
  };
  const jobOpportunitiesOption = {
    ...defaultOption,
    labels: label,
    // tiêu đề chú thích cho biểu đồ
    title: {
      text: 'CƠ HỘI VIỆC LÀM',
      align: 'centner',
      style: {
        fontSize: '15px',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#263238',
      },
    },
  };
  //LIFECYCLE
  useEffect(() => {
    if (ratingsUni.length !== 0) {
      ratingsUni.map((item) => {
        qualityOfEducationSeries.push(
          getAverageRating(item.allRatings, 'qualityOfEducation')
        );
        infrastructure.push(
          getAverageRating(item.allRatings, 'infrastructure')
        );
        fee.push(getAverageRating(item.allRatings, 'fee'));
        activities.push(getAverageRating(item.allRatings, 'activities'));
        jobOpportunities.push(
          getAverageRating(item.allRatings, 'jobOpportunities')
        );
        return null;
      });
    }
  }, [ratingsUni]);
  useEffect(() => {
    if (infoUni.length) {
      infoUni.map((item) => label.push(item.University.code));
    }
  }, []);
  return (
    <div className="container-donut-chart">
      {/* <h6>Tỷ lệ đánh giá của người dùng cho mỗi trường</h6> */}
   
      <div className="wrapper-donut-chart">
        {/* <Chart
          options={qualityOfEducationSeriesOptions}
          series={seriesTest}
          type="donut"
          width={250}
          height={250}
        />
        <Chart
          options={qualityOfEducationSeriesOptions}
          series={seriesTest}
          type="donut"
          width={250}
          height={250}
        />
        <Chart
          options={qualityOfEducationSeriesOptions}
          series={seriesTest}
          type="donut"
          width={250}
          height={250}
        />
        <Chart
          options={qualityOfEducationSeriesOptions}
          series={seriesTest}
          type="donut"
          width={250}
          height={250}
        />
        <Chart
          options={qualityOfEducationSeriesOptions}
          series={seriesTest}
          type="donut"
          width={250}
          height={250}
        /> */}

        <Chart
          options={qualityOfEducationOption}
          series={qualityOfEducationSeries}
          type="donut"
          width={250}
          height={250}
        />
        <Chart
          options={infrastructureOption}
          series={infrastructure}
          type="donut"
          width={250}
          height={250}
        />
        <Chart
          options={feeOption}
          series={fee}
          type="donut"
          width={250}
          height={250}
        />
        <Chart
          options={activitiesOption}
          series={activities}
          type="donut"
          width={250}
          height={250}
        />
        <Chart
          options={jobOpportunitiesOption}
          series={jobOpportunities}
          type="donut"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
}

export default DonutChart;
