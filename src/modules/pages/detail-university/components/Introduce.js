import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { useDispatch } from 'react-redux';
//internal modules
import detailUniversityQuery from 'query/detail-university';
//internal components
import LoadingIcon from 'common/loading/LoadingIcon';
import Author from 'modules/pages/detail-university/common/Author';
import FormMail from 'modules/pages/detail-university/common/FormMail';
import FormRating from 'modules/pages/detail-university/components/FormRating';
//multiple i18n
import { useTranslation } from 'react-i18next';

function Introduce() {
  //STATE
  const { t } = useTranslation();
  const { slug } = useParams();
  //query apollo
  const { data, loading, error } = useQuery(
    detailUniversityQuery.GET_INTRODUCE,
    {
      variables: {
        id: slug,
      },
    }
  );
  const contentIntroduce =
    !loading &&
    !error &&
    !!data.allUniversities[0].detailUniversity &&
    data.allUniversities[0].detailUniversity.introduce;

  // let myLoading = false;
  // setTimeout(() => {
  //   myLoading = false;
  // }, 3000);

  // useEffect(() => {}, [data, loading, error, myLoading]);

  return (
    <div className="intro-background">
      <div className="container">
        <Author />
        <h1 className=" title-intro-Uni">
          {t('detailUniversity.introduce.title')}
        </h1>
        {!!contentIntroduce ? (
          <span>
            <div className="form-rating-layout">
              <FormRating />
            </div>
            {parse(`${contentIntroduce}`)}
          </span>
        ) : (
          <LoadingIcon />
        )}
        <div className="container row group-contact">
          <FormMail />
        </div>
      </div>
    </div>
  );
}

export default Introduce;
