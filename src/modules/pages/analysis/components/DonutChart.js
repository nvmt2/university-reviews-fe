import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Chart from 'react-apexcharts';
//internal modules
import { getAverageRating } from 'helper/getAverageRating';
import { defaultDonutChartOption } from 'modules/pages/analysis/components/optionChart';
//internal component
import { SubBox } from 'theme/component/SubBox';
//multiple i18n
import { useTranslation } from 'react-i18next';

function DonutChart() {
  //STATE
  const { t } = useTranslation();
  const { ratingsUni } = useSelector((state) => state.analysis);
  const { infoUni } = useSelector((state) => state.analysis);
  const [qualityOfEducationSeries, setQualityOfEducationSeries] = useState([]);
  const [infrastructure, setInfrastructure] = useState([]);
  const [fee, setFee] = useState([]);
  const [activities, setActivities] = useState([]);
  const [jobOpportunities, setJobOpportunities] = useState([]);
  const [label] = useState([]);

  const qualityOfEducationOption = {
    ...defaultDonutChartOption,
    labels: label,
    // tiêu đề chú thích cho biểu đồ
    title: {
      text: t('analysis.qualityOfEducation'),
      align: 'center',
      style: {
        fontSize: '15px',
        fontWeight: 'bold',
        fontFamily: 'Helvetica, Arial, sans-serif',
        color: '#8e8e8e',
      },
    },
  };
  const infrastructureOption = {
    ...defaultDonutChartOption,
    labels: label,
    // tiêu đề chú thích cho biểu đồ
    title: {
      text: t('analysis.infrastructure'),
      align: 'center',
      style: {
        fontSize: '15px',
        fontWeight: 'bold',
        fontFamily: 'Helvetica, Arial, sans-serif',
        color: '#8e8e8e',
      },
    },
  };
  const feeOption = {
    ...defaultDonutChartOption,
    labels: label,
    // tiêu đề chú thích cho biểu đồ
    title: {
      text: t('analysis.fee'),
      align: 'center',
      style: {
        fontSize: '15px',
        fontWeight: 'bold',
        fontFamily: 'Helvetica, Arial, sans-serif',
        color: '#8e8e8e',
      },
    },
  };
  const activitiesOption = {
    ...defaultDonutChartOption,
    labels: label,
    // tiêu đề chú thích cho biểu đồ
    title: {
      text: t('analysis.activities'),
      align: 'center',
      style: {
        fontSize: '15px',
        fontWeight: 'bold',
        fontFamily: 'Helvetica, Arial, sans-serif',
        color: '#8e8e8e',
      },
    },
  };
  const jobOpportunitiesOption = {
    ...defaultDonutChartOption,
    labels: label,
    // tiêu đề chú thích cho biểu đồ
    title: {
      text: t('analysis.jobOpportunities'),
      align: 'center',
      style: {
        fontSize: '15px',
        fontWeight: 'bold',
        fontFamily: 'Helvetica, Arial, sans-serif',
        color: '#8e8e8e',
      },
    },
  };
  //LIFECYCLE
  useEffect(() => {
    if (ratingsUni.length !== 0) {
      setQualityOfEducationSeries([]);
      setInfrastructure([]);
      setFee([]);
      setActivities([]);
      setJobOpportunities([]);
      ratingsUni.map((item) => {
        let averageQualityOfEducation = getAverageRating(
          item.allRatings,
          'qualityOfEducation'
        );
        let averageInfrastructure = getAverageRating(
          item.allRatings,
          'infrastructure'
        );
        let averageFee = getAverageRating(item.allRatings, 'fee');
        let averageActivities = getAverageRating(item.allRatings, 'activities');
        let averageJobOpportunities = getAverageRating(
          item.allRatings,
          'jobOpportunities'
        );

        setQualityOfEducationSeries((preValue) => [
          ...preValue,
          averageQualityOfEducation,
        ]);
        setInfrastructure((preValue) => [...preValue, averageInfrastructure]);
        setFee((preValue) => [...preValue, averageFee]);
        setActivities((preValue) => [...preValue, averageActivities]);
        setJobOpportunities((preValue) => [
          ...preValue,
          averageJobOpportunities,
        ]);
        return null;
      });
    }
  }, [ratingsUni]);

  useEffect(() => {
    if (infoUni.length) {
      infoUni.map((item) => label.push(item.University.code));
    }
  }, [infoUni]);
  console.log('DonutChart');
  return (
    <SubBox>
      <div className="container-donut-chart">
        <h6>{t('analysis.titleOfDinutChart')}</h6>
        <hr></hr>
        <div className="wrapper-donut-chart">
          <Chart
            options={qualityOfEducationOption}
            series={qualityOfEducationSeries}
            type="donut"
            width={200}
            height={200}
          />
          <Chart
            options={infrastructureOption}
            series={infrastructure}
            type="donut"
            width={200}
            height={200}
          />
          <Chart
            options={feeOption}
            series={fee}
            type="donut"
            width={200}
            height={200}
          />
          <Chart
            options={activitiesOption}
            series={activities}
            type="donut"
            width={200}
            height={200}
          />
          <Chart
            options={jobOpportunitiesOption}
            series={jobOpportunities}
            type="donut"
            width={200}
            height={200}
          />
        </div>
      </div>
    </SubBox>
  );
}

export default DonutChart;
